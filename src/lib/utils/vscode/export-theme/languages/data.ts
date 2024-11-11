import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getDataTokenColors({
  syntaxColors,
  colors,
  ansiColors
}: TokenColors): TokenColor[] {
  return [
    {
      name: 'JSON Punctuation',
      scope: [
        'punctuation.definition.dictionary.begin.json',
        'punctuation.definition.dictionary.end.json',
        'punctuation.definition.array.begin.json',
        'punctuation.definition.array.end.json',
        'punctuation.separator.dictionary.key-value.json',
        'punctuation.separator.dictionary.pair.json',
        'punctuation.separator.array.json'
      ],
      settings: {
        foreground: syntaxColors.punctuation
      }
    },
    {
      name: 'JSON Level 1 Properties',
      scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: colors.AC1
      }
    },
    {
      name: 'JSON Level 2 Properties',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.AC2
      }
    },
    {
      name: 'JSON Level 3 Properties',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: ansiColors.BrightGreen
      }
    },
    {
      name: 'JSON Level 4 Properties',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: ansiColors.BrightCyan
      }
    },
    {
      name: 'JSON Level 5 Properties',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: ansiColors.BrightBlue
      }
    },
    {
      name: 'JSON Level 6 Properties',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: ansiColors.BrightMagenta
      }
    },
    {
      name: 'JSON Level 7 Properties',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: ansiColors.BrightRed
      }
    },
    {
      name: 'JSON Level 8 Properties',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: ansiColors.BrightYellow
      }
    },
    {
      name: 'YAML Keys',
      scope: ['entity.name.tag.yaml', 'entity.name.tag.yaml'],
      settings: {
        foreground: syntaxColors.tag
      }
    },
    {
      name: 'YAML Keys (other)',
      scope: ['keyword.other.definition.toml', 'keyword.other.definition.yaml'],
      settings: {
        foreground: syntaxColors.other
      }
    },
    {
      name: 'JSON/YAML Constants',
      scope: ['constant.language.json', 'constant.language.yaml', 'constant.language.toml'],
      settings: {
        foreground: syntaxColors.language
      }
    },
    {
      name: 'YAML Property Names (support)',
      scope: [
        'punctuation.support.type.property-name.yaml',
        'support.type.property-name.yaml',
        'punctuation.support.type.property-name.yaml',
        'support.type.property-name.toml',
        'punctuation.support.type.property-name.toml'
      ],
      settings: {
        foreground: syntaxColors.supportProperty
      }
    },
    {
      name: 'YAML Anchors and Aliases',
      scope: ['entity.name.type.anchor.yaml', 'variable.other.alias.yaml'],
      settings: {
        foreground: syntaxColors.variableReadonly,
        fontStyle: 'underline'
      }
    },
    {
      name: 'YAML anchor puctuation',
      scope: ['punctuation.definition.anchor.yaml', 'punctuation.definition.alias.yaml'],
      settings: {
        foreground: syntaxColors.punctuation
      }
    },
    {
      name: 'YAML Document Markers',
      scope: 'entity.other.document.begin.yaml',
      settings: {
        foreground: colors.AC2
      }
    },
    {
      name: 'TOML Tables',
      scope: [
        'entity.other.attribute-name.table.toml',
        'entity.other.attribute-name.table.array.toml'
      ],
      settings: {
        foreground: colors.AC2
      }
    },
    {
      name: 'TOML Tables',
      scope: ['support.type.property-name.table', 'entity.name.section.group-title.ini'],
      settings: {
        foreground: syntaxColors.supportProperty
      }
    },
    {
      name: 'TOML Dates and Times',
      scope: [
        'constant.other.time.datetime.offset.toml',
        'constant.other.time.datetime.offset.yaml',
        'constant.other.datetime.toml',
        'constant.other.datetime.yaml',
        'constant.other.datetime.offset.toml',
        'constant.other.datetime.offset.yaml',
        'constant.other.datetime.local.toml',
        'constant.other.datetime.local.yaml',
        'constant.other.datetime.utc.toml',
        'constant.other.datetime.utc.yaml',
        'constant.other.datetime.timezone.toml',
        'constant.other.datetime.timezone.yaml',
        'constant.other.datetime.duration.toml',
        'constant.other.datetime.duration.yaml',
        'constant.other.timestamp.yaml',
        'constant.other.timestamp.toml',
        'constant.other.timestamp.local.toml',
        'constant.other.timestamp.local.yaml',
        'constant.other.timestamp.utc.toml',
        'constant.other.timestamp.utc.yaml',
        'constant.other.timestamp.timezone.toml',
        'constant.other.timestamp.timezone.yaml',
        'constant.other.timestamp.duration.toml',
        'constant.other.timestamp.duration.yaml'
      ],
      settings: {
        foreground: syntaxColors.datetime
      }
    },
    {
      name: 'TOML Values',
      scope: ['constant.numeric.toml'],
      settings: {
        foreground: syntaxColors.constant
      }
    }
  ];
}
