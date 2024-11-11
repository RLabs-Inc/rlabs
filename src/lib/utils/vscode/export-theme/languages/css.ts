import type { TokenColor, TokenColors } from '$lib/types/theme';

export function getCssTokenColors({ syntaxColors, colors }: TokenColors): TokenColor[] {
  return [
    {
      name: 'CSS Class Selectors',
      scope: ['entity.other.attribute-name.class.css'],
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'Classes',
      scope: [
        'source.css entity.other.attribute-name.class.css',
        'entity.other.attribute-name.parent-selector.css punctuation.definition.entity.css'
      ],
      settings: {
        foreground: syntaxColors.class
      }
    },
    {
      name: 'CSS Pseudo Classes and Elements',
      scope: [
        'entity.other.attribute-name.pseudo-class.css',
        'source.css entity.other.attribute-name.pseudo-class'
      ],
      settings: {
        foreground: syntaxColors.type
      }
    },
    {
      name: 'CSS Operators',
      scope: ['punctuation.separator.operator.css', 'keyword.operator.combinator.css'],
      settings: {
        foreground: syntaxColors.operator
      }
    },
    {
      name: 'CSS Unicode Ranges',
      scope: 'source.css constant.other.unicode-range',
      settings: {
        foreground: syntaxColors.other
      }
    },
    {
      name: 'CSS URL Variables',
      scope: 'source.css variable.parameter.url',
      settings: {
        foreground: colors.INFO,
        fontStyle: ''
      }
    },
    {
      name: 'CSS Property Names',
      scope: ['support.type.property-name.css', 'support.type.property-name.media.css'],
      settings: {
        foreground: syntaxColors.property
      }
    },
    {
      name: 'CSS Property Names (support)',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
        'support.type.vendored.property-name'
      ],
      settings: {
        foreground: syntaxColors.supportProperty
      }
    },
    {
      name: 'CSS Property Values',
      scope: [
        'support.constant.property-value.css',
        'meta.property-value.css',
        'source.css support.constant.color',
        'meta.property-value.scss',
        'constant.numeric.css'
      ],
      settings: {
        foreground: syntaxColors.constant
      }
    },
    {
      name: 'CSS Units and Values',
      scope: [
        'keyword.other.unit.percentage.css',
        'keyword.other.unit.px.css',
        'keyword.other.unit.rem.css',
        'keyword.other.unit.em.css',
        'keyword.other.unit.vh.css',
        'keyword.other.unit.vw.css'
      ],
      settings: {
        foreground: syntaxColors.unit
      }
    },

    {
      name: 'CSS Tag Selectors',
      scope: [
        'entity.name.tag.css',
        'entity.name.tag.less',
        'entity.name.tag.custom.css',
        'entity.name.tag.scss',
        'entity.other.attribute-name.id.css'
      ],
      settings: {
        foreground: syntaxColors.tag
      }
    },
    {
      name: 'CSS Universal Selector',
      scope: [
        'entity.name.tag.wildcard.css',
        'entity.name.tag.wildcard.less',
        'entity.name.tag.wildcard.scss',
        'entity.name.tag.wildcard.sass'
      ],
      settings: {
        foreground: syntaxColors.tagPunctuation
      }
    },
    {
      name: 'CSS/SCSS Variables',
      scope: [
        'variable.css',
        'variable.argument.css',
        'variable.scss',
        'variable.parameter.url.scss',
        'variable.other.less'
      ],
      settings: {
        foreground: syntaxColors.variable
      }
    },
    {
      name: 'CSS/SCSS Attribute selectors',
      scope: ['source.css meta.attribute-selector', 'meta.attribute-selector.scss'],
      settings: {
        foreground: syntaxColors.selector
      }
    },
    {
      name: 'Tag names in Stylesheets',
      scope: ['entity.name.tag.css', 'entity.name.tag.less', 'entity.name.tag.custom.css'],
      settings: {
        foreground: syntaxColors.tag
      }
    },
    {
      name: 'CSS variables (--prefixed)',
      scope: [
        'source.css meta.property-list variable',
        'meta.property-list variable.other.less',
        'meta.property-list variable.other.less punctuation.definition.variable.less'
      ],
      settings: {
        foreground: colors.AC2
      }
    },
    {
      name: 'Less/SCSS right-hand variables (@/$-prefixed)',
      scope: [
        'source.css meta.property-value variable',
        'source.css meta.property-value variable.other.less',
        'source.css meta.property-value variable.other.less punctuation.definition.variable.less',
        'meta.definition.variable.scss'
      ],
      settings: {
        foreground: colors.AC2
      }
    },
    {
      name: 'SCSS Mixins',
      scope: ['entity.name.function.scss', 'support.function.misc.scss'],
      settings: {
        foreground: syntaxColors.function
      }
    },
    {
      name: 'CSS/SCSS Function Calls',
      scope: [
        'support.function.calc.css',
        'support.function.var.css',
        'support.function.misc.css',
        'support.function.url.css',
        'support.function.transform.css',
        'support.function.timing-function.css',
        'support.function.misc.scss',
        'support.function.name.sass.library'
      ],
      settings: {
        foreground: syntaxColors.functionCall
      }
    },
    {
      name: 'CSS Tailwind At-Rules Apply',
      scope: ['keyword.control.at-rule.apply.tailwind', 'keyword.control.at-rule.import.css'],
      settings: {
        foreground: syntaxColors.controlImport
        // fontStyle: "bold",
      }
    },
    {
      name: 'CSS Tailwind At-Rules Layer',
      scope: [
        'keyword.control.at-rule.layer.tailwind',
        'keyword.control.at-rule.tailwind.tailwind'
      ],
      settings: {
        foreground: syntaxColors.controlFlow
      }
    },
    {
      name: 'CSS Selector',
      scope: [
        'meta.selector',
        'meta.attribute-selector.css',
        'punctuation.definition.attribute-selector.begin.bracket.square.css',
        'punctuation.definition.attribute-selector.end.bracket.square.css'
      ],
      settings: {
        foreground: syntaxColors.selector
      }
    },
    {
      name: 'Property names (left hand assignments in json/yaml/css)',
      scope: 'support.type.property-name.css',
      settings: {
        foreground: syntaxColors.supportProperty,
        fontStyle: ''
      }
    },
    {
      name: 'CSS/SCSS At-Rules',
      scope: [
        'keyword.control.at-rule.media.css',
        'keyword.control.at-rule.keyframes.css',
        'keyword.control.at-rule.mixin.scss',
        'keyword.control.at-rule.include.scss'
      ],
      settings: {
        foreground: syntaxColors.control
      }
    }
  ];
}
