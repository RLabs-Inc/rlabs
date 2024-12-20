import type * as Monaco from 'monaco-editor-core';
import { browser } from '$app/environment';
import { createHighlighterCore, type HighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import { shikiToMonaco } from '@shikijs/monaco';

let editor: Monaco.editor.IStandaloneCodeEditor;
let model: Monaco.editor.ITextModel | null;
let monaco: typeof Monaco;
let highlighter: HighlighterCore;

const languages = [
  'typescript',
  'javascript',
  'html',
  'css',
  'scss',
  'vue',
  'vue-html',
  'svelte',
  'tsx',
  'ruby',
  'php',
  'go',
  'java',
  'kotlin',
  'dart',
  'csharp',
  'python',
  'rust',
  'swift',
  // 'cpp',
  'c',
  'lua',
  'sql',
  'yaml',
  'json',
  'bash',
  'markdown'
];

export function getMonacoEditor() {
  if (!browser) return;

  const registerLanguages = () => {
    languages.forEach((lang) => monaco?.languages.register({ id: lang }));
  };

  const initMonaco = async (
    theme: string,
    snippet: string,
    lang: string,
    fontSize: number,
    fontWeight: string,
    editorContainer: HTMLDivElement
  ) => {
    if (!browser) return;
    // Import only the essential parts we need
    const monacoCore = await import('monaco-editor-core/esm/vs/editor/editor.api');
    monaco = monacoCore;
    registerLanguages();
    highlighter = await createHighlighterCore({
      themes: [JSON.parse(theme)],
      langs: [
        import('shiki/langs/javascript.mjs'),
        import('shiki/langs/typescript.mjs'),
        import('shiki/langs/html.mjs'),
        import('shiki/langs/css.mjs'),
        import('shiki/langs/scss.mjs'),
        import('shiki/langs/vue.mjs'),
        import('shiki/langs/vue-html.mjs'),
        import('shiki/langs/svelte.mjs'),
        import('shiki/langs/tsx.mjs'),
        import('shiki/langs/ruby.mjs'),
        import('shiki/langs/php.mjs'),
        import('shiki/langs/go.mjs'),
        import('shiki/langs/java.mjs'),
        import('shiki/langs/kotlin.mjs'),
        import('shiki/langs/dart.mjs'),
        import('shiki/langs/csharp.mjs'),
        import('shiki/langs/python.mjs'),
        import('shiki/langs/rust.mjs'),
        import('shiki/langs/swift.mjs'),
        // import('shiki/langs/cpp.mjs'),
        import('shiki/langs/c.mjs'),
        import('shiki/langs/lua.mjs'),
        import('shiki/langs/sql.mjs'),
        import('shiki/langs/yaml.mjs'),
        import('shiki/langs/json.mjs'),
        import('shiki/langs/bash.mjs'),
        import('shiki/langs/markdown.mjs')
      ], // no languages
      engine: createOnigurumaEngine(import('shiki/wasm'))
    });
    shikiToMonaco(highlighter, monaco);
    editor = monaco.editor.create(editorContainer, {
      value: snippet,
      language: lang,
      theme: 'theme',
      readOnly: true,
      fontFamily: "'Recursive', monospace",
      fontSize: fontSize,
      fontWeight: fontWeight,
      'semanticHighlighting.enabled': true,
      minimap: {
        enabled: true
      },
      quickSuggestions: false,
      parameterHints: { enabled: false },
      suggestOnTriggerCharacters: false,
      acceptSuggestionOnEnter: 'off',
      tabCompletion: 'off'
    });
    model = monaco.editor.createModel(snippet, lang);
    editor.setModel(model);
  };

  const dispose = () => {
    model?.dispose();
    editor?.dispose();
  };

  const changeModel = (snippet: string, lang: string) => {
    monaco.editor.getModels().forEach((model) => model.dispose());
    model = monaco.editor.createModel(snippet, lang);
    editor.setModel(model);
  };

  const changeFont = (fontSize: number, fontWeight: string) => {
    editor?.updateOptions({ fontSize: fontSize, fontWeight: fontWeight });
  };

  const changeTheme = (theme: string) => {
    if (highlighter) {
      highlighter.setTheme(JSON.parse(theme));
      registerLanguages();
      shikiToMonaco(highlighter, monaco);
    }
  };

  return {
    initMonaco,
    highlighter,
    editor,
    model,
    dispose,
    changeModel,
    changeTheme,
    changeFont
  };
}
