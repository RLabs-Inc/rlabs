import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getPhpTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'PHP Builtin Attributes',
      scope: ['support.attribute.builtin'],
      settings: {
        foreground: syntaxColors.supportProperty
      }
    },
    {
      name: 'PHP Custom Attributes',
      scope: ['meta.attribute.php'],
      settings: {
        foreground: syntaxColors.attribute
      }
    },
    {
      name: 'PHP Function Parameters',
      scope: 'meta.function.parameters.php punctuation.definition.variable.php',
      settings: {
        foreground: syntaxColors.parameter
      }
    },
    {
      name: 'PHP Language Constants',
      scope: 'constant.language.php',
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'PHP Built-in Functions',
      scope: 'text.html.php support.function',
      settings: {
        foreground: syntaxColors.supportFunction
      }
    },
    {
      name: 'PHPDoc Keywords',
      scope: 'keyword.other.phpdoc.php',
      settings: {
        foreground: syntaxColors.keyword
      }
    },
    {
      name: 'PHP Variables',
      scope: 'variable.other.php',
      settings: {
        foreground: syntaxColors.variable
      }
    },
    {
      name: 'PHP Object Properties',
      scope: 'variable.other.property.php',
      settings: {
        foreground: syntaxColors.variableProperty
      }
    }
  ];
}
