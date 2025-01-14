import { getSelectedTheme } from '../vscode/theme.svelte';
import {
  getAC1Foreground,
  getAC2Foreground,
  getINFOForeground,
  getSelectionForeground,
  getSUCCESSForeground,
  getWARNINGForeground
} from '$lib/utils/vscode/theme-parser';

export const getHelixThemeState = () => {
  function getThemeString() {
    const selectedTheme = getSelectedTheme();
    const theme = selectedTheme().theme;
    const ac1Foreground = getAC1Foreground(theme.uiColors);
    const ac2Foreground = getAC2Foreground(theme.uiColors);
    const successForeground = getSUCCESSForeground(theme.uiColors);
    const infoForeground = getINFOForeground(theme.uiColors);
    const warningForeground = getWARNINGForeground(theme.uiColors);
    const selectionForeground = getSelectionForeground(theme.uiColors);

    return `
# Author : ${theme.userName}

"annotation"                      = { fg = 'other' }
    
"attribute"                       = { fg = 'attribute' }

"comment"                         = { fg = 'comment' }
"comment.block"                   = { fg = 'comment' }
"comment.block.documentation"     = { fg = 'comment' }
"comment.line"                    = { fg = 'comment' }

"constant"                        = { fg = 'constant' }
"constant.builtin"                = { fg = 'language' }
"constant.builtin.boolean"        = { fg = 'support' }
"constant.character"              = { fg = 'constant' }
"constant.character.escape"       = { fg = 'constant' }
"constant.macro"                  = { fg = 'constant' }
"constant.numeric"                = { fg = 'constant' }
"constructor"                     = { fg = 'constant' }

"definition"                      = { underline = { color = 'ac1' }}

"diagnostic"                      = { underline = { color = 'ac2', style = "curl"}}
"diagnostic.hint"                 = { underline = { color = 'success',style = "curl"}}
"diagnostic.warning"              = { underline = { color = 'warning',style = "curl"}}
"diagnostic.error"                = { underline = { color = 'error',style = "curl" }}
"diagnostic.info"                 = { underline = { color = 'info',style = "curl" }}
"diagnostic.unnecessary"          = { modifiers = { color = 'comment' }}
"diagnostic.deprecated"           = { modifiers = { color = 'comment', modifier = ["crossed_out"] }}

"error"                           = { fg = 'error' }
"hint"                            = { fg = 'success' }
"info"                            = { fg = 'info' }
"warning"                         = { fg = 'warning' }

"diff.delta"                      = { fg = 'ac2' }
"diff.minus"                      = { fg = 'error' }
"diff.plus"                       = { fg = 'success' }


"function"                        = { fg = 'function' }
"function.builtin"                = { fg = 'support_function' }
"function.call"                   = { fg = 'function_call' }
"function.macro"                  = { fg = 'method_call' }
"function.method"                 = { fg = 'method' }

"keyword"                         = { fg = 'keyword' }
"keyword.control.conditional"     = { fg = 'control_flow' }
"keyword.control.exception"       = { fg = 'control' }
"keyword.control.import"          = { fg = 'control_import' }
"keyword.control.repeat"          = { fg = 'control_flow' }
"keyword.directive"               = { fg = 'storage' }
"keyword.function"                = { fg = 'storage' }
"keyword.operator"                = { fg = 'operator' }
"keyword.return"                  = { fg = 'control_flow' }
"keyword.storage"                 = { fg = 'storage' }
"keyword.storage.modifier"        = { fg = 'modifier' }
"keyword.storage.type"            = { fg = 'type' }

"label"                           = { fg = 'tag' }

"markup.bold"                     = { fg    = 'warning', modifiers = ["bold"]}
"markup.heading"                  = { fg    = 'ac1', modifiers = ["bold"]}
"markup.italic"                   = { fg    = 'fg2',modifiers = ["italic"]}
"markup.link.text"                = { fg    = 'info'}
"markup.link.url"                 = { fg    = 'info', modifiers = ["underline"]}
"markup.list"                     = { fg    = 'ac2'}
"markup.quote"                    = { fg    = 'fg2', modifiers = ["italic"]}
"markup.raw"                      = { fg    = 'fg1'}
"markup.strikethrough"            = { modifiers = ["crossed_out"]}

"punctuation"                     = { fg = 'punctuation'}
"punctuation.bracket"             = { fg = 'punctuation_brace'}
"punctuation.delimiter"           = { fg = 'punctuation_comma'}
"punctuation.special"             = { fg = 'punctuation_quote'}

"special"                         = { fg = 'ac1'}

"string"                          = { fg = 'fg1'}
"string.regexp"                   = { fg = 'selector'}
"string.special"                  = { fg = 'fg2'}
"string.symbol"                   = { fg = 'ac2'}

"tag"                             = { fg = 'tag'}
"tag.attribute"                   = { fg = 'attribute'}
"tag.delimiter"                   = { fg = 'tagPunctuation'}

"type"                            = { fg = 'type'}
"type.parameter"                  = { fg = 'type_parameter'}
"type.builtin"                    = { fg = 'support'}
"type.enum.variant"               = { fg = 'class'}

"ui.background"                   = { fg    = 'fg1', bg = 'bg1'}
"ui.cursor"                       = { fg    = 'ac2_foreground', bg = 'ac2' }
"ui.cursor.insert"                = { fg    = 'success_foreground', bg = 'success'}	
"ui.cursor.match"                 = { fg    = 'info_foreground', bg = 'info'}
"ui.cursor.normal"                = { fg    = 'ac1_foreground', bg = 'ac1'}	
"ui.cursor.primary.insert"        = { fg    = 'success_foreground', bg = 'success'}	
"ui.cursor.primary.normal"        = { fg    = 'ac1_foreground', bg = 'ac1'}	
"ui.cursor.primary.select"        = { fg    = 'info_foreground', bg = 'info'}
"ui.cursor.select"                = { fg    = 'warning_foreground', bg = 'warning'}
"ui.cursorline.primary"           = { bg = 'line_highlight'}
"ui.debug"                        = { fg    = 'warning'}
"ui.help"                         = { fg    = 'fg2', bg = 'bg3'}
"ui.highlight.frameline"          = { fg    = 'selection_foreground', bg = 'selection'}
"ui.linenr"                       = { fg    = 'comment' }
"ui.linenr.selected"              = { fg    = 'fg1'}
"ui.menu"                         = { fg    = 'fg2', bg = 'bg3'}
"ui.menu.scroll"                  = { fg    = 'fg2', bg = 'bg1'}
"ui.menu.selected"                = { fg    = 'ac2_foreground', bg = 'ac2'}
"ui.popup"                        = { fg    = 'fg2', bg = 'bg3'}
"ui.selection"                    = { fg    = 'ac2_foreground', bg = 'ac2'}
"ui.selection.primary"            = { fg    = 'ac1_foreground', bg = 'ac1'}
"ui.statusline"                   = { fg    = 'ac2_foreground', bg = 'ac2'}
"ui.statusline.inactive"          = { fg    = 'comment', bg = 'bg2'}
"ui.statusline.insert"            = { fg    = 'success_foreground', bg = 'success', modifiers = ["bold"] }
"ui.statusline.normal"            = { fg    = 'ac1_foreground', bg = 'ac1', modifiers = ["bold"] }
"ui.statusline.select"            = { fg    = 'info_foreground',bg = 'info', modifiers = ["bold"] }
"ui.text"                         = { fg    = 'fg1'}
"ui.text.focus"                   = { fg    = 'fg2'}
"ui.text.directory"               = { fg    = 'fg2'}
"ui.virtual.indent-guide"         = { fg    = 'ac2'}
"ui.virtual.inlay-hint"           = { fg    = 'info'}
"ui.virtual.inlay-hint.parameter" = { fg    = 'parameter'}
"ui.virtual.inlay-hint.type"      = { fg    = 'type'}
"ui.virtual.jump-label"           = { fg    = 'tag', modifiers = ["bold"]}
"ui.virtual.ruler"                = { bg    = 'bg1'}
"ui.virtual.whitespace"           = { fg    = 'fg3'}
"ui.virtual.wrap"                 = { fg    = 'bg2'}
"ui.window"                       = { fg    = 'border'}

"variable"                        = { fg = 'variable'}
"variable.builtin"                = { fg = 'support_variable'}
"variable.other"                  = { fg = 'variable_readonly'}
"variable.other.member"           = { fg = 'variable_property'}
"variable.parameter"              = { fg = 'parameter'}


[palette]
background_1        = '${theme.uiColors.BG1}'
background_2        = '${theme.uiColors.BG2}'
background_3        = '${theme.uiColors.BG3}'
foreground_1        = '${theme.uiColors.FG1}'
foreground_2        = '${theme.uiColors.FG2}'
foreground_3        = '${theme.uiColors.FG3}'
ac1                 = '${theme.uiColors.AC1}'
ac2                 = '${theme.uiColors.AC2}'
border              = '${theme.uiColors.BORDER}'
info                = '${theme.uiColors.INFO}'
success             = '${theme.uiColors.SUCCESS}'
warning             = '${theme.uiColors.WARNING}'
error               = '${theme.uiColors.ERROR}'
selection           = '${theme.uiColors.selection}'
  line_highlight      = '${theme.uiColors.lineHighlight}'
info_foreground     = '${infoForeground}'
success_foreground  = '${successForeground}'
warning_foreground  = '${warningForeground}'
ac1_foreground      = '${ac1Foreground}'
ac2_foreground      = '${ac2Foreground}'
selection_foreground = '${selectionForeground}'

comment           = '${theme.syntaxColors.comment}'
variable          = '${theme.syntaxColors.variable}'
support_variable  = '${theme.syntaxColors.supportVariable}'
variable_readonly = '${theme.syntaxColors.variableReadonly}'
variable_property = '${theme.syntaxColors.variableProperty}'
parameter = '${theme.syntaxColors.parameter}'
function = '${theme.syntaxColors.function}'
support_function = '${theme.syntaxColors.supportFunction}'
function_call = '${theme.syntaxColors.functionCall}'
method_call = '${theme.syntaxColors.methodCall}'
method = '${theme.syntaxColors.method}'
keyword = '${theme.syntaxColors.keyword}'
control_flow = '${theme.syntaxColors.controlFlow}'
control = '${theme.syntaxColors.control}'
control_import = '${theme.syntaxColors.controlImport}'
control_repeat = '${theme.syntaxColors.controlFlow}'
storage = '${theme.syntaxColors.storage}'
operator = '${theme.syntaxColors.operator}'
modifier = '${theme.syntaxColors.modifier}'
type = '${theme.syntaxColors.type}'
type_parameter = '${theme.syntaxColors.typeParameter}'
tag = '${theme.syntaxColors.tag}'
attribute = '${theme.syntaxColors.attribute}'
tag_punctuation = '${theme.syntaxColors.tagPunctuation}'
punctuation = '${theme.syntaxColors.punctuation}'
punctuation_brace = '${theme.syntaxColors.punctuationBrace}'
punctuation_comma = '${theme.syntaxColors.punctuationComma}'
punctuation_quote = '${theme.syntaxColors.punctuationQuote}'
other = '${theme.syntaxColors.other}'
language = '${theme.syntaxColors.language}'




`;
  }

  return () => ({
    getThemeString
  });
};
