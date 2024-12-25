import type { TokenColors, TokenColor } from '$lib/types/vscode/theme';

export function getVariableSyntaxTokens({ syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      scope: ['entity.other.attribute-name', 'meta.object-literal.key.js'],
      settings: {
        foreground: syntaxColors.attribute
        //"fontStyle": "bold"
      }
    },
    {
      scope: ['entity.other.property-name', 'meta.property-name', 'variable.other.property.cli'],
      settings: {
        foreground: syntaxColors.property
      }
    },
    {
      scope: [
        'variable.parameter',
        'variable.parameter.cli',
        'variable.other.parameter',
        'entity.name.variable.parameter',
        'meta.at-rule.function variable',
        'meta.at-rule.mixin variable'
      ],
      settings: {
        foreground: syntaxColors.parameter
      }
    },
    {
      scope: ['variable.other.constant'],
      settings: {
        foreground: syntaxColors.variableReadonly
      }
    },
    {
      scope: [
        'meta.import variable.other.readwrite.alias',
        'meta.export variable.other.readwrite.alias',
        'meta.variable.assignment.destructured.object.coffee variable variable',
        'variable.other.readwrite.js'
      ],
      settings: {
        foreground: syntaxColors.variable
      }
    },

    {
      scope: [
        'variable.other.property',
        'variable.other.property.ts',
        'variable.other.object.instance.property',
        'variable.other.constant.property'
      ],
      settings: {
        foreground: syntaxColors.supportProperty
      }
    },
    {
      scope: [
        'variable.object.property',
        'variable.object.property.ts',
        'variable.property.cli',
        'variable.property',
        'variable.other.object.property',
        'variable.other.object.property.ts'
      ],
      settings: {
        foreground: syntaxColors.variableProperty
      }
    },
    {
      scope: ['variable', 'string.interpolated'],
      settings: {
        foreground: syntaxColors.variable
      }
    },
    {
      scope: ['variable.language', 'variable.parameter.language', 'variable.other.language'],
      settings: {
        foreground: syntaxColors.language
      }
    }
  ];
}
