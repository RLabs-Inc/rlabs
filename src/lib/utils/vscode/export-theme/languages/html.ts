import type { TokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getHtmlTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'HTML String Values',
      scope: [
        'string.quoted.double.html',
        'string.quoted.single.html',
        'string.quoted.double.xml',
        'string.quoted.single.xml'
      ],
      settings: {
        foreground: colors.FG2
      }
    },
    {
      name: 'HTML Tags',
      scope: [
        'meta.tag.any.html',
        'entity.name.tag',
        'entity.name.tag.html',
        'entity.name.tag.xml',
        'entity.name.tag.localname.xml'
      ],
      settings: {
        foreground: syntaxColors.tag
      }
    },
    {
      name: 'HTML Tag Punctuation',
      scope: [
        'punctuation.definition.tag',
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
        'punctuation.separator.key-value.html',
        'punctuation.definition.tag.xml',
        'punctuation.definition.tag.begin.xml',
        'punctuation.definition.tag.end.xml',
        'punctuation.separator.key-value.xml'
      ],
      settings: {
        foreground: syntaxColors.tagPunctuation
      }
    },
    {
      name: 'HTML/XML DOCTYPE',
      scope: [
        'keyword.other.doctype',
        'meta.tag.sgml.doctype punctuation.definition.tag',
        'meta.tag.metadata.doctype entity.name.tag',
        'meta.tag.metadata.doctype punctuation.definition.tag'
      ],
      settings: {
        foreground: syntaxColors.other
      }
    },
    {
      name: 'HTML Special Characters',
      scope: [
        'text.html constant.character.entity',
        'text.html constant.character.entity punctuation',
        'constant.character.entity.xml',
        'constant.character.entity.xml punctuation',
        'constant.character.entity.js.jsx',
        'constant.character.entity.js.jsx punctuation',
        'constant.character.entity.tsx',
        'constant.character.entity.tsx punctuation'
      ],
      settings: {
        foreground: colors.WARNING
      }
    },
    {
      name: 'HTML/XML Tag Attributes',
      scope: [
        'entity.other.attribute-name',
        'variable.other.key',
        'entity.other.attribute-name.html',
        'entity.other.attribute-name.xml',
        'entity.other.attribute-name.localname.xml'
      ],
      settings: {
        foreground: syntaxColors.attribute
      }
    },
    {
      name: 'HTML Component Tags',
      scope: [
        'support.class.component',
        'support.class.component.jsx',
        'support.class.component.tsx',
        'support.class.component.vue'
      ],
      settings: {
        foreground: syntaxColors.function
      }
    }
  ];
}
