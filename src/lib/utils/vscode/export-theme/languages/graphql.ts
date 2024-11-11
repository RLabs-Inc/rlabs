import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getGraphqlTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'GraphQL Variables',
      scope: 'variable.graphql',
      settings: {
        foreground: syntaxColors.variableDeclaration
      }
    },
    {
      name: 'GraphQL Field Aliases',
      scope: 'string.unquoted.alias.graphql',
      settings: {
        foreground: syntaxColors.variable
      }
    },
    {
      name: 'GraphQL Enum Members',
      scope: 'constant.character.enum.graphql',
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'GraphQL Type Fields',
      scope: 'meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql',
      settings: {
        foreground: syntaxColors.typeParameter
      }
    },
    {
      name: 'GraphQL Operation Types',
      scope: 'keyword.operation.graphql',
      settings: {
        foreground: syntaxColors.keyword
      }
    },
    {
      name: 'GraphQL Directives',
      scope: 'entity.name.function.directive.graphql',
      settings: {
        foreground: syntaxColors.function
      }
    }
  ];
}
