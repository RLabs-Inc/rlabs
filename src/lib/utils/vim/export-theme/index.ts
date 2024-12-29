import type { VimHighlightGroup } from '$lib/types/vim/theme';
import { getGeneralHighlightGroups } from './base/general';
import { getMarkupHighlightGroups } from './base/markup';
import { getPunctuationHighlightGroups } from './base/punctuation';

// Syntax
import { getCommentHighlightGroups } from './syntax/comments';
import { getConstantHighlightGroups } from './syntax/constants';
import { getEntityHighlightGroups } from './syntax/entities';
import { getFunctionHighlightGroups } from './syntax/functions';
import { getKeywordHighlightGroups } from './syntax/keywords';
import { getStringHighlightGroups } from './syntax/strings';
import { getStorageHighlightGroups } from './syntax/storage';
import { getSupportHighlightGroups } from './syntax/support';
import { getTypeHighlightGroups } from './syntax/types-classes';
import { getVariableHighlightGroups } from './syntax/variables';

// Languages
import { getCppHighlightGroups } from './languages/cpp';
import { getCsharpHighlightGroups } from './languages/csharp';
import { getCssHighlightGroups } from './languages/css';
import { getDataHighlightGroups } from './languages/data';
import { getDiffHighlightGroups } from './languages/diff';
import { getEnvHighlightGroups } from './languages/env';
import { getGoHighlightGroups } from './languages/go';
import { getGraphqlHighlightGroups } from './languages/graphql';
import { getHtmlHighlightGroups } from './languages/html';
import { getIniHighlightGroups } from './languages/ini';
import { getJavaHighlightGroups } from './languages/java';
import { getJavascriptHighlightGroups } from './languages/javascript';
import { getMarkdownHighlightGroups } from './languages/markdown';
import { getNixHighlightGroups } from './languages/nix';
import { getPhpHighlightGroups } from './languages/php';
import { getPythonHighlightGroups } from './languages/python';
import { getRegexpHighlightGroups } from './languages/regexp';
import { getRustHighlightGroups } from './languages/rust';
import { getShellHighlightGroups } from './languages/shell';
import { getSvelteHighlightGroups } from './languages/svelte';

export function getAllHighlightGroups(colors: VimColors): VimHighlightGroup[] {
  return [
    // Base
    ...getGeneralHighlightGroups(colors),
    ...getMarkupHighlightGroups(colors),
    ...getPunctuationHighlightGroups(colors),

    // Syntax
    ...getCommentHighlightGroups(colors),
    ...getConstantHighlightGroups(colors),
    ...getEntityHighlightGroups(colors),
    ...getFunctionHighlightGroups(colors),
    ...getKeywordHighlightGroups(colors),
    ...getStorageHighlightGroups(colors),
    ...getStringHighlightGroups(colors),
    ...getSupportHighlightGroups(colors),
    ...getTypeHighlightGroups(colors),
    ...getVariableHighlightGroups(colors),

    // Languages
    ...getCppHighlightGroups(colors),
    ...getCsharpHighlightGroups(colors),
    ...getCssHighlightGroups(colors),
    ...getDataHighlightGroups(colors),
    ...getDiffHighlightGroups(colors),
    ...getEnvHighlightGroups(colors),
    ...getGoHighlightGroups(colors),
    ...getGraphqlHighlightGroups(colors),
    ...getHtmlHighlightGroups(colors),
    ...getIniHighlightGroups(colors),
    ...getJavaHighlightGroups(colors),
    ...getJavascriptHighlightGroups(colors),
    ...getMarkdownHighlightGroups(colors),
    ...getNixHighlightGroups(colors),
    ...getPhpHighlightGroups(colors),
    ...getPythonHighlightGroups(colors),
    ...getRegexpHighlightGroups(colors),
    ...getRustHighlightGroups(colors),
    ...getShellHighlightGroups(colors),
    ...getSvelteHighlightGroups(colors)
  ];
}
