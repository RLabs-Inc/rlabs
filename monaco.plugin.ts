// @ts-nocheck
import metadata from 'monaco-editor/esm/metadata.js';
import path from 'node:path';
import type { PluginOption } from 'vite';

function filterNull(list) {
    return list.filter(Boolean);
}

function resolveLanguages(languages, customLanguages) {
    if (languages === '*' || languages === 'all') {
        return filterNull(metadata.languages.concat(customLanguages));
    }
    if (languages.length <= 0) {
        return filterNull(customLanguages);
    }
    const langById = {};
    metadata.languages.forEach((l) => langById[l.label] = l);
    
    function resolveLanguage(name) {
        const lang = langById[name];
        if (!lang) {
            console.error("[monaco] unknown language:", name);
            return null;
        }
        return lang;
    }
    return filterNull(languages.map(resolveLanguage).concat(customLanguages));
}

function resolveFeatures(features) {
    if (!features) {
        return metadata.features;
    }
    if (features === '*' || features === 'all') {
        return metadata.features;
    }
    const featureById = {};
    metadata.features.forEach((f) => featureById[f.label] = f);
    featureById['codicons'] = {
        label: 'codicons',
        entry: 'vs/base/browser/ui/codicons/codiconStyles.js',
    };

    function resolveFeature(name) {
        const feature = featureById[name];
        if (!feature) {
            console.error("[monaco] unknown feature:", name);
            return null;
        }
        return feature;
    }

    const excluded = features.filter((f) => f[0] === '!').map((f) => f.slice(1));
    if (excluded.length > 0) {
        return filterNull(Object.keys(featureById)
            .filter((f) => !excluded.includes(f))
            .map(resolveFeature));
    }
    return filterNull(features.map(resolveFeature));
}

const editor_module = {
    label: 'editorWorkerService',
    entry: undefined,
    worker: {
        id: 'vs/editor/editor',
        entry: 'vs/editor/editor.worker',
    },
};

function resolveWorkers(languages, features) {
    const modules = [editor_module].concat(languages).concat(features);
    const workers = [];
    modules.forEach((mod) => {
        if (mod.worker) {
            workers.push({
                label: mod.label,
                id: mod.worker.id,
                entry: mod.worker.entry,
            });
        }
    });
    return workers;
}

function resolveModule(file) {
    const url = import.meta.resolve(file).toString();
    return url.replace(/^file:\/\//, '');
}

function resolveMonacoPath(file) {
    try {
        return resolveModule(path.join('monaco-editor/esm', file));
    }
    catch (e) { }
    try {
        return resolveModule(path.join(process.cwd(), 'node_modules/monaco-editor/esm', file));
    }
    catch (e) { }
    return resolveModule(file);
}

export function monaco(options) {
    const languages = resolveLanguages(options?.languages || [], options?.customLanguages || []);
    const features = resolveFeatures(options?.features);
    const workers = resolveWorkers(languages, features);

    return {
        name: 'monaco',
        enforce: 'pre' as const,
        config(config) {
            if (!config.optimizeDeps) {
                config.optimizeDeps = {};
            }
            const optimizeDeps = config.optimizeDeps;
            if (!optimizeDeps.exclude) {
                optimizeDeps.exclude = [];
            }
            optimizeDeps.exclude.push('monaco-editor');
            if (optimizeDeps.include) {
                console.log("[monaco] removed 'monaco-editor' from the optimizeDeps.include setting.");
                optimizeDeps.include = optimizeDeps.include.filter((i) => i === 'monaco-editor');
            }
        },
        load(id) {
            if (id.match(/esm[/\\]vs[/\\]editor[/\\]editor.main.js/)) {
                const workerPaths = (workers.map((worker) => {
                    return `"${worker.label}": () => new ${worker.label}()`;
                }));
                const workerPathsJson = '{' + workerPaths.join(',') + '}';
                const result = [
                    ...workers.map((worker) => {
                        return `import ${worker.label} from '${resolveMonacoPath(worker.entry)}?worker'`;
                    }),
                    `self['MonacoEnvironment'] = (function (paths) {
                        return {
                            globalAPI: ${options?.globalAPI || false},
                            getWorker: function (moduleId, label) {
                                var result = paths[label];
                                return result();
                            },
                        };
                    })(${workerPathsJson});`,
                    ...features.flatMap((feature) => feature.entry).map((entry) => `import "${resolveMonacoPath(entry)}";`),
                    ...languages.flatMap((lang) => lang.entry).map((entry) => `import "${resolveMonacoPath(entry)}";`),
                    "export * from './editor.api.js';"
                ].join('\n');
                return result;
            }
            else if (id.match(/esm[/\\]vs[/\\]editor[/\\]editor.all.js/)) {
                return 'throw "Please use esm/vs/editor.main.js or monaco-editor directly instead!"';
            }
            else if (id.match(/esm[/\\]vs[/\\]editor[/\\]edcore.main.js/)) {
                return 'throw "Please use esm/vs/editor.main.js or monaco-editor directly instead!"';
            }
        },
    };
}
