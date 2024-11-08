import Color from 'color';
import type { UIColors, SyntaxColors, AnsiColors } from '$lib/types/color';
import type { VSCodeTheme } from '$lib/types/theme';

export function generateSemanticThemeJSON(
  name: string = 'Generated Color Theme',
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors
): { themeJSON: string; themeObject: VSCodeTheme } {
  const getAC1Foreground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.AC1).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.AC1).isDark() ? colors.FG3 : colors.FG1;
    }
  };
  const getAC2Foreground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.AC2).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.AC2).isDark() ? colors.FG3 : colors.FG1;
    }
  };
  const getINFOForeground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.INFO).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.INFO).isDark() ? colors.FG3 : colors.FG1;
    }
  };
  const getWARNINGForeground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.WARNING).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.WARNING).isDark() ? colors.FG3 : colors.FG1;
    }
  };
  const getERRORForeground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.ERROR).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.ERROR).isDark() ? colors.FG3 : colors.FG1;
    }
  };

  const getColorWithOpacity = (color: string, opacity: string) => {
    if (color.length > 7) {
      return color.slice(0, -2) + opacity;
    } else {
      return color + opacity;
    }
  };

  const theme = {
    name: name,
    type: Color(colors.BG1).isDark() ? ('dark' as 'dark' | 'light') : ('light' as 'dark' | 'light'),
    semanticClass: 'theme.rlabs',
    semanticHighlighting: true,
    colors: {
      // # Integrated Terminal Colors
      'terminal.background': colors.BG1,
      'terminal.foreground': colors.FG1,
      'terminal.border': colors.BORDER,
      'terminal.ansiBrightBlack': ansiColors.BrightBlack,
      'terminal.ansiBrightRed': ansiColors.BrightRed,
      'terminal.ansiBrightGreen': ansiColors.BrightGreen,
      'terminal.ansiBrightYellow': ansiColors.BrightYellow,
      'terminal.ansiBrightBlue': ansiColors.BrightBlue,
      'terminal.ansiBrightMagenta': ansiColors.BrightMagenta,
      'terminal.ansiBrightCyan': ansiColors.BrightCyan,
      'terminal.ansiBrightWhite': ansiColors.BrightWhite,
      'terminal.ansiBlack': ansiColors.Black,
      'terminal.ansiRed': ansiColors.Red,
      'terminal.ansiGreen': ansiColors.Green,
      'terminal.ansiYellow': ansiColors.Yellow,
      'terminal.ansiBlue': ansiColors.Blue,
      'terminal.ansiMagenta': ansiColors.Magenta,
      'terminal.ansiCyan': ansiColors.Cyan,
      'terminal.ansiWhite': ansiColors.White,
      'terminal.selectionBackground': colors.selection,
      // "terminal.selectionForeground": colors.FG1,
      'terminal.inactiveSelectionBackground': colors.selection,
      //"terminal.findMatchBackground": // # Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
      //"terminal.findMatchBorder": // # Border color of the current search match in the terminal.
      //"terminal.findMatchHighlightBackground": //# Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
      //"terminal.findMatchHighlightBorder": //# Border color of the other search matches in the terminal.
      // "terminal.hoverHighlightBackground": //# Color of the highlight when hovering a link in the terminal.
      // "terminalCursor.background": //# The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
      // "terminalCursor.foreground": //# The foreground color of the terminal cursor.
      // "terminal.dropBackground": //# The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
      // "terminal.tab.activeBorder": //# Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
      // "terminalCommandDecoration.defaultBackground": //# The default terminal command decoration background color.
      // "terminalCommandDecoration.successBackground": //# The terminal command decoration background color for successful commands.
      // "terminalCommandDecoration.errorBackground": //# The terminal command decoration background color for error commands.
      // "terminalOverviewRuler.cursorForeground": //# The overview ruler cursor color.
      // "terminalOverviewRuler.findMatchForeground": //# Overview ruler marker color for find matches in the terminal.
      // "terminalStickyScroll.background": //# The background color of the sticky scroll overlay in the terminal.
      // "terminalStickyScroll.border": //# The border of the sticky scroll overlay in the terminal.
      // "terminalStickyScrollHover.background": //# The background color of the sticky scroll overlay in the terminal when hovered.
      // "terminal.initialHintForeground": //# Foreground color of the terminal initial hint.

      // # Contrast Colors
      // contrastBorder: colors.BORDER, // An extra border around elements to separate them from others for greater contrast
      // contrastActiveBorder: colors.BORDER, // An extra border around active elements to separate them from others for greater contrast

      // # Base Colors
      focusBorder: colors.BORDER, // Overall border color for focused elements. This color is only used if not overridden by a component
      foreground: colors.FG1, // Overall foreground color. This color is only used if not overridden by a component
      disabledForeground: syntaxColors.comment, // Overall foreground for disabled elements. This color is only used if not overridden by a component.
      'widget.border': colors.BORDER, // Border color of widgets such as Find/Replace inside the editor.
      // "widget.shadow": colors.FG2, // Shadow color of widgets such as Find/Replace inside the editor
      'selection.background': getColorWithOpacity(colors.AC2, '50'), // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal)
      // 'selection.foreground': Color(colors.AC2).isDark() ? colors.FG1 : colors.FG3, // Foreground color of text selections in the workbench
      descriptionForeground: colors.FG2, // Foreground color for description text providing additional information, for example for a label.
      errorForeground: colors.ERROR, // Overall foreground color for error messages (this color is only used if not overridden by a component)
      // 'icon.foreground': colors.FG1, // The default color for icons in the workbench.
      //"sash.hoverBorder": // # The hover border color for draggable sashes.

      // # Text Document
      // # Colors inside a text document, such as the welcome page.
      'textBlockQuote.background': colors.BG3, // Background color for block quotes in text.
      'textBlockQuote.border': colors.BORDER, // Border color for block quotes in text.
      'textCodeBlock.background': colors.BG3, // Background color for code blocks in text.
      'textLink.activeForeground': colors.INFO, // Foreground color for links in text when clicked on and on mouse hover.
      'textLink.foreground': colors.AC2, // Foreground color for links in text.
      'textPreformat.foreground': colors.FG1, // Foreground color for preformatted text segments.
      'textPreformat.background': colors.BG3, // Background color for preformatted text segments.
      'textSeparator.foreground': colors.FG1, // Color for text separators.

      // # Action colors
      // # A set of colors to control the interactions with actions across the workbench.
      // "toolbar.hoverBackground": colors.BG2, // Toolbar background when hovering over actions using the mouse
      // "toolbar.hoverOutline": colors.BORDER, // Toolbar outline when hovering over actions using the mouse
      // "toolbar.activeBackground": colors.BG2, // Toolbar background when holding the mouse over actions

      // # Button Control
      // # A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
      'button.background': getColorWithOpacity(colors.AC2, 'db'), // Button background color
      'button.foreground': getAC2Foreground(), // Button foreground color
      // "button.border": //# Button border color
      // "button.separator": colors.FG2, // Button separator color.
      'button.hoverBackground': colors.AC2, // Button background color when hovering
      'button.secondaryBackground': getColorWithOpacity(colors.AC1, 'db'), // Secondary button background color.
      'button.secondaryForeground': getAC1Foreground(), // Secondary button foreground color.
      'button.secondaryHoverBackground': colors.AC1, // Secondary button background color when hovering.
      'checkbox.background': colors.BG1, // Background color of checkbox widget.
      'checkbox.foreground': colors.FG1, // Foreground color of checkbox widget.
      // "checkbox.border": // # Border color of checkbox widget.
      // "checkbox.selectBackground": //# Background color of checkbox widget when the element it's in is selected.
      // "checkbox.selectBorder": //# Border color of checkbox widget when the element it's in is selected.

      //# Dropdown Control
      'dropdown.background': colors.BG3, // Dropdown background
      //"dropdown.listBackground": // # Dropdown list background.
      'dropdown.border': colors.BORDER, // Dropdown border
      'dropdown.foreground': colors.FG1, // Dropdown foreground

      //# Input Control
      'input.background': colors.BG1, // Input box background
      'input.foreground': colors.FG1, // Input box foreground
      'input.border': syntaxColors.comment, // Input box border
      'input.placeholderForeground': syntaxColors.comment, // Input box foreground color for placeholder text
      'inputOption.activeBorder': colors.AC1, // Border color of activated options in input fields
      // "inputOption.activeBackground": // # Background color of activated options in input fields.
      // "inputOption.activeForeground": //# Foreground color of activated options in input fields.
      // "inputOption.hoverBackground": //# Background color of activated options in input fields.
      // "inputValidation.infoForeground": //# Input validation foreground color for information severity
      // "inputValidation.infoBackground": //# Input validation background color for information severity
      'inputValidation.infoBorder': colors.INFO, //# Input validation border color for information severity
      // "inputValidation.warningForeground": colors.FG1, // Input validation foreground color for warning severity
      // "inputValidation.warningBackground": colors.WARNING, // Input validation background color for information warning
      'inputValidation.warningBorder': colors.WARNING, // Input validation border color for warning severity
      // "inputValidation.errorForeground": colors.FG1, // Input validation foreground color for error severity
      // "inputValidation.errorBackground": colors.ERROR, // Input validation background color for error severity
      'inputValidation.errorBorder': colors.ERROR, // Input validation border color for error severity

      //# Scroll Bar Control
      // "scrollbar.shadow": //# Scroll Bar shadow to indicate that the view is scrolled
      // "scrollbarSlider.activeBackground": //# Slider background color when active
      // "scrollbarSlider.background": //# Slider background color
      // "scrollbarSlider.hoverBackground": //# Slider background color when hovering

      //# Badge
      'badge.foreground': getAC2Foreground(), //# Badge foreground color
      'badge.background': colors.AC2, //# Badge background color

      //# Progress Bar
      'progressBar.background': colors.AC1, //# Background color of the progress bar shown for long running operations

      //# List & Trees
      //# Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
      'list.activeSelectionBackground': getColorWithOpacity(colors.AC2, '50'), //# List/Tree background color for the selected item when the list/tree is active
      'list.activeSelectionForeground': colors.FG1, //# List/Tree foreground color for the selected item when the list/tree is active
      // 'list.activeSelectionIconForeground': colors.FG1, //# List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
      'list.inactiveSelectionBackground': getColorWithOpacity(colors.AC2, '40'), //# List/Tree background color for the selected item when the list/tree is inactive
      'list.inactiveSelectionForeground': colors.FG2, //# List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not
      // 'list.inactiveSelectionIconForeground': colors.FG1, //# List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not
      'list.inactiveFocusBackground': colors.BG2, //# List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
      // "list.inactiveFocusOutline": colors.BORDER, //# List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
      // "list.invalidItemForeground": colors.FG1, //# List/Tree foreground color for invalid items, for example an unresolved root in explorer.
      'list.dropBackground': colors.BG3, //# List/Tree drag and drop background when moving items around using the mouse
      'list.dropBetweenBackground': colors.BORDER, //# List/Tree drag and drop border color when moving items between items when using the mouse.
      'list.focusBackground': getColorWithOpacity(colors.AC2, '50'), //# List/Tree background color for the focused item when the list/tree is active
      'list.focusForeground': colors.FG1, //# List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not
      // "list.focusOutline": colors.BORDER, //# List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
      // "list.focusAndSelectionOutline": colors.BORDER, //# List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
      // "list.focusHighlightForeground": colors.FG1, //# List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
      'list.highlightForeground': colors.AC1, // List/Tree foreground color of the match highlights when searching inside the list/tree
      'list.hoverBackground': getColorWithOpacity(colors.AC2, '30'), // List/Tree background when hovering over items using the mouse
      'list.hoverForeground': colors.FG1, // List/Tree foreground when hovering over items using the mouse
      'list.warningForeground': colors.WARNING, // Color of warning decorations in the explorer
      'list.errorForeground': colors.ERROR, // Color of error decorations in the explorer
      // "list.deemphasizedForeground": colors.FG2, // List/Tree foreground color for items that are deemphasized.
      // "list.filterMatchBackground": colors.BG3, // Background color of the filtered matches in lists and trees.
      // "list.filterMatchBorder": colors.BORDER, // Border color of the filtered matches in lists and trees.

      // tree.indentGuidesStroke: //# Tree Widget's stroke color for indent guides.
      // tree.inactiveIndentGuidesStroke: //# Tree stroke color for the indentation guides that are not active.
      // tree.tableColumnsBorder: //# Tree stroke color for the indentation guides.
      // tree.tableOddRowsBackground: //# Background color for odd table rows.

      'listFilterWidget.background': colors.BG3, //# Background color of the type filter widget in lists and trees.
      'listFilterWidget.outline': colors.BORDER, //# Outline color of the type filter widget in lists and trees.
      'listFilterWidget.noMatchesOutline': colors.ERROR, //# Outline color of the type filter widget in lists and trees, when there are no matches.
      // "listFilterWidget.shadow": "#2d4026", //# Shadow color of the type filter widget in lists and tree.

      //# Activity Bar
      //# The Activity Bar is usually displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
      'activityBar.background': colors.BG2, //# Activity Bar background color
      'activityBar.inactiveForeground': syntaxColors.comment, //# Activity bar item foreground color when it is inactive
      // 'activityBar.dropBackground': colors.BG2, //# Drag and drop feedback color for the Activity Bar items
      'activityBar.foreground': colors.FG1, //# Activity bar foreground color (for example used for the icons)
      // "activityBar.border": colors.BORDER, //# Activity Bar border color with the Side Bar
      // "activityBar.dropBorder": colors.BG2, //# Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
      'activityBar.activeBorder': colors.AC1, //# Activity Bar indicator color
      'activityBar.activeBackground': colors.lineHighlight, //# Activity Bar indicator background color
      // 'activityBar.activeFocusBorder': colors.lineHighlight, // Activity bar focus border color for the active item.
      'activityBarBadge.background': colors.AC2, // Activity notification badge background color
      'activityBarBadge.foreground': getAC2Foreground(), // Activity notification badge foreground color
      'activityBarTop.foreground': colors.FG1, // Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
      // "activityBarTop.activeBorder": //# Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
      // activityBarTop.inactiveForeground: //# Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
      // activityBarTop.dropBorder: //# Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
      // activityBarTop.background: //# Background color of the activity bar when set to top / bottom.
      // activityBarTop.activeBackground: //# Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.

      // # Profiles
      // profileBadge.background: //# Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
      // profileBadge.foreground: //# Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.
      // profiles.sashBorder: //# The color of the Profiles editor splitview sash border.

      // # Side Bar
      // # The Side Bar contains views like the Explorer and Search.
      'sideBar.border': colors.BORDER, //# Side Bar border color on the side separating the editor
      // sideBar.foreground: //# Side Bar foreground color. The Side Bar is the container for views like Explorer and Search
      'sideBar.background': colors.BG1, //# Side Bar background color
      //"sideBar.dropBackground": //# Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.
      'sideBarTitle.foreground': colors.FG1, //# Side Bar title foreground color
      'sideBarTitle.background': colors.BG1, //# Side bar title background color. The side bar is the container for views like explorer and search.
      'sideBarSectionHeader.background': colors.BG2, //# Side Bar section header background color
      //sideBarSectionHeader.foreground: // # Side Bar section header foreground color
      'sideBarSectionHeader.border': colors.BORDER, // Side bar section header border color
      'sideBarActivityBarTop.border': colors.BORDER, // Border color between the activity bar at the top/bottom and the views.
      'sideBarStickyScroll.background': colors.BG1, // Background color of sticky scroll in the side bar.
      'sideBarStickyScroll.border': colors.BORDER, // Border color of sticky scroll in the side bar.
      'sideBarStickyScroll.shadow': colors.BORDER, // Shadow color of sticky scroll in the side bar.

      //# Minimap
      // #The Minimap shows a minified version of the current file.
      // minimap.findMatchHighlight: //# Highlight color for matches from search within files.
      // minimap.selectionHighlight: //# Highlight color for the editor selection.
      // minimap.errorHighlight: //# Highlight color for errors within the editor.
      // minimap.warningHighlight: //# Highlight color for warnings within the editor.
      // minimap.background: //# Minimap background color.
      // minimap.selectionOccurrenceHighlight: //# Minimap marker color for repeating editor selections.
      // minimap.foregroundOpacity: //# Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
      // minimap.infoHighlight: //# Minimap marker color for infos.
      // minimapSlider.background: //# Minimap slider background color.
      // minimapSlider.hoverBackground: //# Minimap slider background color when hovering.
      // minimapSlider.activeBackground: //# Minimap slider background color when clicked on.
      // minimapGutter.addedBackground: //# Minimap gutter color for added content.
      // minimapGutter.modifiedBackground: //# Minimap gutter color for modified content.
      // minimapGutter.deletedBackground: //# Minimap gutter color for deleted content.

      // # Editor Groups & Tabs
      // # Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
      // editorGroup.background: //# Background color of an editor group. The background color shows up when dragging editor groups around
      'editorGroup.border': colors.BORDER, //# Color to separate multiple editor groups from each other
      'editorGroup.dropBackground': colors.BG3, //# Background color when dragging editors around
      'editorGroup.emptyBackground': colors.BG1, //# Background color of an empty editor group.
      // "editorGroup.focusedEmptyBorder": colors.BORDER, // Border color of an empty editor group that is focused.
      // editorGroup.dropIntoPromptForeground: //# Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
      // editorGroup.dropIntoPromptBackground: //# Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
      // editorGroup.dropIntoPromptBorder: //# Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
      // editorGroupHeader.noTabsBackground: //# Background color of the editor group title header when Tabs are disabled
      'editorGroupHeader.tabsBackground': colors.BG1, //# Background color of the Tabs container
      // 'editorGroupHeader.tabsBorder': colors.BORDER, //# Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors
      'editorGroupHeader.border': colors.BORDER, //# Border color between editor group header and editor (below breadcrumbs if enabled).
      'tab.activeBackground': colors.BG2, //# Active Tab background color
      'tab.activeForeground': colors.FG1, //# Active Tab foreground color in an active group
      'tab.border': colors.BORDER, //# Border to separate Tabs from each other
      'tab.activeBorderTop': colors.AC1, //# A border drawn to the top of the active tab
      // "tab.activeBorder": colors.AC1, //# A border drawn to the bottom of the active tab
      'tab.selectedBackground': colors.lineHighlight, //# Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
      // tab.selectedForeground: //# Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
      // tab.dragAndDropBorder: //# Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
      'tab.inactiveBackground': colors.BG1, //# Inactive Tab background color
      'tab.inactiveForeground': syntaxColors.comment, //# Inactive Tab foreground color in an active group
      // "tab.unfocusedActiveBorder": colors.BORDER, //# A border drawn to the bottom of the active tab in an editor group that is not focused
      // "tab.unfocusedActiveForeground": colors.FG1, //# Active tab foreground color in an inactive editor group
      // "tab.unfocusedInactiveForeground": colors.FG2, //# Inactive tab foreground color in an inactive editor group
      'tab.hoverBackground': getColorWithOpacity(colors.BG2, '80'),
      'tab.hoverForeground': colors.FG1,

      // Editor
      'editor.background': colors.BG1,
      'editor.foreground': colors.FG1,
      'editor.lineHighlightBackground': '#00000010',
      'editorLineNumber.foreground': syntaxColors.comment,
      'editorLineNumber.activeForeground': colors.AC1,
      'editorLineNumber.dimmedForeground': getColorWithOpacity(syntaxColors.comment, '90'),
      'editorCursor.background': colors.lineHighlight,
      'editorCursor.foreground': colors.AC1,
      'editorMultiCursor.primary.foreground': colors.AC1,
      'editorMultiCursor.primary.background': colors.lineHighlight,
      'editorMultiCursor.secondary.foreground': colors.FG1,
      'editorMultiCursor.secondary.background': colors.lineHighlight,
      'editor.selectionBackground': colors.selection,
      'editor.selectionForeground': colors.FG1,
      'editor.inactiveSelectionBackground': colors.selection,
      'editor.selectionHighlightBackground': colors.selection,
      // "editor.selectionHighlightBorder": colors.BORDER,
      'editor.foldBackground': colors.lineHighlight,
      'editor.foldPlaceholderForeground': colors.FG1,
      'editor.placeholder.foreground': colors.FG2,
      'editorWhitespace.foreground': colors.lineHighlight,
      'editorRuler.foreground': colors.lineHighlight,

      // # INDENT GUIDES
      'editorIndentGuide.activeBackground1': colors.AC1, // Color of the active indentation guide
      'editorIndentGuide.background1': colors.lineHighlight, // Color of the editor indentation guides

      // # HIGHLIGHTS
      'editor.hoverHighlightBackground': colors.lineHighlight, //# Highlight below the word for which a hover is shown
      'editor.wordHighlightBackground': colors.lineHighlight, // Background color of a symbol during read-access, for example when reading a variable
      // "editor.wordHighlightBorder": colors.BORDER, // Border color of a symbol during read-access, for example when reading a variable.
      'editor.wordHighlightStrongBackground': getColorWithOpacity(colors.lineHighlight, '50'), // Background color of a symbol during write-access, for example when writing to a variable
      // "editor.wordHighlightStrongBorder": colors.BORDER, // Border color of a symbol during write-access, for example when writing to a variable.
      'editor.wordHighlightTextBackground': colors.lineHighlight, // Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
      // "editor.wordHighlightTextBorder": colors.BORDER, // Border color of a textual occurrence for a symbol.

      // "editorUnicodeHighlight.border": colors.BORDER, // Border color used to highlight unicode characters.
      'editorUnicodeHighlight.background': colors.lineHighlight, // Background color used to highlight unicode characters.

      // "editor.lineHighlightBorder": colors.lineHighlight, // Background color for the border around the line at the cursor position

      'editorLink.activeForeground': colors.INFO, // Color of active links
      // "editor.rangeHighlightBorder": colors.lineHighlight, // Background color of the border around highlighted ranges.
      'editor.rangeHighlightBackground': colors.lineHighlight, // Background color of highlighted ranges, like by Quick Open and Find features

      'editor.symbolHighlightBackground': colors.lineHighlight, // Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
      // "editor.symbolHighlightBorder": colors.lineHighlight, // Background color of the border around highlighted symbols.

      // # FIND
      'editor.findMatchBackground': colors.findMatch,
      'editor.findMatchForeground': colors.FG1, //# Text color of the current search match.
      'editor.findMatchHighlightBackground': colors.findMatch, // Color of the other search matches
      'editor.findMatchHighlightForeground': colors.FG1, // Foreground color of the other search matches.
      'editor.findRangeHighlightBackground': colors.selection, // Color the range limiting the search
      // "editor.findMatchBorder": colors.BORDER, // Border color of the current search match.
      // "editor.findMatchHighlightBorder": colors.BORDER, // Border color of the other search matches.
      // "editor.findRangeHighlightBorder": colors.BORDER, // Border color the range limiting the search (Enable 'Find in Selection' in the find widget).

      // search.resultsInfoForeground: # Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "{x} results in {y} files".

      // searchEditor.findMatchBackground: # Color of the editor's results.
      // searchEditor.findMatchBorder: # Border color of the editor's results.
      // searchEditor.textInputBorder: # Search editor text input box border.

      // SNIPPETS
      'editor.snippetTabstopHighlightBackground': colors.lineHighlight, // Highlight background color of a snippet tabstop
      // "editor.snippetTabstopHighlightBorder":  // Highlight border color of a snippet tabstop
      'editor.snippetFinalTabstopHighlightBackground': colors.lineHighlight, // Highlight background color of the final tabstop of a snippet
      // "editor.snippetFinalTabstopHighlightBorder": *FG2 // Highlight border color of the final tabstop of a snippet

      // CODE LENS
      'editorCodeLens.foreground': syntaxColors.comment,

      // "editorInlayHint.background": colors.BG1, // Background color of inline hints.
      // "editorInlayHint.foreground": colors.FG1, // Foreground color of inline hints.
      // "editorInlayHint.typeForeground": colors.FG1, // Foreground color of inline hints for types
      // "editorInlayHint.typeBackground": colors.BG1, // Background color of inline hints for types
      // "editorInlayHint.parameterForeground": colors.FG1, // Foreground color of inline hints for parameters
      // "editorInlayHint.parameterBackground": colors.BG1, // Background color of inline hints for parameters
      // "editor.linkedEditingBackground": colors.BG1, // Background color when the editor is in linked editing mode.

      // "editorLightBulb.foreground": colors.FG1, // The color used for the lightbulb actions icon.
      // "editorLightBulbAutoFix.foreground": colors.FG1, // The color used for the lightbulb auto fix actions icon.
      // "editorLightBulbAi.foreground": colors.FG1, // The color used for the lightbulb AI icon.

      // # NOTE: These are not set because they tend to be highly contested from
      // # person to person. Thus, setting these is probably better suited
      // # for workbench.colorCustomizations in User Settings
      // "editorBracketMatch.background": colors.BG1, // Background color behind matching brackets
      // "editorBracketMatch.border": colors.FG1, // Color for matching brackets boxes

      // editorBracketHighlight.foreground1: # Color of first pair of brackets
      // editorBracketHighlight.foreground2: # Color of second pair of brackets
      // editorBracketHighlight.foreground3: # Color of third pair of brackets
      // editorBracketHighlight.foreground4: # Color of fourth pair of brackets
      // editorBracketHighlight.foreground5: # Color of fifth pair of brackets
      // editorBracketHighlight.foreground6: # Color of sixth pair of brackets
      // editorBracketHighlight.unexpectedBracket.foreground: # Color of bracket matching error

      // editorBracketPairGuide.activeBackground1: # Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
      // editorBracketPairGuide.activeBackground2: # Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
      // editorBracketPairGuide.activeBackground3: # Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
      // editorBracketPairGuide.activeBackground4: # Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
      // editorBracketPairGuide.activeBackground5: # Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
      // editorBracketPairGuide.activeBackground6: # Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
      // editorBracketPairGuide.background1: # Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
      // editorBracketPairGuide.background2: # Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
      // editorBracketPairGuide.background3: # Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
      // editorBracketPairGuide.background4: # Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
      // editorBracketPairGuide.background5: # Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
      // editorBracketPairGuide.background6: # Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.

      // GUTTER
      'editorGutter.background': colors.BG1, // Background color of the editor gutter
      'editorGutter.modifiedBackground': colors.INFO, // Editor gutter background color for lines that are modified
      'editorGutter.addedBackground': colors.SUCCESS, // Editor gutter background color for lines that are added
      'editorGutter.deletedBackground': colors.ERROR, // Editor gutter background color for lines that are deleted
      'editorGutter.commentRangeForeground': syntaxColors.comment, // Editor gutter decoration color for commenting ranges.
      // "editorGutter.commentGlyphForeground": colors.FG2, // Editor gutter decoration color for commenting glyphs.
      // "editorGutter.commentUnresolvedGlyphForeground": colors.FG2, // Editor gutter decoration color for commenting glyphs for unresolved comment threads.
      // "editorGutter.foldingControlForeground": colors.FG2, // Color of the folding control in the editor gutter.

      // # WIDGET
      // # The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.
      // editorCommentsWidget.resolvedBorder: # Color of borders and arrow for resolved comments.
      // editorCommentsWidget.unresolvedBorder: # Color of borders and arrow for unresolved comments.
      // editorCommentsWidget.rangeBackground: # Color of background for comment ranges.
      // editorCommentsWidget.rangeActiveBackground: # Color of background for currently selected or hovered comment range.
      // editorCommentsWidget.replyInputBackground: # Background color for comment reply input box.

      'editorWidget.background': colors.BG1, // Background color of editor widgets, such as Find/Replace
      'editorWidget.foreground': colors.FG1, // Foreground color of editor widgets, such as find/replace.
      'editorWidget.border': colors.BORDER, // Border color of the editor widget unless the widget does not contain a border or defines its own border color
      // editorWidget.resizeBorder: # Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
      'editorSuggestWidget.background': colors.BG1, // Background color of the suggestion widget
      'editorSuggestWidget.border': colors.BORDER, // Border color of the suggestion widget
      'editorSuggestWidget.foreground': syntaxColors.comment, // Foreground color of the suggestion widget
      'editorSuggestWidget.highlightForeground': colors.FG1, // Color of the match highlights in the suggestion widget
      'editorSuggestWidget.selectedBackground': getColorWithOpacity(colors.AC2, '60'), // Background color of the selected entry in the suggestion widget
      'editorSuggestWidget.focusHighlightForeground': colors.FG1, // Color of the match highlights in the suggest widget when an item is focused.
      'editorSuggestWidget.selectedForeground': getAC2Foreground(), // Foreground color of the selected entry in the suggest widget.
      // "editorSuggestWidget.selectedIconForeground": colors.FG1, // Icon foreground color of the selected entry in the suggest widget.
      // editorSuggestWidgetStatus.foreground: # Foreground color of the suggest widget status.
      'editorHoverWidget.background': colors.BG1, // Background color of the editor hover
      'editorHoverWidget.foreground': colors.FG1, // Foreground color of the editor hover.
      'editorHoverWidget.border': colors.BORDER, // Border color of the editor hover
      'editorHoverWidget.highlightForeground': colors.FG1, // Foreground color of the active item in the parameter hint.
      'editorHoverWidget.statusBarBackground': colors.BG1, // Background color of the editor hover status bar.
      // editorGhostText.border: # Border color of the ghost text shown by inline completion providers and the suggest preview.
      // editorGhostText.background: # Background color of the ghost text in the editor.
      // editorGhostText.foreground: # Foreground color of the ghost text shown by inline completion providers and the suggest preview.
      // editorStickyScroll.background: # Editor sticky scroll background color.
      // editorStickyScroll.border: # Border color of sticky scroll in the editor.
      // editorStickyScroll.shadow: # Shadow color of sticky scroll in the editor.
      // editorStickyScrollHover.background: # Editor sticky scroll on hover background color.
      // # The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.
      // debugExceptionWidget.background: # Exception widget background color.
      // debugExceptionWidget.border: # Exception widget border color.
      // # The editor marker view shows when navigating to errors and warnings in the editor (Go to Next Error or Warning command).
      'editorMarkerNavigation.background': colors.BG2, // Editor marker navigation widget background
      'editorMarkerNavigationError.background': colors.BG2, // Editor marker navigation widget error color
      'editorMarkerNavigationWarning.background': colors.BG2, // Editor marker navigation widget warning color
      // editorMarkerNavigationInfo.background: # Editor marker navigation widget info color.
      // editorMarkerNavigationError.headerBackground: # Editor marker navigation widget error heading background.
      // editorMarkerNavigationWarning.headerBackground: # Editor marker navigation widget warning heading background.
      // editorMarkerNavigationInfo.headerBackground: # Editor marker navigation widget info heading background.

      // # Diff Editor Colors
      'diffEditor.insertedTextBackground': getColorWithOpacity(colors.INFO, '50'), // Background color for inserted text
      'diffEditor.insertedTextBorder': colors.INFO, // Outline color for inserted text
      'diffEditor.removedTextBackground': getColorWithOpacity(colors.ERROR, '50'), // Background color for removed text
      'diffEditor.removedTextBorder': colors.ERROR, // Outline color for removed text
      // inlineChat.regionHighlight: *BG2 # Background color for the inline chat diff region
      // "diffEditor.border": colors.SUCCESS, // Border color between the two text editors.
      'diffEditor.diagonalFill': colors.INFO, // Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
      'diffEditor.insertedLineBackground': getColorWithOpacity(colors.INFO, '40'), // Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
      'diffEditor.removedLineBackground': getColorWithOpacity(colors.ERROR, '40'), // Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
      'diffEditorGutter.insertedLineBackground': colors.INFO, // Background color for the margin where lines got inserted.
      'diffEditorGutter.removedLineBackground': colors.ERROR, // Background color for the margin where lines got removed.
      // "diffEditorOverview.insertedForeground": colors.INFO, // Diff overview ruler foreground for inserted content.
      // "diffEditorOverview.removedForeground": colors.ERROR, // Diff overview ruler foreground for removed content.
      // "diffEditor.unchangedRegionBackground": colors.BG1, // The color of unchanged blocks in diff editor.
      // "diffEditor.unchangedRegionForeground": colors.FG1, // The foreground color of unchanged blocks in the diff editor.
      // "diffEditor.unchangedRegionShadow": colors.BG1, // The color of the shadow around unchanged region widgets.
      // "diffEditor.unchangedCodeBackground": colors.BG1, // The background color of unchanged code in the diff editor.
      // "diffEditor.move.border": colors.BORDER, // The border color for text that got moved in the diff editor.
      // "diffEditor.moveActive.border": colors.BORDER, // The active border color for text that got moved in the diff editor.
      // "multiDiffEditor.headerBackground": colors.BG1, // The background color of the diff editor's header
      // "multiDiffEditor.background": colors.BG1, // The background color of the multi file diff editor
      // "multiDiffEditor.border": colors.BORDER, // The border color of the multi file diff editor

      'editorError.foreground': colors.ERROR, // Foreground color of error squigglies in the editor
      // 'editorError.background': colors.BG1, // Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
      // "editorError.border": colors.BORDER, // Border color of error squigglies in the editor
      'editorWarning.foreground': colors.WARNING, // Foreground color of warning squigglies in the editor
      // 'editorWarning.background': colors.BG1, // Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
      // editorWarning.border: # Border color of warning squigglies in the editor
      'editorInfo.foreground': colors.INFO, // # Foreground color of info squiggles in the editor.
      // editorInfo.border: # Border color of info boxes in the editor.
      // 'editorInfo.background': colors.BG1, // # Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
      'editorHint.foreground': colors.SUCCESS, // # Foreground color of hints in the editor.
      // editorHint.border: # Border color of hint boxes in the editor.
      // problemsErrorIcon.foreground: # The color used for the problems error icon.
      // problemsWarningIcon.foreground: # The color used for the problems warning icon.
      // problemsInfoIcon.foreground: # The color used for the problems info icon.

      // editorUnnecessaryCode.border: # Border color of unnecessary (unused) source code in the editor.
      // editorUnnecessaryCode.opacity: # Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code instead of fading it out.

      // PEEK VIEW
      'peekView.border': colors.AC2, // Color of the peek view borders and arrow
      'peekViewEditor.background': colors.BG1, // Background color of the peek view editor
      // "peekViewEditorGutter.background": # Background color of the gutter in the peek view editor
      'peekViewEditor.matchHighlightBackground': colors.findMatch, // Match highlight color in the peek view editor
      // "peekViewEditor.matchHighlightBorder": "#ffff8080", // Match highlight border color in the peek view editor.
      'peekViewResult.background': colors.BG1, // Background color of the peek view result list
      'peekViewResult.fileForeground': colors.FG1, // Foreground color for file nodes in the peek view result list
      'peekViewResult.lineForeground': colors.FG1, // Foreground color for line nodes in the peek view result list
      'peekViewResult.matchHighlightBackground': colors.lineHighlight, // Match highlight color in the peek view result list
      'peekViewResult.selectionBackground': colors.BG2, // Background color of the selected entry in the peek view result list
      'peekViewResult.selectionForeground': colors.FG1, // Foreground color of the selected entry in the peek view result list
      'peekViewTitle.background': colors.BG1, // Background color of the peek view title area
      'peekViewTitleDescription.foreground': colors.FG2, // Color of the peek view title info
      'peekViewTitleLabel.foreground': colors.FG1, // Color of the peek view title
      // peekViewEditorStickyScroll.background: # Background color of sticky scroll in the peek view editor.

      // Merge Conflicts
      'merge.currentHeaderBackground': getColorWithOpacity(colors.INFO, '40'), // Current header background in inline merge conflicts
      'merge.currentContentBackground': getColorWithOpacity(colors.INFO, '20'), // Current content background in inline merge conflicts
      'merge.incomingHeaderBackground': getColorWithOpacity(colors.SUCCESS, '40'), // Incoming header background in inline merge conflicts
      'merge.incomingContentBackground': getColorWithOpacity(colors.SUCCESS, '20'), // Incoming content background in inline merge conflicts
      'merge.border': colors.BORDER, // Border color on headers and the splitter in inline merge conflicts
      // "merge.commonContentBackground": colors.BG1, // Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
      // "merge.commonHeaderBackground": colors.BG1, // Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
      'editorOverviewRuler.border': colors.BORDER, // Color of the overview ruler border
      'editorOverviewRuler.currentContentForeground': colors.INFO, // Current overview ruler foreground for inline merge conflicts
      'editorOverviewRuler.incomingContentForeground': colors.SUCCESS, // Incoming overview ruler foreground for inline merge conflicts
      'editorOverviewRuler.commonContentForeground': colors.FG1, // Common ancestor overview ruler foreground for inline merge conflicts.
      'editorOverviewRuler.commentForeground': syntaxColors.comment, // Editor overview ruler decoration color for resolved comments. This color should be opaque.
      // "editorOverviewRuler.commentUnresolvedForeground": colors.FG1, // Editor overview ruler decoration color for unresolved comments. T
      'editorOverviewRuler.infoForeground': colors.INFO,
      'editorOverviewRuler.addedForeground': colors.SUCCESS,
      'editorOverviewRuler.deletedForeground': colors.ERROR,
      'editorOverviewRuler.errorForeground': colors.ERROR,
      'editorOverviewRuler.warningForeground': colors.WARNING,
      'editorOverviewRuler.findMatchForeground': colors.FG1,
      'editorOverviewRuler.rangeHighlightForeground': colors.lineHighlight,
      'editorOverviewRuler.selectionHighlightForeground': colors.selection,
      'editorOverviewRuler.wordHighlightForeground': colors.lineHighlight,
      'editorOverviewRuler.wordHighlightStrongForeground': colors.lineHighlight,
      'editorOverviewRuler.modifiedForeground': colors.INFO,
      'mergeEditor.change.background': colors.WARNING,
      // mergeEditor.change.word.background: # The background color for word changes.
      // mergeEditor.conflict.unhandledUnfocused.border: # The border color of unhandled unfocused conflicts.
      // mergeEditor.conflict.unhandledFocused.border: # The border color of unhandled focused conflicts.
      // mergeEditor.conflict.handledUnfocused.border: # The border color of handled unfocused conflicts.
      // mergeEditor.conflict.handledFocused.border: # The border color of handled focused conflicts.
      // mergeEditor.conflict.handled.minimapOverViewRuler: # The foreground color for changes in input 1.
      // mergeEditor.conflict.unhandled.minimapOverViewRuler: # The foreground color for changes in input 1.
      // mergeEditor.conflictingLines.background: # The background of the "Conflicting Lines" text.
      // mergeEditor.changeBase.background: # The background color for changes in base.
      // mergeEditor.changeBase.word.background: # The background color for word changes in base.
      // mergeEditor.conflict.input1.background: # The background color of decorations in input 1.
      // mergeEditor.conflict.input2.background: # The background color of decorations in input 2.

      // # PANEL
      // # Panels are shown below the editor area and contain views like Output and Integrated Terminal.
      'panel.background': colors.BG2, // Panel background color
      'panel.border': colors.AC1, // Panel border color on the top separating to the editor
      'panelTitle.activeBorder': colors.AC1, // Border color for the active panel title
      'panelTitle.activeForeground': colors.FG1, // Title color for the active panel
      'panelTitle.inactiveForeground': syntaxColors.comment, // Title color for the inactive panel
      'panelInput.border': syntaxColors.comment, // Input box border for inputs in the panel.
      // panelSection.border: # Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
      // panelSection.dropBackground: # Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
      // panelSectionHeader.background: # Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.
      // panelSectionHeader.foreground: # Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
      // panelSectionHeader.border: # Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
      // panelStickyScroll.background: # Background color of sticky scroll in the panel.
      // panelStickyScroll.border: # Border color of sticky scroll in the panel.
      // panelStickyScroll.shadow: # Shadow color of sticky scroll in the panel.
      // outputView.background: # Output view background color.
      // outputViewStickyScroll.background: # Output view sticky scroll background color.

      // # Status Bar
      'statusBar.background': colors.AC2, // Standard Status Bar background color
      'statusBar.foreground': getAC2Foreground(), // Status Bar foreground color
      // "statusBar.border": colors.BORDER, // Status Bar border color separating the Status Bar and editor.
      // "statusBar.focusBorder": colors.BORDER, // Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
      'statusBar.debuggingBackground': colors.WARNING, // Status Bar background color when a program is being debugged
      'statusBar.debuggingForeground': getWARNINGForeground(), // Status Bar foreground color when a program is being debugged
      // "statusBar.debuggingBorder": colors.BORDER, // Status Bar border color separating the Status Bar and editor when a program is being debugged.
      'statusBar.noFolderBackground': colors.FG2, // Status Bar foreground color when no folder is opened
      'statusBar.noFolderForeground': colors.FG3, // Status Bar background color when no folder is opened
      // "statusBar.noFolderBorder": colors.BORDER, // Status Bar border color when no folder is opened
      'statusBarItem.activeBackground': getColorWithOpacity(colors.AC2, 'aa'), // Status Bar item background color when clicking
      // "statusBarItem.hoverForeground": colors.BORDER, // Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
      'statusBarItem.hoverBackground': getColorWithOpacity(colors.AC2, 'aa'), // Status Bar item background color when hovering
      'statusBarItem.prominentForeground': getAC2Foreground(), // Status Bar prominent items foreground color.
      'statusBarItem.prominentBackground': getColorWithOpacity(colors.AC2, 'aa'), // Status Bar prominent items background color. Prominent items stand out from other Status Bar entries to indicate importance
      'statusBarItem.prominentHoverForeground': getAC2Foreground(), // Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
      'statusBarItem.prominentHoverBackground': getColorWithOpacity(colors.AC2, 'aa'), // Status Bar prominent items background color when hovering. Prominent items stand out from other Status Bar entries to indicate importance
      'statusBarItem.remoteForeground': getAC1Foreground(), // Background color for the remote indicator on the status bar
      'statusBarItem.remoteBackground': colors.AC1, // Foreground color for the remote indicator on the status bar
      'statusBarItem.remoteHoverBackground': getColorWithOpacity(colors.AC1, 'aa'), // Background color for the remote indicator on the status bar when hovering.
      // "statusBarItem.remoteHoverForeground": colors.BORDER, // Foreground color for the remote indicator on the status bar when hovering.
      'statusBarItem.errorBackground': colors.ERROR, // Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
      'statusBarItem.errorForeground': getERRORForeground(), // Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
      'statusBarItem.errorHoverBackground': getColorWithOpacity(colors.ERROR, 'aa'), // # Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
      // statusBarItem.errorHoverForeground: # Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
      'statusBarItem.warningBackground': colors.WARNING, // Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
      'statusBarItem.warningForeground': getWARNINGForeground(), // Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
      'statusBarItem.warningHoverBackground': getColorWithOpacity(colors.WARNING, 'aa'), // Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
      // "statusBarItem.warningHoverForeground": colors.BORDER, // Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
      // statusBarItem.compactHoverBackground: # Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
      // statusBarItem.focusBorder: # Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
      // statusBarItem.offlineBackground: # Status bar item background color when the workbench is offline.
      // statusBarItem.offlineForeground: # Status bar item foreground color when the workbench is offline.
      // statusBarItem.offlineHoverForeground: # Status bar item foreground hover color when the workbench is offline.
      // statusBarItem.offlineHoverBackground: # Status bar item background hover color when the workbench is offline.

      // Title Bar Colors (MacOS Only)
      'titleBar.activeBackground': colors.BG2, // Title Bar background when the window is active
      'titleBar.activeForeground': colors.FG1, // Title Bar foreground when the window is active
      'titleBar.inactiveBackground': colors.BG2, // Title Bar background when the window is inactive
      'titleBar.inactiveForeground': syntaxColors.comment, // Title Bar foreground when the window is inactive
      // "titleBar.border": colors.BORDER, // Title bar border color.

      // Extensions
      'extensionButton.prominentForeground': getAC2Foreground(), // Extension view button foreground color (for example Install button)
      'extensionButton.prominentBackground': getColorWithOpacity(colors.AC2, 'aa'), // Extension view button background color
      'extensionButton.prominentHoverBackground': colors.AC2, // Extension view button background hover color
      // extensionButton.background: # Button background color for extension actions.
      // extensionButton.foreground: # Button foreground color for extension actions.
      // extensionButton.hoverBackground: # Button background hover color for extension actions.
      // extensionButton.separator: # Button separator color for extension actions.
      // extensionBadge.remoteBackground: # Background color for the remote badge in the extensions view.
      // extensionBadge.remoteForeground: # Foreground color for the remote badge in the extensions view.
      // extensionIcon.starForeground: # The icon color for extension ratings.
      // extensionIcon.verifiedForeground: # The icon color for extension verified publisher.
      // extensionIcon.preReleaseForeground: # The icon color for pre-release extension.
      // extensionIcon.sponsorForeground: # The icon color for extension sponsor.

      // # Menu
      // menubar.selectionForeground: # Foreground color of the selected menu item in the menubar.
      // menubar.selectionBackground: # Background color of the selected menu item in the menubar.
      // menubar.selectionBorder: # Border color of the selected menu item in the menubar.
      // menu.foreground: # Foreground color of menu items.
      // menu.background: # Background color of menu items.
      // menu.selectionForeground: # Foreground color of the selected menu item in menus.
      // menu.selectionBackground: # Background color of the selected menu item in menus.
      // menu.selectionBorder: # Border color of the selected menu item in menus.
      // menu.separatorBackground: # Color of a separator menu item in menus.
      // menu.border: # Border color of menus.

      // # Command Center colors
      // commandCenter.foreground: # Foreground color of the Command Center.
      // commandCenter.activeForeground: # Active foreground color of the Command Center.
      // commandCenter.background: # Background color of the Command Center.
      // commandCenter.activeBackground: # Active background color of the Command Center.
      // commandCenter.border: # Border color of the Command Center.
      // commandCenter.inactiveForeground: # Foreground color of the Command Center when the window is inactive.
      // commandCenter.inactiveBorder: # Border color of the Command Center when the window is inactive.
      // commandCenter.activeBorder: # Active border color of the Command Center.
      // commandCenter.debuggingBackground: # Command Center background color when a program is being debugged.

      // # Notifications
      // notificationCenter.border: # Notification Center border color.
      // notificationCenterHeader.foreground: # Notification Center header foreground color.
      // notificationCenterHeader.background: # Notification Center header background color.
      // notificationToast.border: # Notification toast border color.
      'notifications.foreground': colors.FG1, // Notification foreground color.
      'notifications.background': colors.BG2, // Notification background color.
      'notifications.border': colors.BORDER, // Notification border color separating from other notifications in the Notification Center.
      'notificationLink.foreground': colors.INFO, // Notification links foreground color.
      'notificationsErrorIcon.foreground': colors.ERROR, // The color used for the notification error icon.
      'notificationsWarningIcon.foreground': colors.WARNING, // The color used for the notification warning icon.
      'notificationsInfoIcon.foreground': colors.INFO, // The color used for the notification info icon.

      // Banner colors
      // # The banner appears below the title bar and spans the entire width of the workbench when visible.
      // banner.background: # Banner background color.
      // banner.foreground: # Banner foreground color.
      // banner.iconForeground: # Color for the icon in front of the banner text.

      // Quick Picker
      'pickerGroup.border': colors.AC2, // Quick picker (Quick Open) color for grouping borders
      'pickerGroup.foreground': syntaxColors.class, // Quick picker (Quick Open) color for grouping labels
      // quickInput.background: # Quick input background color. The quick input widget is the container for views like the color theme picker.
      // quickInput.foreground: # Quick input foreground color. The quick input widget is the container for views like the color theme picker.
      // quickInputList.focusBackground: # Quick picker background color for the focused item.
      // quickInputList.focusForeground: # Quick picker foreground color for the focused item.
      // quickInputList.focusIconForeground: # Quick picker icon foreground color for the focused item.
      // quickInputTitle.background: # Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.

      // # Key binding label
      // keybindingLabel.background: # Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
      // keybindingLabel.foreground: # Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
      // keybindingLabel.border: # Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
      // keybindingLabel.bottomBorder: # Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.

      // # Keyboard shortcut table colors
      // keybindingTable.headerBackground: # Background color for the keyboard shortcuts table header.
      // keybindingTable.rowsBackground: #Background color for the keyboard shortcuts table alternating rows.

      // # Debug
      'debugToolBar.background': colors.INFO, // # Debug toolbar background color
      'debugToolBar.foreground': getINFOForeground(), // # Debug toolbar foreground color
      // debugToolBar.border: # Debug toolbar border color.
      // editor.stackFrameHighlightBackground: # Background color of the top stack frame highlight in the editor.
      // editor.focusedStackFrameHighlightBackground: # Background color of the focused stack frame highlight in the editor.
      // editor.inlineValuesForeground: # Color for the debug inline value text.
      // editor.inlineValuesBackground: # Color for the debug inline value background.
      // debugView.exceptionLabelForeground: # Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
      // debugView.exceptionLabelBackground: # Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
      // debugView.stateLabelForeground: # Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
      // debugView.stateLabelBackground: # Background color for a label in the CALL STACK view showing the current session's or thread's state.
      // debugView.valueChangedHighlight: # Color used to highlight value changes in the debug views (such as in the Variables view).
      // debugTokenExpression.name: # Foreground color for the token names shown in debug views (such as in the Variables or Watch view).
      // debugTokenExpression.value: # Foreground color for the token values shown in debug views.
      // debugTokenExpression.string: # Foreground color for strings in debug views.
      // debugTokenExpression.boolean: # Foreground color for booleans in debug views.
      // debugTokenExpression.number: # Foreground color for numbers in debug views.
      // debugTokenExpression.error: # Foreground color for expression errors in debug views.
      // debugTokenExpression.type: # Foreground color for the token types shown in the debug views (ie. the Variables or Watch view).

      // // # Testing colors
      // testing.runAction: # Color for 'run' icons in the editor.
      // testing.iconErrored: # Color for the 'Errored' icon in the test explorer.
      // testing.iconFailed: # Color for the 'failed' icon in the test explorer.
      // testing.iconPassed: # Color for the 'passed' icon in the test explorer.
      // testing.iconQueued: # Color for the 'Queued' icon in the test explorer.
      // testing.iconUnset: # Color for the 'Unset' icon in the test explorer.
      // testing.iconSkipped: # Color for the 'Skipped' icon in the test explorer.
      // testing.iconErrored.retired: # Retired color for the 'Errored' icon in the test explorer.
      // testing.iconFailed.retired: # Retired color for the 'failed' icon in the test explorer.
      // testing.iconPassed.retired: # Retired color for the 'passed' icon in the test explorer.
      // testing.iconQueued.retired: # Retired color for the 'Queued' icon in the test explorer.
      // testing.iconUnset.retired: # Retired color for the 'Unset' icon in the test explorer.
      // testing.iconSkipped.retired: # Retired color for the 'Skipped' icon in the test explorer.
      // testing.peekBorder: # Color of the peek view borders and arrow.
      // testing.peekHeaderBackground: # Color of the peek view borders and arrow.
      // testing.message.error.decorationForeground: # Text color of test error messages shown inline in the editor.
      // testing.message.error.lineBackground: # Margin color beside error messages shown inline in the editor.
      // testing.message.info.decorationForeground: # Text color of test info messages shown inline in the editor.
      // testing.message.info.lineBackground: # Margin color beside info messages shown inline in the editor.
      // testing.messagePeekBorder: # Color of the peek view borders and arrow when peeking a logged message.
      // testing.messagePeekHeaderBackground: # Color of the peek view borders and arrow when peeking a logged message.
      // testing.coveredBackground: # Background color of text that was covered.
      // testing.coveredBorder: # Border color of text that was covered.
      // testing.coveredGutterBackground: # Gutter color of regions where code was covered.
      // testing.uncoveredBranchBackground: # Background of the widget shown for an uncovered branch.
      // testing.uncoveredBackground: # Background color of text that was not covered.
      // testing.uncoveredBorder: # Border color of text that was not covered.
      // testing.uncoveredGutterBackground: # Gutter color of regions where code not covered.
      // testing.coverCountBadgeBackground: # Background for the badge indicating execution count
      // testing.coverCountBadgeForeground: # Foreground for the badge indicating execution count

      // # Welcome Page
      // welcomePage.background: # Background color for the Welcome page.
      // welcomePage.buttonBackground: # Background color for the buttons on the Welcome page
      // welcomePage.progress.background: # Foreground color for the Welcome page progress bars.
      // welcomePage.progress.foreground: # Background color for the Welcome page progress bars.
      // welcomePage.buttonHoverBackground: # Hover background color for the buttons on the Welcome page
      // walkThrough.embeddedEditorBackground: "#242424" # Background color for the embedded editors on the Interactive Playground
      // welcomePage.tileBackground: # Background color for the tiles on the Welcome page.
      // welcomePage.tileHoverBackground: # Hover background color for the tiles on the Welcome page.
      // welcomePage.tileBorder: # Border color for the tiles on the Welcome page.
      // walkthrough.stepTitle.foreground: # Foreground color of the heading of each walkthrough step.

      // # SETTINGS
      'settings.headerForeground': colors.FG1, // The foreground color for a section header or active title
      'settings.modifiedItemIndicator': colors.WARNING, // The color of the line that indicates a modified setting
      'settings.inactiveSelectedItemBorder': syntaxColors.comment, // The color of the selected setting row border, when the settings list does not have focus
      'settings.dropdownBackground': colors.BG1, // Dropdown background
      'settings.dropdownForeground': colors.FG1, // Dropdown foreground
      'settings.dropdownBorder': colors.BORDER, // Dropdown border
      'settings.checkboxBackground': colors.BG1, // Checkbox background
      'settings.checkboxForeground': colors.FG1, // Checkbox foreground
      'settings.checkboxBorder': colors.BORDER, // Checkbox border
      'settings.textInputBackground': colors.BG1, // Text input box background
      'settings.textInputForeground': colors.FG1, // Text input box foreground
      'settings.textInputBorder': syntaxColors.comment, // Text input box border
      'settings.numberInputBackground': colors.BG1, // Number input box background
      'settings.numberInputForeground': colors.FG1, // Number input box foreground
      'settings.numberInputBorder': syntaxColors.comment, // Number input box border
      'settings.rowHoverBackground': getColorWithOpacity(colors.lineHighlight, '40'), // The background color of a settings row when hovered.
      'settings.focusedRowBackground': getColorWithOpacity(colors.lineHighlight, '50'), // Background color of a focused setting row.
      'settings.focusedRowBorder': syntaxColors.comment, // The color of the row's top and bottom border when the row is focused.
      'settings.headerBorder': colors.BORDER, // The color of the header container border.
      // settings.sashBorder: # The color of the Settings editor splitview sash border.
      'settings.settingsHeaderHoverForeground': colors.FG1, // The foreground color for a section header or hovered title.

      // # GIT DECORATION
      'gitDecoration.addedResourceForeground': colors.SUCCESS, // Color for added Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.modifiedResourceForeground': colors.INFO, // Color for modified Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.deletedResourceForeground': colors.ERROR, // Color for deleted Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.renamedResourceForeground': colors.AC1, // Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.stageModifiedResourceForeground': colors.INFO, // Color for staged modifications git decorations. Used for file labels and the SCM viewlet.
      'gitDecoration.stageDeletedResourceForeground': colors.ERROR, // Color for staged deletions git decorations. Used for file labels and the SCM viewlet.
      'gitDecoration.untrackedResourceForeground': syntaxColors.comment, // Color for untracked Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.ignoredResourceForeground': syntaxColors.comment, // Color for ignored Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.conflictingResourceForeground': colors.WARNING, // Color for conflicting Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.submoduleResourceForeground': colors.INFO, // Color for submodule resources.

      // # Breadcrumbs
      'breadcrumb.background': colors.BG2, // Color of breadcrumb items
      'breadcrumb.foreground': syntaxColors.comment, // Color of breadcrumb items
      'breadcrumb.activeForeground': colors.FG1, // Color of breadcrumb items
      'breadcrumb.focusForeground': colors.FG1, // Color of focused breadcrumb items
      'breadcrumb.activeSelectionForeground': colors.FG1, // Color of selected breadcrumb items
      'breadcrumbPicker.background': colors.BG2, // Background color of breadcrumb item picker

      // chart colors
      'charts.foreground': colors.FG1,
      'charts.lines': colors.FG2,
      'charts.red': colors.ERROR,
      'charts.blue': colors.INFO,
      'charts.yellow': colors.WARNING,
      'charts.orange': colors.AC1,
      'charts.green': colors.SUCCESS,
      'charts.purple': ansiColors.Magenta
    },
    tokenColors: [
      //---------------------------------------------------------
      // GENERAL TOKKENS
      //---------------------------------------------------------
      {
        scope: ['string'],
        settings: {
          foreground: colors.FG1
        }
      },
      {
        scope: ['emphasis'],
        settings: {
          fontStyle: 'italic'
        }
      },
      {
        scope: ['strong'],
        settings: {
          fontStyle: 'bold'
        }
      },
      {
        scope: ['invalid'],
        settings: {
          foreground: colors.ERROR,
          fontStyle: 'strikethrough'
        }
      },
      {
        scope: ['invalid.deprecated'],
        settings: {
          foreground: colors.WARNING,
          fontStyle: 'underline italic'
        }
      },
      {
        scope: ['header'],
        settings: {
          foreground: colors.AC2
        }
      },
      {
        scope: ['source'],
        settings: {
          foreground: colors.FG1
        }
      },
      {
        scope: ['source.ini'],
        settings: {
          foreground: colors.FG2
        }
      },
      {
        scope: ['source.ignore'],
        settings: {
          foreground: colors.FG2
        }
      },
      //--------------------------------------------------------------------
      // MARKUP
      //--------------------------------------------------------------------
      {
        scope: ['markup.inserted'],
        settings: {
          foreground: colors.SUCCESS
        }
      },
      {
        scope: ['markup.deleted'],
        settings: {
          foreground: colors.ERROR
        }
      },
      {
        scope: ['markup.changed'],
        settings: {
          foreground: colors.WARNING
        }
      },
      {
        scope: ['markup.error'],
        settings: {
          foreground: colors.ERROR
        }
      },
      {
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline'
        }
      },
      {
        scope: ['markup.bold'],
        settings: {
          // foreground: colors.WARNING,
          fontStyle: 'bold'
        }
      },
      {
        scope: ['markup.heading'],
        settings: {
          foreground: colors.AC1,
          fontStyle: 'bold'
        }
      },
      {
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic'
        }
      },
      {
        scope: ['markup.quote'],
        settings: {
          foreground: colors.FG2
        }
      },
      {
        scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
        settings: {
          foreground: colors.FG2
        }
      },
      {
        scope: ['markup.underline.link', 'markup.underline.link.image'],
        settings: {
          foreground: colors.INFO
        }
      },
      //--------------------------------------------------------------------
      // ENTITIES
      //--------------------------------------------------------------------
      {
        scope: ['entity.name.class', 'entity.name.type.class', 'entity.other.inherited-class'],
        settings: {
          foreground: syntaxColors.class
        }
      },
      {
        scope: ['entity.name.type'],
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        scope: [
          'entity.name.type.module',
          'entity.name.type.type-parameter',
          'meta.indexer.mappedtype.declaration entity.name.type',
          'meta.type.parameters entity.name.type'
        ],
        settings: {
          foreground: syntaxColors.typeParameter
        }
      },
      //--------------------------------------------------------------------
      // STORAGE
      //--------------------------------------------------------------------
      {
        scope: ['storage'],
        settings: {
          foreground: syntaxColors.storage
        }
      },
      {
        scope: ['storage.type'],
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        scope: ['storage.modifier'],
        settings: {
          foreground: syntaxColors.modifier
        }
      },
      //--------------------------------------------------------------------
      // SUPPORT
      //--------------------------------------------------------------------
      {
        scope: ['support'],
        settings: {
          foreground: syntaxColors.support
        }
      },
      {
        scope: ['support.type'],
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        scope: ['support.constant'],
        settings: {
          foreground: syntaxColors.constant
        }
      },

      {
        scope: ['support.function'],
        settings: {
          foreground: syntaxColors.supportFunction
        }
      },
      {
        scope: ['support.class'],
        settings: {
          foreground: syntaxColors.class
        }
      },
      {
        scope: ['support.other'],
        settings: {
          foreground: syntaxColors.other
        }
      },
      //--------------------------------------------------------------------
      // COMMENTS
      //--------------------------------------------------------------------
      {
        scope: ['comment', 'punctuation.definition.comment', 'unused.comment', 'wildcard.comment'],
        settings: {
          foreground: syntaxColors.comment
        }
      },

      //--------------------------------------------------------------------
      // CONSTANTS
      //--------------------------------------------------------------------
      {
        scope: ['constant', 'constant.numeric'],
        settings: {
          foreground: syntaxColors.constant
        }
      },
      {
        scope: ['constant.other.color'],
        settings: {
          foreground: syntaxColors.other
        }
      },
      {
        scope: ['constant.character'],
        settings: {
          foreground: colors.WARNING
        }
      },
      {
        scope: [
          'constant.character.escape',
          'constant.character.string.escape',
          'constant.regexp',
          'constant.language'
        ],
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        scope: ['constant.other.date', 'constant.other.timestamp'],
        settings: {
          foreground: syntaxColors.datetime
        }
      },

      //--------------------------------------------------------------------
      // KEYWORDS
      //--------------------------------------------------------------------
      {
        scope: ['keyword', 'punctuation.definition.keyword'],
        settings: {
          foreground: syntaxColors.keyword
        }
      },
      {
        scope: ['keyword.operator'],
        settings: {
          foreground: syntaxColors.operator
        }
      },
      {
        scope: ['keyword.other.unit'],
        settings: {
          foreground: syntaxColors.unit
        }
      },
      {
        scope: ['keyword.control', 'keyword.other.template', 'keyword.other.substitution'],
        settings: {
          foreground: syntaxColors.control
        }
      },
      {
        scope: ['keyword.other.this'],
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        scope: ['keyword.control.import', 'keyword.control.from'],
        settings: {
          foreground: syntaxColors.controlImport
        }
      },
      {
        scope: ['keyword.control.new', 'keyword.operator.new', 'keyword.other.important.css'],
        settings: {
          foreground: colors.WARNING
        }
      },
      {
        scope: [
          'keyword.control.flow',
          'keyword.control.loop',
          'keyword.control.conditional',
          'keyword.operator.ternary'
        ],
        settings: {
          foreground: syntaxColors.controlFlow
        }
      },
      {
        scope: [
          'keyword.operator.logical',
          'keyword.operator.relational',
          'keyword.operator.comparison',
          'keyword.operator.assignment',
          'keyword.operator.arithmetic',
          'keyword.operator.bitwise',
          'keyword.operator.logical.js',
          'keyword.operator.logical.ts',
          'keyword.operator.logical.jsx',
          'keyword.operator.logical.tsx'
        ],
        settings: {
          foreground: syntaxColors.operator
        }
      },

      //--------------------------------------------------------------------
      // PONCTUATION
      //--------------------------------------------------------------------
      {
        scope: [
          'punctuation.definition.string.begin',
          'punctuation.definition.string.end',
          'punctuation.support.type.property-name.begin',
          'punctuation.support.type.property-name.end'
        ],
        settings: {
          foreground: syntaxColors.punctuation
        }
      },
      {
        scope: [
          'punctuation.definition.keyword.css',
          'entity.other.attribute-name punctuation',
          'punctuation.section.property-list.begin.bracket.curly.css',
          'punctuation.section.property-list.end.bracket.curly.css',
          'punctuation.definition.attribute-selector.end.bracket.square.scss',
          'punctuation.definition.attribute-selector.begin.bracket.square.scss'
        ],
        settings: {
          foreground: syntaxColors.punctuation
        }
      },
      {
        scope: [
          'meta.brace.round',
          'meta.brace.square',
          'meta.brace.curly',
          'punctuation.separator',
          'meta.function-call punctuation',
          'punctuation.definition.arguments.begin',
          'punctuation.definition.arguments.end',
          'punctuation.definition.entity.begin',
          'punctuation.definition.entity.end',
          'punctuation.definition.type.begin',
          'punctuation.definition.type.end',
          'punctuation.section.scope.begin',
          'punctuation.section.scope.end',
          'meta.group.toml',
          'meta.group.double.toml',
          'punctuation.definition.block.scalar.folded.yaml',
          'punctuation.definition.block.scalar.literal.yaml',
          'punctuation.definition.block.sequence.item.yaml'
        ],
        settings: {
          foreground: syntaxColors.punctuationBrace
        }
      },
      {
        scope: ['punctuation.definition.constant.restructuredtext'],
        settings: {
          foreground: colors.AC2
        }
      },
      {
        scope: [
          'punctuation.definition.string',
          'punctuation.definition.string.begin',
          'punctuation.definition.string.end',
          'punctuation.section.embedded.begin',
          'punctuation.section.embedded.end',
          'punctuation.section.embedded.begin.tsx',
          'punctuation.section.embedded.end.tsx',
          'punctuation.section.embedded.begin.jsx',
          'punctuation.section.embedded.end.jsx',
          'meta.string-contents.quoted.double punctuation.definition.variable',
          'punctuation.definition.interpolation.begin',
          'punctuation.definition.interpolation.end',
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.definition.variable.makefile'
        ],
        settings: {
          foreground: syntaxColors.punctuationQuote
        }
      },
      {
        scope: [
          'punctuation.separator',
          'punctuation.separator.comma',
          'punctuation.separator.comma.css',
          'punctuation.separator.key-value',
          'punctuation.separator.key-value.css',
          'punctuation.separator.list.comma.css'
        ],
        settings: {
          foreground: syntaxColors.punctuationComma
        }
      },
      {
        scope: ['punctuation string.interpolated'],
        settings: {
          foreground: colors.AC2
        }
      },

      //--------------------------------------------------------------------
      // VARIABLES
      //--------------------------------------------------------------------
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
          'variable.object.property',
          'variable.property.cli',
          'variable.property',
          'variable.other.object.property',
          'variable.other.object.instance.property',
          'variable.other.constant.property'
        ],
        settings: {
          foreground: syntaxColors.variableProperty
        }
      },
      {
        scope: [
          'support.variable.property',
          'support.variable.property.js',
          'support.variable.property.ts'
        ],
        settings: {
          foreground: syntaxColors.supportProperty
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

      //--------------------------------------------------------------------
      // FUNCTIONS
      //--------------------------------------------------------------------
      {
        scope: ['entity.name.function'],
        settings: {
          foreground: syntaxColors.function
        }
      },
      {
        scope: ['meta.function-call', 'meta.function-call.generic', 'meta.function-call.object'],
        settings: {
          foreground: syntaxColors.functionCall
        }
      },
      {
        scope: ['variable.function'],
        settings: {
          foreground: syntaxColors.functionCall
        }
      },
      {
        scope: [
          'support.function.magic',
          'storage.modifier.async',
          'keyword.control.trycatch',
          'keyword.control.trycatch.js',
          'keyword.control.trycatch.ts',
          'keyword.control.trycatch.tsx',
          'keyword.control.trycatch.jsx'
        ],
        settings: {
          foreground: syntaxColors.supportFunction
        }
      },
      {
        scope: [
          'entity.name.type.type-parameter',
          'meta.indexer.mappedtype.declaration entity.name.type',
          'meta.type.parameters entity.name.type'
        ],
        settings: {
          foreground: syntaxColors.typeParameter
        }
      },
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
        scope: ['support.type.property-name'],
        settings: {
          foreground: syntaxColors.supportProperty
        }
      },
      {
        scope: ['support.variable', 'variable.other.predefined'],
        settings: {
          foreground: syntaxColors.supportVariable
        }
      },
      {
        scope: ['support.function'],
        settings: {
          foreground: syntaxColors.supportFunction
        }
      },
      {
        scope: ['support.method', 'support.function.misc'],
        settings: {
          foreground: syntaxColors.supportMethod
        }
      },
      {
        scope: ['support.method-call'],
        settings: {
          foreground: syntaxColors.supportMethod
        }
      },
      {
        scope: ['entity.name.function.member'],
        settings: {
          foreground: syntaxColors.method
        }
      },
      {
        name: 'Decorators',
        scope: [
          'meta.annotation variable.function',
          'meta.annotation variable.annotation.function',
          'meta.annotation punctuation.definition.annotation',
          'meta.decorator',
          'punctuation.decorator'
        ],
        settings: {
          foreground: syntaxColors.functionCall
        }
      },

      //--------------------------------------------------------------------
      // REGEXP
      //--------------------------------------------------------------------

      {
        name: 'Regex string begin/end in JS/TS',
        scope: [
          'string.regexp punctuation.definition.string.begin',
          'string.regexp punctuation.definition.string.end'
        ],
        settings: {
          foreground: colors.AC1
        }
      },
      {
        name: 'Regex anchors (^, $)',
        scope: 'keyword.control.anchor.regexp',
        settings: {
          foreground: colors.AC2
        }
      },
      {
        name: 'Regex regular string match',
        scope: 'string.regexp.ts',
        settings: {
          foreground: colors.FG1
        }
      },
      {
        name: 'Regex group parenthesis & backreference (\\1, \\2, \\3, ...)',
        scope: ['punctuation.definition.group.regexp', 'keyword.other.back-reference.regexp'],
        settings: {
          foreground: colors.FG2
        }
      },
      {
        name: 'Regex character class []',
        scope: 'punctuation.definition.character-class.regexp',
        settings: {
          foreground: colors.INFO
        }
      },
      {
        name: 'Regex character classes (\\d, \\w, \\s)',
        scope: 'constant.other.character-class.regexp',
        settings: {
          foreground: syntaxColors.class
        }
      },
      {
        name: 'Regex range',
        scope: 'constant.other.character-class.range.regexp',
        settings: {
          foreground: syntaxColors.constant
        }
      },
      {
        name: 'Regex quantifier',
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: syntaxColors.operator
        }
      },
      {
        name: 'Regex constant/numeric',
        scope: 'constant.character.numeric.regexp',
        settings: {
          foreground: syntaxColors.constant
        }
      },
      {
        name: 'Regex lookaheads, negative lookaheads, lookbehinds, negative lookbehinds',
        scope: [
          'punctuation.definition.group.no-capture.regexp',
          'meta.assertion.look-ahead.regexp',
          'meta.assertion.negative-look-ahead.regexp'
        ],
        settings: {
          foreground: colors.ERROR
        }
      },

      {
        scope: [
          'string.regexp',
          'constant.other.character-class.set.regexp',
          'constant.character.escape.backslash.regexp'
        ],
        settings: {
          foreground: syntaxColors.other
        }
      },
      {
        scope: ['punctuation.definition.group.capture.regexp'],
        settings: {
          foreground: colors.SUCCESS
        }
      },

      {
        scope: [
          'punctuation.definition.group.assertion.regexp',
          'keyword.operator.negation.regexp'
        ],
        settings: {
          foreground: colors.ERROR
        }
      },

      //--------------------------------------------------------------------
      // JSON
      //--------------------------------------------------------------------
      {
        scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
        settings: {
          foreground: colors.AC1
        }
      },
      {
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: colors.AC2
        }
      },
      {
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: ansiColors.BrightGreen
        }
      },
      {
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: ansiColors.BrightCyan
        }
      },
      {
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: ansiColors.BrightBlue
        }
      },
      {
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: ansiColors.BrightMagenta
        }
      },
      {
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: ansiColors.BrightRed
        }
      },
      {
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: ansiColors.BrightYellow
        }
      },

      //--------------------------------------------------------------------
      // MISC
      //--------------------------------------------------------------------
      {
        scope: 'token.info-token',
        settings: {
          foreground: colors.INFO
        }
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: colors.WARNING
        }
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: colors.ERROR
        }
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: colors.WARNING
        }
      },

      //--------------------------------------------------------------------
      // C++
      //--------------------------------------------------------------------
      {
        name: 'C++ extern keyword',
        scope: 'storage.modifier.specifier.extern.cpp',
        settings: {
          foreground: colors.WARNING
        }
      },
      {
        name: 'C++ scope resolution',
        scope: [
          'entity.name.scope-resolution.template.call.cpp',
          'entity.name.scope-resolution.cpp',
          'entity.name.scope-resolution.function.definition.cpp'
        ],
        settings: {
          foreground: syntaxColors.function
        }
      },
      {
        scope: ['entity.name.scope-resolution.parameter.cpp'],
        settings: {
          foreground: syntaxColors.parameter
        }
      },
      {
        name: 'C++ doc keywords',
        scope: 'storage.type.class.doxygen',
        settings: {
          foreground: syntaxColors.class
        }
      },
      {
        name: 'C++ operators',
        scope: ['storage.modifier.reference.cpp'],
        settings: {
          foreground: syntaxColors.operator
        }
      },

      //--------------------------------------------------------------------
      // C#
      //--------------------------------------------------------------------
      {
        name: 'C# Interpolated Strings',
        scope: 'meta.interpolation.cs',
        settings: {
          foreground: colors.FG2
        }
      },
      {
        name: 'C# xml-style docs',
        scope: 'comment.block.documentation.cs',
        settings: {
          foreground: colors.FG2
        }
      },

      //--------------------------------------------------------------------
      // CSS
      //--------------------------------------------------------------------
      {
        scope: ['entity.other.attribute-name.class.css'],
        settings: {
          foreground: syntaxColors.class
        }
      },
      {
        scope: ['entity.other.attribute-name.pseudo-class.css'],
        settings: {
          foreground: syntaxColors.type
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
        name: 'Operators',
        scope: 'punctuation.separator.operator.css',
        settings: {
          foreground: syntaxColors.operator
        }
      },
      {
        name: 'Pseudo classes',
        scope: 'source.css entity.other.attribute-name.pseudo-class',
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        scope: 'source.css constant.other.unicode-range',
        settings: {
          foreground: syntaxColors.other
        }
      },
      {
        scope: 'source.css variable.parameter.url',
        settings: {
          foreground: colors.INFO,
          fontStyle: ''
        }
      },
      {
        name: 'CSS vendored property names',
        scope: ['support.type.vendored.property-name'],
        settings: {
          foreground: syntaxColors.supportProperty
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
        name: 'CSS Percentage values',
        scope: 'keyword.other.unit.percentage.css',
        settings: {
          foreground: syntaxColors.unit
        }
      },
      {
        name: 'CSS Attribute selectors',
        scope: ['source.css meta.attribute-selector'],
        settings: {
          foreground: syntaxColors.selector
        }
      },
      {
        scope: ['meta.attribute-selector.scss'],
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
        name: 'Wildcard(*) selector in Stylesheets',
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
        scope: [
          'source.css support.type.property-name',
          'source.sass support.type.property-name',
          'source.scss support.type.property-name',
          'source.less support.type.property-name',
          'source.stylus support.type.property-name',
          'source.postcss support.type.property-name'
        ],
        settings: {
          foreground: syntaxColors.property
        }
      },
      {
        name: 'Constant property values in Stylesheets',
        scope: ['support.constant.property-value.css', 'constant.numeric.css'],
        settings: {
          foreground: syntaxColors.constant
        }
      },
      {
        scope: ['keyword.control.at-rule.apply.tailwind'],
        settings: {
          foreground: syntaxColors.controlImport
          // fontStyle: "bold",
        }
      },
      {
        scope: ['keyword.control.at-rule.tailwind.tailwind'],
        settings: {
          foreground: syntaxColors.control
        }
      },
      {
        scope: ['keyword.control.at-rule.layer.tailwind'],
        settings: {
          foreground: syntaxColors.controlFlow
        }
      },
      {
        scope: ['meta.selector'],
        settings: {
          foreground: syntaxColors.selector
        }
      },
      {
        name: 'Property names (left hand assignments in json/yaml/css)',
        scope: 'support.type.property-name.css',
        settings: {
          foreground: syntaxColors.property,
          fontStyle: ''
        }
      },

      //--------------------------------------------------------------------
      // DATA - JSON - YAML - TOML
      //--------------------------------------------------------------------

      {
        name: 'JSON/YAML keys, other left-hand assignments',
        scope: [
          'keyword.other.definition.toml',
          'keyword.other.definition.yaml',
          'punctuation.support.type.property-name.toml',
          'support.type.property-name.toml',
          'entity.name.tag.yaml',
          'punctuation.support.type.property-name.yaml',
          'support.type.property-name.yaml'
        ],
        settings: {
          foreground: colors.AC2,
          fontStyle: ''
        }
      },
      {
        name: 'JSON/YAML constants',
        scope: ['constant.language.json', 'constant.language.yaml'],
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        scope: ['variable.other.alias.yaml', 'punctuation.definition.alias.yaml'],
        settings: {
          foreground: syntaxColors.variableReadonly,
          fontStyle: 'underline'
        }
      },
      {
        name: 'YAML anchors',
        scope: ['entity.name.type.anchor.yaml'],
        settings: {
          foreground: syntaxColors.variableReadonly,
          fontStyle: ''
        }
      },
      {
        name: 'TOML tables / ini groups',
        scope: ['support.type.property-name.table', 'entity.name.section.group-title.ini'],
        settings: {
          foreground: syntaxColors.property
        }
      },
      {
        name: 'TOML dates',
        scope: 'constant.other.time.datetime.offset.toml',
        settings: {
          foreground: syntaxColors.datetime
        }
      },
      {
        name: 'YAML anchor puctuation',
        scope: ['punctuation.definition.anchor.yaml'],
        settings: {
          foreground: syntaxColors.punctuation
        }
      },
      {
        name: 'YAML triple dashes',
        scope: 'entity.other.document.begin.yaml',
        settings: {
          foreground: colors.AC2
        }
      },

      //--------------------------------------------------------------------
      // DIFF
      //--------------------------------------------------------------------

      {
        name: 'Markup Diff',
        scope: 'markup.changed.diff',
        settings: {
          foreground: colors.WARNING
        }
      },
      {
        name: 'Diff',
        scope: [
          'meta.diff.header.from-file',
          'meta.diff.header.to-file',
          'punctuation.definition.from-file.diff',
          'punctuation.definition.to-file.diff'
        ],
        settings: {
          foreground: colors.INFO
        }
      },
      {
        name: 'Diff Inserted',
        scope: 'markup.inserted.diff',
        settings: {
          foreground: colors.SUCCESS
        }
      },
      {
        name: 'Diff Deleted',
        scope: 'markup.deleted.diff',
        settings: {
          foreground: colors.ERROR
        }
      },

      //--------------------------------------------------------------------
      // .ENV
      //--------------------------------------------------------------------

      {
        name: 'dotenv left-hand side assignments',
        scope: ['variable.other.env'],
        settings: {
          foreground: syntaxColors.other
        }
      },
      {
        name: 'dotenv reference to existing env variable',
        scope: ['string.quoted variable.other.env'],
        settings: {
          foreground: syntaxColors.other
        }
      },

      //--------------------------------------------------------------------
      // GO LANG
      //--------------------------------------------------------------------
      {
        name: 'Comment keywords',
        scope: 'comment meta.annotation.go',
        settings: {
          foreground: syntaxColors.keyword
        }
      },
      {
        name: 'go:embed, go:build, etc.',
        scope: 'comment meta.annotation.parameters.go',
        settings: {
          foreground: syntaxColors.parameter
        }
      },
      {
        name: 'Go constants (nil, true, false)',
        scope: 'constant.language.go',
        settings: {
          foreground: syntaxColors.constant
        }
      },

      //--------------------------------------------------------------------
      // GRAPHQL
      //--------------------------------------------------------------------

      {
        name: 'GraphQL variables',
        scope: 'variable.graphql',
        settings: {
          foreground: syntaxColors.variableDeclaration
        }
      },
      {
        name: 'GraphQL aliases',
        scope: 'string.unquoted.alias.graphql',
        settings: {
          foreground: syntaxColors.variable
        }
      },
      {
        name: 'GraphQL enum members',
        scope: 'constant.character.enum.graphql',
        settings: {
          foreground: colors.FG2
        }
      },
      {
        name: 'GraphQL field in types',
        scope: 'meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql',
        settings: {
          foreground: syntaxColors.typeParameter
        }
      },

      //--------------------------------------------------------------------
      // HTML
      //--------------------------------------------------------------------

      {
        name: 'HTML tags, HTML/XML-like <tags/>',
        scope: ['meta.tag.any.html', 'entity.name.tag'],
        settings: {
          foreground: syntaxColors.tag
        }
      },
      {
        scope: [
          'punctuation.definition.tag',
          'punctuation.definition.tag.html',
          'punctuation.definition.tag.begin.html',
          'punctuation.definition.tag.end.html',
          'punctuation.separator.key-value.html'
        ],
        settings: {
          foreground: syntaxColors.tagPunctuation
        }
      },
      {
        name: 'HTML/XML DOCTYPE as keyword',
        scope: [
          'keyword.other.doctype',
          'meta.tag.sgml.doctype punctuation.definition.tag',
          'meta.tag.metadata.doctype entity.name.tag',
          'meta.tag.metadata.doctype punctuation.definition.tag'
        ],
        settings: {
          foreground: syntaxColors.keyword
        }
      },

      {
        name: 'Special characters like &amp;',
        scope: [
          'text.html constant.character.entity',
          'text.html constant.character.entity punctuation',
          'constant.character.entity.xml',
          'constant.character.entity.xml punctuation',
          'constant.character.entity.js.jsx',
          'constant.charactger.entity.js.jsx punctuation',
          'constant.character.entity.tsx',
          'constant.character.entity.tsx punctuation'
        ],
        settings: {
          foreground: colors.WARNING
        }
      },
      {
        name: 'HTML/XML tag attribute values',
        scope: ['entity.other.attribute-name', 'variable.other.key'],
        settings: {
          foreground: syntaxColors.attribute
        }
      },
      {
        name: 'Components',
        scope: [
          'support.class.component',
          'support.class.component.jsx',
          'support.class.component.tsx',
          'support.class.component.vue'
        ],
        settings: {
          foreground: syntaxColors.function
        }
      },

      //--------------------------------------------------------------------
      // JAVA
      //--------------------------------------------------------------------

      {
        name: 'Annotations',
        scope: ['punctuation.definition.annotation', 'storage.type.annotation'],
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        name: 'Java enums',
        scope: 'constant.other.enum.java',
        settings: {
          foreground: colors.FG2
        }
      },
      {
        name: 'Java imports',
        scope: 'storage.modifier.import.java',
        settings: {
          foreground: syntaxColors.controlImport
        }
      },

      //--------------------------------------------------------------------
      // JAVASCRIPT
      //--------------------------------------------------------------------
      {
        scope: [
          'meta.export variable.other.readwrite.js',
          'meta.export variable.other.readwrite.ts',
          'meta.export variable.other.readwrite.tsx',
          'meta.export variable.other.readwrite.jsx'
          // 'variable.other.constant.js',
          // 'variable.other.constant.ts',
        ],
        settings: {
          foreground: syntaxColors.variableDeclaration
        }
      },
      {
        name: 'JS/TS properties',
        scope: ['variable.other.property.js', 'variable.other.property.ts'],
        settings: {
          foreground: syntaxColors.property
        }
      },
      {
        name: 'JSDoc;',
        scope: ['variable.other.jsdoc', 'comment.block.documentation variable.other'],
        settings: {
          foreground: syntaxColors.other,
          fontStyle: ''
        }
      },
      {
        name: 'JSDoc keywords',
        scope: 'storage.type.class.jsdoc',
        settings: {
          foreground: syntaxColors.class
        }
      },
      {
        scope: 'support.type.object.console.js',
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        name: 'Node constants as keywords (module, etc.)',
        scope: ['support.constant.node', 'support.type.object.module.js'],
        settings: {
          foreground: syntaxColors.constant
        }
      },
      {
        name: 'implements as keyword',
        scope: 'storage.modifier.implements',
        settings: {
          foreground: syntaxColors.modifier
        }
      },
      {
        name: 'Builtin types',
        scope: [
          'constant.language.null.js',
          'constant.language.null.ts',
          'constant.language.undefined.js',
          'constant.language.undefined.ts',
          'support.type.builtin.ts'
        ],
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        scope: 'variable.parameter.generic',
        settings: {
          foreground: syntaxColors.parameter
        }
      },
      {
        name: 'Arrow functions',
        scope: ['keyword.declaration.function.arrow.js', 'storage.type.function.arrow.ts'],
        settings: {
          foreground: syntaxColors.function
        }
      },
      {
        name: 'Decorator punctuations',
        scope: 'punctuation.decorator.ts',
        settings: {
          foreground: colors.AC1
        }
      },
      {
        name: 'Extra JS/TS keywords',
        scope: [
          'keyword.operator.expression.in.js',
          'keyword.operator.expression.in.ts',
          'keyword.operator.expression.infer.ts',
          'keyword.operator.expression.instanceof.js',
          'keyword.operator.expression.instanceof.ts',
          'keyword.operator.expression.is',
          'keyword.operator.expression.keyof.ts',
          'keyword.operator.expression.of.js',
          'keyword.operator.expression.of.ts',
          'keyword.operator.expression.typeof.ts'
        ],
        settings: {
          foreground: syntaxColors.operator
        }
      },

      //--------------------------------------------------------------------
      // MARKDOWN
      //--------------------------------------------------------------------

      {
        scope: ['meta.diff', 'meta.diff.header'],
        settings: {
          foreground: syntaxColors.comment
        }
      },
      {
        scope: [
          'meta.link.reference.def.restructuredtext',
          'string.other.link.description',
          'string.other.link.title'
        ],
        settings: {
          foreground: syntaxColors.constant
        }
      },
      {
        scope: [
          'heading.1.markdown punctuation.definition.heading.markdown',
          'heading.1.markdown',
          'heading.1.quarto punctuation.definition.heading.quarto',
          'heading.1.quarto',
          'markup.heading.atx.1.mdx',
          'markup.heading.atx.1.mdx punctuation.definition.heading.mdx',
          'markup.heading.setext.1.markdown',
          'markup.heading.heading-0.asciidoc'
        ],
        settings: {
          foreground: colors.AC1
        }
      },
      {
        scope: [
          'heading.2.markdown punctuation.definition.heading.markdown',
          'heading.2.markdown',
          'heading.2.quarto punctuation.definition.heading.quarto',
          'heading.2.quarto',
          'markup.heading.atx.2.mdx',
          'markup.heading.atx.2.mdx punctuation.definition.heading.mdx',
          'markup.heading.setext.2.markdown',
          'markup.heading.heading-1.asciidoc'
        ],
        settings: {
          foreground: colors.AC2
        }
      },
      {
        scope: [
          'heading.3.markdown punctuation.definition.heading.markdown',
          'heading.3.markdown',
          'heading.3.quarto punctuation.definition.heading.quarto',
          'heading.3.quarto',
          'markup.heading.atx.3.mdx',
          'markup.heading.atx.3.mdx punctuation.definition.heading.mdx',
          'markup.heading.heading-2.asciidoc'
        ],
        settings: {
          foreground: ansiColors.BrightYellow
        }
      },
      {
        scope: [
          'heading.4.markdown punctuation.definition.heading.markdown',
          'heading.4.markdown',
          'heading.4.quarto punctuation.definition.heading.quarto',
          'heading.4.quarto',
          'markup.heading.atx.4.mdx',
          'markup.heading.atx.4.mdx punctuation.definition.heading.mdx',
          'markup.heading.heading-3.asciidoc'
        ],
        settings: {
          foreground: ansiColors.BrightGreen
        }
      },
      {
        scope: [
          'heading.5.markdown punctuation.definition.heading.markdown',
          'heading.5.markdown',
          'heading.5.quarto punctuation.definition.heading.quarto',
          'heading.5.quarto',
          'markup.heading.atx.5.mdx',
          'markup.heading.atx.5.mdx punctuation.definition.heading.mdx',
          'markup.heading.heading-4.asciidoc'
        ],
        settings: {
          foreground: ansiColors.BrightCyan
        }
      },
      {
        scope: [
          'heading.6.markdown punctuation.definition.heading.markdown',
          'heading.6.markdown',
          'heading.6.quarto punctuation.definition.heading.quarto',
          'heading.6.quarto',
          'markup.heading.atx.6.mdx',
          'markup.heading.atx.6.mdx punctuation.definition.heading.mdx',
          'markup.heading.heading-5.asciidoc'
        ],
        settings: {
          foreground: ansiColors.BrightBlue
        }
      },
      {
        scope: 'markup.bold',
        settings: {
          foreground: colors.WARNING,
          fontStyle: 'bold'
        }
      },
      {
        scope: 'markup.italic',
        settings: {
          foreground: colors.ERROR,
          fontStyle: 'italic'
        }
      },
      {
        scope: 'markup.strikethrough',
        settings: {
          foreground: colors.FG2,
          fontStyle: 'strikethrough'
        }
      },
      {
        name: 'Markdown auto links',
        scope: ['punctuation.definition.link', 'markup.underline.link'],
        settings: {
          foreground: colors.INFO,
          fontStyle: 'underline'
        }
      },
      {
        name: 'Markdown links',
        scope: [
          'text.html.markdown punctuation.definition.link.title',
          'text.html.quarto punctuation.definition.link.title',
          'string.other.link.title.markdown',
          'string.other.link.title.quarto',
          'markup.link',
          // references like
          // > [1]: http://example.com "Example"
          'punctuation.definition.constant.markdown',
          'punctuation.definition.constant.quarto',
          'constant.other.reference.link.markdown',
          'constant.other.reference.link.quarto',
          'markup.substitution.attribute-reference'
        ],
        settings: {
          foreground: colors.INFO
        }
      },
      {
        name: 'Markdown code spans',
        scope: [
          'punctuation.definition.raw.markdown',
          'punctuation.definition.raw.quarto',
          'markup.inline.raw.string.markdown',
          'markup.inline.raw.string.quarto',
          'markup.raw.block.markdown',
          'markup.raw.block.quarto'
        ],
        settings: {
          foreground: colors.SUCCESS
        }
      },
      {
        name: 'Markdown triple backtick language identifier',
        scope: 'fenced_code.block.language',
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        name: 'Markdown triple backticks',
        scope: ['markup.fenced_code.block punctuation.definition', 'markup.raw support.asciidoc'],
        settings: {
          foreground: colors.FG2
        }
      },
      {
        name: 'Markdown quotes',
        scope: ['markup.quote', 'punctuation.definition.quote.begin'],
        settings: {
          foreground: syntaxColors.punctuation
        }
      },
      {
        name: 'Markdown separators',
        scope: 'meta.separator.markdown',
        settings: {
          foreground: syntaxColors.operator
        }
      },
      {
        name: 'Markdown list bullets',
        scope: [
          'punctuation.definition.list.begin.markdown',
          'punctuation.definition.list.begin.quarto',
          'markup.list.bullet'
        ],
        settings: {
          foreground: syntaxColors.unit
        }
      },
      {
        name: 'Quarto headings',
        scope: 'markup.heading.quarto',
        settings: {
          fontStyle: 'bold'
        }
      },

      //--------------------------------------------------------------------
      // NIX
      //--------------------------------------------------------------------

      {
        name: 'Nix attribute names',
        scope: [
          'entity.other.attribute-name.multipart.nix',
          'entity.other.attribute-name.single.nix'
        ],
        settings: {
          foreground: syntaxColors.attribute
        }
      },
      {
        name: 'Nix parameter names',
        scope: 'variable.parameter.name.nix',
        settings: {
          foreground: syntaxColors.parameter,
          fontStyle: ''
        }
      },
      {
        name: 'Nix interpolated parameter names',
        scope: 'meta.embedded variable.parameter.name.nix',
        settings: {
          foreground: syntaxColors.parameter,
          fontStyle: ''
        }
      },
      {
        name: 'Nix paths',
        scope: 'string.unquoted.path.nix',
        settings: {
          foreground: colors.FG2
        }
      },

      //--------------------------------------------------------------------
      // PHP
      //--------------------------------------------------------------------

      {
        name: 'PHP Attributes',
        scope: ['support.attribute.builtin'],
        settings: {
          foreground: syntaxColors.supportProperty
        }
      },
      {
        name: 'PHP Attributes',
        scope: ['meta.attribute.php'],
        settings: {
          foreground: syntaxColors.property
        }
      },
      {
        name: 'PHP Parameters (needed for the leading dollar sign)',
        scope: 'meta.function.parameters.php punctuation.definition.variable.php',
        settings: {
          foreground: syntaxColors.parameter
        }
      },
      {
        name: 'PHP Constants (null, __FILE__, etc.)',
        scope: 'constant.language.php',
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        name: 'PHP functions',
        scope: 'text.html.php support.function',
        settings: {
          foreground: syntaxColors.supportFunction
        }
      },
      {
        name: 'PHPdoc keywords',
        scope: 'keyword.other.phpdoc.php',
        settings: {
          foreground: syntaxColors.keyword
        }
      },

      //--------------------------------------------------------------------
      // PYTHON
      //--------------------------------------------------------------------

      {
        name: 'Python argument functions',
        scope: ['support.variable.magic.python'],
        settings: {
          foreground: syntaxColors.supportVariable
        }
      },
      {
        name: 'Python function calls',
        scope: ['meta.function-call.arguments.python'],
        settings: {
          foreground: syntaxColors.parameter
        }
      },
      {
        name: 'Python double underscore functions',
        scope: ['support.function.magic.python'],
        settings: {
          foreground: syntaxColors.supportFunction
        }
      },
      {
        name: 'Python `self` keyword',
        scope: [
          'variable.parameter.function.language.special.self.python',
          'variable.language.special.self.python'
        ],
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        scope: ['keyword.operator.logical.python'],
        settings: {
          foreground: syntaxColors.operator
        }
      },
      {
        name: 'python keyword flow/logical (for ... in)',
        scope: ['keyword.control.flow.python'],
        settings: {
          foreground: syntaxColors.controlFlow
        }
      },
      {
        name: 'python storage type',
        scope: 'storage.type.function.python',
        settings: {
          foreground: syntaxColors.function
        }
      },
      {
        name: 'python function support',
        scope: ['support.token.decorator.python', 'meta.function.decorator.identifier.python'],
        settings: {
          foreground: syntaxColors.supportFunction
        }
      },
      {
        name: 'python function calls',
        scope: ['meta.function-call.python'],
        settings: {
          foreground: syntaxColors.functionCall
        }
      },
      {
        name: 'python function decorators',
        scope: ['entity.name.function.decorator.python', 'punctuation.definition.decorator.python'],
        settings: {
          foreground: syntaxColors.function
        }
      },
      {
        name: 'python placeholder',
        scope: 'constant.character.format.placeholder.other.python',
        settings: {
          foreground: colors.FG2
        }
      },
      {
        name: 'Python exception & builtins such as exit()',
        scope: ['support.function.builtin.python'],
        settings: {
          foreground: syntaxColors.supportFunction
        }
      },
      {
        name: 'Python exception',
        scope: ['support.type.exception.python'],
        settings: {
          foreground: syntaxColors.supportMethod
        }
      },
      {
        name: 'entity.name.type',
        scope: ['support.type.python'],
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        name: 'python constants (True/False)',
        scope: 'constant.language.python',
        settings: {
          foreground: syntaxColors.constant
        }
      },
      {
        name: 'Arguments accessed later in the function body',
        scope: ['meta.indexed-name.python', 'meta.item-access.python'],
        settings: {
          foreground: syntaxColors.attribute
        }
      },
      {
        name: 'Python f-strings/binary/unicode storage types',
        scope: 'storage.type.string.python',
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        name: 'Python type hints',
        scope: 'meta.function.parameters.python',
        settings: {
          foreground: syntaxColors.parameter
        }
      },

      //--------------------------------------------------------------------
      // RUST
      //--------------------------------------------------------------------

      {
        name: 'Rust attribute',
        scope: [
          'meta.annotation.rust',
          'meta.annotation.rust punctuation',
          'meta.attribute.rust',
          'meta.attribute.rust string.quoted.single.char.rust',
          'meta.attribute.rust string.quoted.double.rust',
          'punctuation.definition.attribute.rust'
        ],
        settings: {
          foreground: syntaxColors.attribute
        }
      },
      {
        name: 'Rust keyword',
        scope: [
          'entity.name.function.macro.rules.rust',
          'storage.type.module.rust',
          'storage.modifier.rust',
          'storage.type.struct.rust',
          'storage.type.enum.rust',
          'storage.type.trait.rust',
          'storage.type.union.rust',
          'storage.type.impl.rust',
          'storage.type.rust',
          'storage.type.function.rust',
          'storage.type.type.rust'
        ],
        settings: {
          foreground: syntaxColors.storage,
          fontStyle: ''
        }
      },
      {
        name: 'Rust u/i32, u/i64, etc.',
        scope: 'entity.name.type.numeric.rust',
        settings: {
          foreground: syntaxColors.type,
          fontStyle: ''
        }
      },
      {
        name: 'Rust generic',
        scope: 'meta.generic.rust',
        settings: {
          foreground: syntaxColors.typeParameter
        }
      },
      {
        name: 'Rust impl',
        scope: 'entity.name.impl.rust',
        settings: {
          foreground: syntaxColors.supportMethod
        }
      },
      {
        name: 'Rust module',
        scope: 'entity.name.module.rust',
        settings: {
          foreground: syntaxColors.supportVariable
        }
      },
      {
        name: 'Rust trait',
        scope: 'entity.name.trait.rust',
        settings: {
          foreground: syntaxColors.type
        }
      },
      {
        name: 'Rust struct',
        scope: 'storage.type.source.rust',
        settings: {
          foreground: syntaxColors.class
        }
      },
      {
        name: 'Rust union',
        scope: 'entity.name.union.rust',
        settings: {
          foreground: syntaxColors.operator
        }
      },
      {
        name: 'Rust enum member',
        scope: 'meta.enum.rust storage.type.source.rust',
        settings: {
          foreground: syntaxColors.supportVariable
        }
      },
      {
        name: 'Rust macro',
        scope: [
          'support.macro.rust',
          'meta.macro.rust support.function.rust',
          'entity.name.function.macro.rust'
        ],
        settings: {
          foreground: syntaxColors.supportFunction
        }
      },
      {
        name: 'Rust lifetime',
        scope: ['storage.modifier.lifetime.rust', 'entity.name.type.lifetime'],
        settings: {
          foreground: syntaxColors.modifier
        }
      },
      {
        name: 'Rust string formatting',
        scope: 'string.quoted.double.rust constant.other.placeholder.rust',
        settings: {
          foreground: colors.FG2
        }
      },
      {
        name: 'Rust return type generic',
        scope: 'meta.function.return-type.rust meta.generic.rust storage.type.rust',
        settings: {
          foreground: syntaxColors.typeParameter
        }
      },
      {
        name: 'Rust function',
        scope: 'entity.name.function.macro.rules.rust',
        settings: {
          foreground: syntaxColors.function,
          fontStyle: ''
        }
      },
      {
        name: 'Rust functions',
        scope: 'meta.function.call.rust',
        settings: {
          foreground: syntaxColors.functionCall
        }
      },
      {
        name: 'Rust angle brackets',
        scope: 'punctuation.brackets.angle.rust',
        settings: {
          foreground: syntaxColors.operator
        }
      },
      {
        name: 'Rust constants',
        scope: 'constant.other.caps.rust',
        settings: {
          foreground: syntaxColors.constant
        }
      },
      {
        name: 'Rust function parameters',
        scope: ['meta.function.definition.rust variable.other.rust'],
        settings: {
          foreground: syntaxColors.parameter
        }
      },
      {
        name: 'Rust closure variables',
        scope: 'meta.function.call.rust variable.other.rust',
        settings: {
          foreground: syntaxColors.variableReadonly
        }
      },
      {
        name: 'Rust self',
        scope: 'variable.language.self.rust',
        settings: {
          foreground: syntaxColors.supportVariable
        }
      },
      {
        name: 'Rust metavariable names',
        scope: [
          'variable.other.metavariable.name.rust',
          'meta.macro.metavariable.rust keyword.operator.macro.dollar.rust'
        ],
        settings: {
          foreground: syntaxColors.variableDeclaration
        }
      },

      //--------------------------------------------------------------------
      // SHELL
      //--------------------------------------------------------------------

      {
        name: 'Shell shebang',
        scope: [
          'comment.line.shebang',
          'comment.line.shebang punctuation.definition.comment',
          'comment.line.shebang',
          'punctuation.definition.comment.shebang.shell',
          'meta.shebang.shell'
        ],
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        name: 'Shell shebang command',
        scope: 'comment.line.shebang constant.language',
        settings: {
          foreground: syntaxColors.language
        }
      },
      {
        name: 'Shell interpolated command',
        scope: [
          'meta.function-call.arguments.shell punctuation.definition.variable.shell',
          'meta.function-call.arguments.shell punctuation.section.interpolation',
          'meta.function-call.arguments.shell punctuation.definition.variable.shell',
          'meta.function-call.arguments.shell punctuation.section.interpolation'
        ],
        settings: {
          foreground: syntaxColors.parameter
        }
      },
      {
        name: 'Shell interpolated command variable',
        scope: 'meta.string meta.interpolation.parameter.shell variable.other.readwrite',
        settings: {
          foreground: syntaxColors.variableDeclaration
        }
      },
      {
        scope: [
          'source.shell punctuation.section.interpolation',
          'punctuation.definition.evaluation.backticks.shell'
        ],
        settings: {
          foreground: syntaxColors.function
        }
      },
      {
        name: 'Shell EOF',
        scope: 'entity.name.tag.heredoc.shell',
        settings: {
          foreground: colors.AC2
        }
      },
      {
        name: 'Shell quoted variable',
        scope: 'string.quoted.double.shell variable.other.normal.shell',
        settings: {
          foreground: syntaxColors.variableDeclaration
        }
      }
    ],
    semanticTokenColors: {
      namespace: syntaxColors.class, //class
      support: syntaxColors.support,
      type: syntaxColors.type, //type
      'type.declaration': syntaxColors.type, //type
      'type.defaultLibrary': syntaxColors.language, //typeParameter
      interface: syntaxColors.type, //type
      class: syntaxColors.class, //class
      'class.declaration': syntaxColors.class, //class
      'class.defaultLibrary': syntaxColors.language, //class
      enum: syntaxColors.class, //class,
      enumMember: colors.FG2, //FG2
      struct: syntaxColors.class, //class,
      property: syntaxColors.property, //property
      'property.readonly': syntaxColors.variableProperty, //property
      'property.declaration': syntaxColors.propertyDeclaration, //typeParameter
      'property.defaultLibrary': syntaxColors.supportProperty, //property
      parameter: syntaxColors.parameter, //variableProperty
      function: syntaxColors.functionCall, //functionCall
      'function.declaration': syntaxColors.function, //function
      'function.defaultLibrary': syntaxColors.supportFunction, //function
      method: syntaxColors.methodCall, //functionCall
      'method.declaration': syntaxColors.method, //function
      'method.defaultLibrary': syntaxColors.supportMethod, //function
      variable: syntaxColors.variable, //variable
      'variable.declaration': syntaxColors.variableDeclaration, //variableDeclaration
      'variable.readonly': syntaxColors.variableReadonly, //variable
      'variable.readonly.defaultLibrary': syntaxColors.supportVariable, //variableDeclaration
      'variable.defaultLibrary': syntaxColors.supportVariable, //variable
      'variable.other': syntaxColors.other, //variable
      'variable.other.readwrite': syntaxColors.variable, //variable
      'variable.other.constant': syntaxColors.variableDeclaration, //FG2
      'variable.other.readonly': syntaxColors.variableReadonly, //variable
      decorator: colors.AC1, //AC1
      event: syntaxColors.property, // property
      comment: syntaxColors.comment, //comment
      string: colors.FG1, //FG1
      keyword: syntaxColors.keyword, //keyword
      number: syntaxColors.constant, //constant
      operator: syntaxColors.operator, //operator
      selfKeyword: syntaxColors.keyword, //keyword
      boolean: syntaxColors.constant, //constant
      // Python types
      'class:python': syntaxColors.class, //AC1
      'class.builtin:python': syntaxColors.language, //AC2
      'variable.typeHint:python': syntaxColors.variableProperty, //variable
      'function.decorator:python': colors.AC1, //AC1
      'variable.readonly:javascript': syntaxColors.variableDeclaration, //variable
      'variable.readonly:typescript': syntaxColors.variableDeclaration, //variable
      'property.readonly:javascript': syntaxColors.property, //property
      'property.readonly:typescript': syntaxColors.property, //property
      'variable.readonly:javascriptreact': syntaxColors.variableDeclaration, //variable
      'variable.readonly:typescriptreact': syntaxColors.variableDeclaration, //variable
      'property.readonly:javascriptreact': syntaxColors.property, //property
      'property.readonly:typescriptreact': syntaxColors.property, //property
      // Scala, also dealing with constants
      'variable.readonly:scala': syntaxColors.variableDeclaration, //variable
      // Golang builtin readonly defaultLibrary (nil)
      'type.defaultLibrary:go': syntaxColors.type, //AC2
      'variable.readonly.defaultLibrary:go': syntaxColors.variableDeclaration, //AC1
      // TOML syntax
      tomlArrayKey: colors.AC2,
      tomlTableKey: colors.AC2,
      // Rust attributes
      'builtinAttribute.attribute.library:rust': syntaxColors.language,
      'generic.attribute:rust': syntaxColors.attribute,
      // Nix
      'constant.builtin.readonly:nix': syntaxColors.supportVariable,
      // Typst
      heading: colors.AC1,
      'text.emph': { foreground: colors.FG1, fontStyle: 'italic' },
      'text.strong': { foreground: colors.FG1, fontStyle: 'bold' },
      'text.math': colors.FG2
      // pol: syntaxColors.variable,
    }
  };

  return { themeJSON: JSON.stringify(theme), themeObject: theme };
}
