import type { SemanticTokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getFunctionSemanticTokens({ syntaxColors }: TokenColors): SemanticTokenColor {
  return {
    // Function declarations and calls
    function: syntaxColors.functionCall,
    'function.declaration': syntaxColors.function,
    'function.defaultLibrary': syntaxColors.supportFunction,

    // Method declarations and calls
    method: syntaxColors.methodCall,
    'method.declaration': syntaxColors.method,
    'method.defaultLibrary': syntaxColors.supportMethod,

    // Language specific
    'function.decorator:python': syntaxColors.function
  };
}
