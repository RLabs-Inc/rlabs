import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getShellTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'Shell Shebang Line',
      scope: [
        'comment.line.shebang',
        'comment.line.shebang punctuation.definition.comment',
        'punctuation.definition.comment.shebang.shell',
        'meta.shebang.shell'
      ],
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Shell Shebang Command',
      scope: 'comment.line.shebang constant.language',
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'Shell Command Interpolation',
      scope: [
        'meta.function-call.arguments.shell punctuation.definition.variable.shell',
        'meta.function-call.arguments.shell punctuation.section.interpolation'
      ],
      settings: {
        foreground: syntaxColors.parameter
      }
    },
    {
      name: 'Shell Interpolation Variable',
      scope: 'meta.string meta.interpolation.parameter.shell variable.other.readwrite',
      settings: {
        foreground: syntaxColors.variableDeclaration
      }
    },
    {
      name: 'Shell Interpolation Punctuation',
      scope: [
        'source.shell punctuation.section.interpolation',
        'punctuation.definition.evaluation.backticks.shell'
      ],
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      name: 'Shell Heredoc Delimiter',
      scope: 'entity.name.tag.heredoc.shell',
      settings: {
        foreground: colors.AC2
      }
    },
    {
      name: 'Shell Quoted Variables',
      scope: 'string.quoted.double.shell variable.other.normal.shell',
      settings: {
        foreground: syntaxColors.variable
      }
    },
    {
      name: 'Shell Built-in Commands',
      scope: 'support.function.builtin.shell',
      settings: {
        foreground: syntaxColors.supportFunction
      }
    }
  ];
}
