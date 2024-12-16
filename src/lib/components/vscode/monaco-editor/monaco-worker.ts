import * as monaco from 'monaco-editor-core';
import editorWorker from 'monaco-editor-core/esm/vs/editor/editor.worker?worker';

declare global {
  interface Window {
    MonacoEnvironment: {
      getWorker: (moduleId: string, label: string) => Worker;
    };
  }
}

self.MonacoEnvironment = {
  getWorker: function () {
    return new editorWorker();
  }
};

export default monaco;
