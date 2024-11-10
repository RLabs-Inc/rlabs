import type * as Monaco from 'monaco-editor-core';
import { createHighlighter, type Highlighter } from 'shiki';
import { shikiToMonaco } from '@shikijs/monaco';
// Import the workers in a production-safe way.
// This is different than in Monaco's documentation for Vite,
// but avoids a weird error ("Unexpected usage") at runtime

let editor: Monaco.editor.IStandaloneCodeEditor;
let model: Monaco.editor.ITextModel | null;
let monaco: typeof Monaco;
let highlighter: Highlighter;

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
  'cpp',
  'c',
  'lua',
  'sql',
  'yaml',
  'json',
  'bash',
  'markdown'
];

function getMonacoEditor() {
  const registerLanguages = () => {
    languages.forEach((lang) => monaco?.languages.register({ id: lang }));
  };

  const initMonaco = async (
    theme: string,
    snippet: string,
    lang: string,
    editorContainer: HTMLDivElement
  ) => {
    monaco = (await import('./monaco-worker')).default;
    registerLanguages();
    highlighter = await createHighlighter({
      themes: [JSON.parse(theme), 'catppuccin-mocha', 'dracula'],
      langs: languages
    });
    shikiToMonaco(highlighter, monaco);
    editor = monaco.editor.create(editorContainer, {
      value: snippet,
      language: lang,
      theme: 'theme',
      readOnly: true,
      fontFamily: 'Recursive, monospace',
      'semanticHighlighting.enabled': true,
      minimap: { enabled: false }
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
    changeTheme
  };
}

export { getMonacoEditor };
