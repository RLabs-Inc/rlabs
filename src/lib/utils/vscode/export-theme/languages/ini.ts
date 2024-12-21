import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getIniTokens({ colors, syntaxColors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'INI/Properties Section',
      scope: ['entity.name.section.group-title.ini', 'punctuation.definition.section.ini'],
      settings: {
        foreground: colors.AC1
      }
    },
    {
      name: 'INI/Properties Keys',
      scope: ['keyword.other.definition.ini', 'support.type.property-name.ini'],
      settings: {
        foreground: colors.AC2
      }
    },
    {
      name: 'INI/Properties Values',
      scope: ['string.unquoted.ini', 'string.quoted.double.ini', 'string.quoted.single.ini'],
      settings: {
        foreground: colors.FG1
      }
    }
  ];
}
