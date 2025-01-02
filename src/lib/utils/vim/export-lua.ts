import type { Theme } from '$lib/types/vscode/theme';
import { wcagLuminance, formatHex, parseHex } from 'culori';

/**
 * Convert any color format to 6-digit hex
 */
function toHex6(color: string): string {
  return formatHex(parseHex(color));
}

/**
 * Replace color placeholders in template files with actual color values
 */
export function replaceColorPlaceholders(content: string, theme: Theme): string {
  // Helper function to get appropriate foreground color based on background luminance
  const getContrastForeground = (bg: string, color: string) => {
    const bgLum = wcagLuminance(theme.uiColors.BG1);
    const colorLum = wcagLuminance(color);

    if (bgLum < 0.5) {
      return colorLum < 0.5 ? theme.uiColors.FG1 : theme.uiColors.FG3;
    } else {
      return colorLum < 0.5 ? theme.uiColors.FG3 : theme.uiColors.FG1;
    }
  };

  // Helper function to get foreground color for specific backgrounds
  const getForegroundFor = (bgColor: string) => getContrastForeground(theme.uiColors.BG1, bgColor);

  // Replace UI colors
  content = content.replace(/\${BG1}/g, toHex6(theme.uiColors.BG1));
  content = content.replace(/\${BG2}/g, toHex6(theme.uiColors.BG2));
  content = content.replace(/\${BG3}/g, toHex6(theme.uiColors.BG3));
  content = content.replace(/\${FG1}/g, toHex6(theme.uiColors.FG1));
  content = content.replace(/\${FG2}/g, toHex6(theme.uiColors.FG2));
  content = content.replace(/\${FG3}/g, toHex6(theme.uiColors.FG3));
  content = content.replace(/\${BORDER}/g, toHex6(theme.uiColors.BORDER));
  content = content.replace(/\${AC1}/g, toHex6(theme.uiColors.AC1));
  content = content.replace(/\${AC2}/g, toHex6(theme.uiColors.AC2));

  // Replace semantic colors
  content = content.replace(/\${INFO}/g, toHex6(theme.uiColors.INFO));
  content = content.replace(/\${ERROR}/g, toHex6(theme.uiColors.ERROR));
  content = content.replace(/\${WARNING}/g, toHex6(theme.uiColors.WARNING));
  content = content.replace(/\${SUCCESS}/g, toHex6(theme.uiColors.SUCCESS));

  // Replace special colors
  content = content.replace(/\${selection}/g, toHex6(theme.uiColors.selection));
  content = content.replace(/\${lineHighlight}/g, toHex6(theme.uiColors.lineHighlight));
  content = content.replace(/\${findMatch}/g, toHex6(theme.uiColors.findMatch));

  // Replace foreground colors for backgrounds
  content = content.replace(/\${AC1_FG}/g, toHex6(getForegroundFor(theme.uiColors.AC1)));
  content = content.replace(/\${AC2_FG}/g, toHex6(getForegroundFor(theme.uiColors.AC2)));
  content = content.replace(/\${INFO_FG}/g, toHex6(getForegroundFor(theme.uiColors.INFO)));
  content = content.replace(/\${ERROR_FG}/g, toHex6(getForegroundFor(theme.uiColors.ERROR)));
  content = content.replace(/\${WARNING_FG}/g, toHex6(getForegroundFor(theme.uiColors.WARNING)));
  content = content.replace(/\${SUCCESS_FG}/g, toHex6(getForegroundFor(theme.uiColors.SUCCESS)));
  content = content.replace(
    /\${SELECTION_FG}/g,
    toHex6(getForegroundFor(theme.uiColors.selection))
  );
  content = content.replace(
    /\${FIND_MATCH_FG}/g,
    toHex6(getForegroundFor(theme.uiColors.findMatch))
  );
  content = content.replace(
    /\${LINE_HIGHLIGHT_FG}/g,
    toHex6(getForegroundFor(theme.uiColors.lineHighlight))
  );

  // Replace syntax colors
  content = content.replace(/\${keyword}/g, toHex6(theme.syntaxColors.keyword));
  content = content.replace(/\${comment}/g, toHex6(theme.syntaxColors.comment));
  content = content.replace(/\${function}/g, toHex6(theme.syntaxColors.function));
  content = content.replace(/\${functionCall}/g, toHex6(theme.syntaxColors.functionCall));
  content = content.replace(/\${method}/g, toHex6(theme.syntaxColors.method));
  content = content.replace(/\${methodCall}/g, toHex6(theme.syntaxColors.methodCall));
  content = content.replace(/\${variable}/g, toHex6(theme.syntaxColors.variable));
  content = content.replace(/\${variableReadonly}/g, toHex6(theme.syntaxColors.variableReadonly));
  content = content.replace(
    /\${variableDeclaration}/g,
    toHex6(theme.syntaxColors.variableDeclaration)
  );
  content = content.replace(/\${variableProperty}/g, toHex6(theme.syntaxColors.variableProperty));
  content = content.replace(/\${type}/g, toHex6(theme.syntaxColors.type));
  content = content.replace(/\${typeParameter}/g, toHex6(theme.syntaxColors.typeParameter));
  content = content.replace(/\${constant}/g, toHex6(theme.syntaxColors.constant));
  content = content.replace(/\${class}/g, toHex6(theme.syntaxColors.class));
  content = content.replace(/\${parameter}/g, toHex6(theme.syntaxColors.parameter));
  content = content.replace(/\${property}/g, toHex6(theme.syntaxColors.property));
  content = content.replace(
    /\${propertyDeclaration}/g,
    toHex6(theme.syntaxColors.propertyDeclaration)
  );
  content = content.replace(/\${operator}/g, toHex6(theme.syntaxColors.operator));
  content = content.replace(/\${storage}/g, toHex6(theme.syntaxColors.storage));
  content = content.replace(/\${other}/g, toHex6(theme.syntaxColors.other));
  content = content.replace(/\${language}/g, toHex6(theme.syntaxColors.language));
  content = content.replace(/\${supportVariable}/g, toHex6(theme.syntaxColors.supportVariable));
  content = content.replace(/\${supportFunction}/g, toHex6(theme.syntaxColors.supportFunction));
  content = content.replace(/\${supportMethod}/g, toHex6(theme.syntaxColors.supportMethod));
  content = content.replace(/\${supportProperty}/g, toHex6(theme.syntaxColors.supportProperty));
  content = content.replace(/\${punctuation}/g, toHex6(theme.syntaxColors.punctuation));
  content = content.replace(/\${punctuationQuote}/g, toHex6(theme.syntaxColors.punctuationQuote));
  content = content.replace(/\${punctuationBrace}/g, toHex6(theme.syntaxColors.punctuationBrace));
  content = content.replace(/\${punctuationComma}/g, toHex6(theme.syntaxColors.punctuationComma));
  content = content.replace(/\${selector}/g, toHex6(theme.syntaxColors.selector));
  content = content.replace(/\${support}/g, toHex6(theme.syntaxColors.support));
  content = content.replace(/\${modifier}/g, toHex6(theme.syntaxColors.modifier));
  content = content.replace(/\${control}/g, toHex6(theme.syntaxColors.control));
  content = content.replace(/\${controlFlow}/g, toHex6(theme.syntaxColors.controlFlow));
  content = content.replace(/\${controlImport}/g, toHex6(theme.syntaxColors.controlImport));
  content = content.replace(/\${tag}/g, toHex6(theme.syntaxColors.tag));
  content = content.replace(/\${tagPunctuation}/g, toHex6(theme.syntaxColors.tagPunctuation));
  content = content.replace(/\${attribute}/g, toHex6(theme.syntaxColors.attribute));
  content = content.replace(/\${unit}/g, toHex6(theme.syntaxColors.unit));
  content = content.replace(/\${datetime}/g, toHex6(theme.syntaxColors.datetime));

  // Replace ANSI colors
  content = content.replace(/\${Black}/g, toHex6(theme.ansiColors.Black));
  content = content.replace(/\${Red}/g, toHex6(theme.ansiColors.Red));
  content = content.replace(/\${Green}/g, toHex6(theme.ansiColors.Green));
  content = content.replace(/\${Yellow}/g, toHex6(theme.ansiColors.Yellow));
  content = content.replace(/\${Blue}/g, toHex6(theme.ansiColors.Blue));
  content = content.replace(/\${Magenta}/g, toHex6(theme.ansiColors.Magenta));
  content = content.replace(/\${Cyan}/g, toHex6(theme.ansiColors.Cyan));
  content = content.replace(/\${White}/g, toHex6(theme.ansiColors.White));
  content = content.replace(/\${BrightBlack}/g, toHex6(theme.ansiColors.BrightBlack));
  content = content.replace(/\${BrightRed}/g, toHex6(theme.ansiColors.BrightRed));
  content = content.replace(/\${BrightGreen}/g, toHex6(theme.ansiColors.BrightGreen));
  content = content.replace(/\${BrightYellow}/g, toHex6(theme.ansiColors.BrightYellow));
  content = content.replace(/\${BrightBlue}/g, toHex6(theme.ansiColors.BrightBlue));
  content = content.replace(/\${BrightMagenta}/g, toHex6(theme.ansiColors.BrightMagenta));
  content = content.replace(/\${BrightCyan}/g, toHex6(theme.ansiColors.BrightCyan));
  content = content.replace(/\${BrightWhite}/g, toHex6(theme.ansiColors.BrightWhite));

  return content;
}
