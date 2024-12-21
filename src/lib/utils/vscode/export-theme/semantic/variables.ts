import type { SemanticTokenColor, TokenColors } from '$lib/types/vscode/theme';

export function getVariableSemanticTokens({
  colors,
  syntaxColors
}: TokenColors): SemanticTokenColor {
  return {
    // Basic variables
    variable: syntaxColors.variable,
    'variable.declaration': syntaxColors.variableDeclaration,
    'variable.readonly.local': syntaxColors.variableReadonly,
    'variable.readonly.defaultLibrary': syntaxColors.supportVariable,
    'variable.defaultLibrary': syntaxColors.supportVariable,

    // Variable variants
    'variable.other': syntaxColors.other,
    'variable.other.readwrite': syntaxColors.variable,
    'variable.other.constant': syntaxColors.variableDeclaration,
    'variable.other.readonly': syntaxColors.variableReadonly,

    // Properties
    property: syntaxColors.property,
    'property.readonly': syntaxColors.variableProperty,
    'property.declaration': syntaxColors.propertyDeclaration,
    'property.defaultLibrary': syntaxColors.supportProperty,

    // Parameters
    parameter: syntaxColors.parameter,

    // Language specific - JavaScript/TypeScript
    'variable.readonly:javascript': syntaxColors.variableDeclaration,
    'variable.readonly:typescript': syntaxColors.variableDeclaration,
    'property.readonly:javascript': syntaxColors.property,
    'property.readonly:typescript': syntaxColors.property,

    // Language specific - React
    'variable.readonly:javascriptreact': syntaxColors.variableDeclaration,
    'variable.readonly:typescriptreact': syntaxColors.variableDeclaration,
    'property.readonly:javascriptreact': syntaxColors.property,
    'property.readonly:typescriptreact': syntaxColors.property,

    // Language specific - Others
    'variable.typeHint:python': syntaxColors.variableProperty,
    'variable.readonly:scala': syntaxColors.variableDeclaration,
    'variable.readonly.defaultLibrary:go': syntaxColors.supportVariable,
    'constant.builtin.readonly:nix': syntaxColors.supportVariable,
    'builtinAttribute.attribute.library:rust': syntaxColors.language,
    'generic.attribute:rust': syntaxColors.attribute,
    heading: colors.AC1,
    'text.emph': { foreground: colors.FG1, fontStyle: 'italic' },
    'text.strong': { foreground: colors.FG1, fontStyle: 'bold' },
    'text.math': colors.FG2,
    tomlArrayKey: colors.AC2,
    tomlTableKey: colors.AC2
  };
}
