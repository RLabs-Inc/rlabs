" CSS specific highlighting

" Selectors
execute 'highlight cssTagName guifg=' . g:syntax_colors.tag
execute 'highlight cssClassName guifg=' . g:syntax_colors.class
execute 'highlight cssIdentifier guifg=' . g:syntax_colors.class
execute 'highlight cssClassNameDot guifg=' . g:syntax_colors.punctuation
execute 'highlight cssPseudoClass guifg=' . g:syntax_colors.attribute
execute 'highlight cssPseudoClassId guifg=' . g:syntax_colors.attribute
execute 'highlight cssSelectorOp guifg=' . g:syntax_colors.operator
execute 'highlight cssSelectorOp2 guifg=' . g:syntax_colors.operator
execute 'highlight cssAttributeSelector guifg=' . g:syntax_colors.attribute

" Properties
execute 'highlight cssDefinition guifg=' . g:syntax_colors.property
execute 'highlight cssAttr guifg=' . g:syntax_colors.attribute
execute 'highlight cssAttrRegion guifg=' . g:syntax_colors.attribute
execute 'highlight cssCustomProp guifg=' . g:syntax_colors.property
execute 'highlight cssVendor guifg=' . g:syntax_colors.support
execute 'highlight cssImportant guifg=' . g:syntax_colors.keyword . ' gui=bold'

" Values
execute 'highlight cssColor guifg=' . g:syntax_colors.constant
execute 'highlight cssUnitDecorators guifg=' . g:syntax_colors.unit
execute 'highlight cssValueNumber guifg=' . g:syntax_colors.constant
execute 'highlight cssValueLength guifg=' . g:syntax_colors.constant
execute 'highlight cssValueTime guifg=' . g:syntax_colors.datetime
execute 'highlight cssValueFrequency guifg=' . g:syntax_colors.constant
execute 'highlight cssValueAngle guifg=' . g:syntax_colors.constant
execute 'highlight cssFunction guifg=' . g:syntax_colors.function
execute 'highlight cssFunctionName guifg=' . g:syntax_colors.function
execute 'highlight cssURL guifg=' . g:syntax_colors.string

" Colors
execute 'highlight cssHexColor guifg=' . g:syntax_colors.constant
execute 'highlight cssRGBColor guifg=' . g:syntax_colors.constant
execute 'highlight cssHSLColor guifg=' . g:syntax_colors.constant
execute 'highlight cssColorProp guifg=' . g:syntax_colors.property
execute 'highlight cssColorAttr guifg=' . g:syntax_colors.constant
execute 'highlight cssCommonAttr guifg=' . g:syntax_colors.constant

" Structure
execute 'highlight cssMedia guifg=' . g:syntax_colors.keyword
execute 'highlight cssMediaType guifg=' . g:syntax_colors.type
execute 'highlight cssKeyFrame guifg=' . g:syntax_colors.keyword
execute 'highlight cssKeyFrameSelector guifg=' . g:syntax_colors.constant
execute 'highlight cssAtRule guifg=' . g:syntax_colors.keyword
execute 'highlight cssAtRuleLogical guifg=' . g:syntax_colors.keyword
execute 'highlight cssSupports guifg=' . g:syntax_colors.keyword
execute 'highlight cssCharset guifg=' . g:syntax_colors.keyword
execute 'highlight cssNamespace guifg=' . g:syntax_colors.keyword
execute 'highlight cssImport guifg=' . g:syntax_colors.control_import

" Animations and Transitions
execute 'highlight cssAnimationProp guifg=' . g:syntax_colors.property
execute 'highlight cssTransitionProp guifg=' . g:syntax_colors.property
execute 'highlight cssAnimationAttr guifg=' . g:syntax_colors.constant
execute 'highlight cssTransitionAttr guifg=' . g:syntax_colors.constant
execute 'highlight cssTransformProp guifg=' . g:syntax_colors.property
execute 'highlight cssTransformAttr guifg=' . g:syntax_colors.constant

" Layout and Box Model
execute 'highlight cssBoxProp guifg=' . g:syntax_colors.property
execute 'highlight cssBoxAttr guifg=' . g:syntax_colors.attribute
execute 'highlight cssFlexibleBoxProp guifg=' . g:syntax_colors.property
execute 'highlight cssFlexibleBoxAttr guifg=' . g:syntax_colors.attribute
execute 'highlight cssGridProp guifg=' . g:syntax_colors.property
execute 'highlight cssGridAttr guifg=' . g:syntax_colors.attribute
execute 'highlight cssPositioningProp guifg=' . g:syntax_colors.property
execute 'highlight cssPositioningAttr guifg=' . g:syntax_colors.attribute

" Special syntax
execute 'highlight cssBraces guifg=' . g:syntax_colors.punctuationBrace
execute 'highlight cssProp guifg=' . g:syntax_colors.property
execute 'highlight cssComment guifg=' . g:syntax_colors.comment
execute 'highlight cssError guifg=' . g:syntax_colors.error
execute 'highlight cssNoise guifg=' . g:syntax_colors.punctuation
execute 'highlight cssStringQ guifg=' . g:colors.fg2
execute 'highlight cssStringQQ guifg=' . g:colors.fg2
execute 'highlight cssDeprecated guifg=' . g:syntax_colors.comment . ' gui=strikethrough'

" SCSS specific
execute 'highlight scssVariable guifg=' . g:syntax_colors.variable
execute 'highlight scssVariableValue guifg=' . g:syntax_colors.value
execute 'highlight scssMixin guifg=' . g:syntax_colors.function
execute 'highlight scssFunction guifg=' . g:syntax_colors.function
execute 'highlight scssInclude guifg=' . g:syntax_colors.control_import
execute 'highlight scssExtend guifg=' . g:syntax_colors.keyword
execute 'highlight scssImport guifg=' . g:syntax_colors.control_import
execute 'highlight scssSelectorChar guifg=' . g:syntax_colors.punctuation
execute 'highlight scssAmpersand guifg=' . g:syntax_colors.punctuation
execute 'highlight scssDebug guifg=' . g:syntax_colors.keyword
execute 'highlight scssWarn guifg=' . g:syntax_colors.keyword
execute 'highlight scssDefault guifg=' . g:syntax_colors.keyword
execute 'highlight scssIf guifg=' . g:syntax_colors.control
execute 'highlight scssElse guifg=' . g:syntax_colors.control
