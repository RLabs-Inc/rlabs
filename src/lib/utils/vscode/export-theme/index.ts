import type { TokenColor, TokenColors } from '$lib/types/theme';
// Base
import { getGeneralTokenColors } from './base/general';
import { getMarkupTokenColors } from './base/markup';
import { getPunctuationTokenColors } from './base/punctuation';

// Syntax
import { getCommentTokenColors } from './syntax/comments';
import { getConstantTokenColors } from './syntax/constants';
import { getEntityTokenColors } from './syntax/entities';
import { getFunctionSyntaxTokens } from './syntax/functions';
import { getKeywordTokenColors } from './syntax/keywords';
import { getStringTokenColors } from './syntax/strings';
import { getStorageTokenColors } from './syntax/storage';
import { getSupportTokenColors } from './syntax/support';
import { getTypeSyntaxTokens } from './syntax/types-classes';
import { getVariableSyntaxTokens } from './syntax/variables';

// Languages
import { getCppTokenColors } from './languages/cpp';
import { getCsharpTokenColors } from './languages/csharp';
import { getCssTokenColors } from './languages/css';
import { getDataTokenColors } from './languages/data';
import { getDiffTokenColors } from './languages/diff';
import { getEnvTokenColors } from './languages/env';
import { getGoTokenColors } from './languages/go';
import { getGraphqlTokenColors } from './languages/graphql';
import { getHtmlTokenColors } from './languages/html';
import { getIniTokens } from './languages/ini';
import { getJavaTokenColors } from './languages/java';
import { getJavascriptTokenColors } from './languages/javascript';
import { getMarkdownTokenColors } from './languages/markdown';
import { getNixTokenColors } from './languages/nix';
import { getPhpTokenColors } from './languages/php';
import { getPythonTokenColors } from './languages/python';
import { getRegexpTokenColors } from './languages/regexp';
import { getRustTokenColors } from './languages/rust';
import { getShellTokenColors } from './languages/shell';

export function getAllTokenColors(colors: TokenColors): TokenColor[] {
  return [
    // Base
    ...getGeneralTokenColors(colors),
    ...getMarkupTokenColors(colors),
    ...getPunctuationTokenColors(colors),

    // Syntax
    ...getCommentTokenColors(colors),
    ...getConstantTokenColors(colors),
    ...getEntityTokenColors(colors),
    ...getFunctionSyntaxTokens(colors),
    ...getKeywordTokenColors(colors),
    ...getStorageTokenColors(colors),
    ...getStringTokenColors(colors),
    ...getSupportTokenColors(colors),
    ...getTypeSyntaxTokens(colors),
    ...getVariableSyntaxTokens(colors),

    // Languages
    ...getCppTokenColors(colors),
    ...getCsharpTokenColors(colors),
    ...getCssTokenColors(colors),
    ...getDataTokenColors(colors),
    ...getDiffTokenColors(colors),
    ...getEnvTokenColors(colors),
    ...getGoTokenColors(colors),
    ...getGraphqlTokenColors(colors),
    ...getHtmlTokenColors(colors),
    ...getIniTokens(colors),
    ...getJavaTokenColors(colors),
    ...getJavascriptTokenColors(colors),
    ...getMarkdownTokenColors(colors),
    ...getNixTokenColors(colors),
    ...getPhpTokenColors(colors),
    ...getPythonTokenColors(colors),
    ...getRegexpTokenColors(colors),
    ...getRustTokenColors(colors),
    ...getShellTokenColors(colors)
  ];
}
