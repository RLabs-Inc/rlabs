import type { SemanticTokenColor, TokenColors } from '$lib/types/theme';
import { getGenericSemanticTokens } from './generic';
import { getClassSemanticTokens } from './classes';
import { getFunctionSemanticTokens } from './functions';
import { getTypeSemanticTokens } from './types';
import { getVariableSemanticTokens } from './variables';
import { getGoSemanticTokens } from './go-semantic';
import { getJavaScriptSemanticTokens } from './javascript-semantic';
import { getNixSemanticTokens } from './nix-semantic';
import { getPythonSemanticTokens } from './python-semantic';
import { getRustSemanticTokens } from './rust-semantic';
import { getScalaSemanticTokens } from './scala-semantic';
import { getTomlSemanticTokens } from './toml-semantic';
import { getTypstSemanticTokens } from './typst-semantic';

export function getSemanticTokenColors(tokenColors: TokenColors): SemanticTokenColor {
  return Object.assign(
    {},
    getGenericSemanticTokens(tokenColors),
    getClassSemanticTokens(tokenColors),
    getFunctionSemanticTokens(tokenColors),
    getTypeSemanticTokens(tokenColors),
    getVariableSemanticTokens(tokenColors),
    getGoSemanticTokens(tokenColors),
    getJavaScriptSemanticTokens(tokenColors),
    getNixSemanticTokens(tokenColors),
    getPythonSemanticTokens(tokenColors),
    getRustSemanticTokens(tokenColors),
    getScalaSemanticTokens(tokenColors),
    getTomlSemanticTokens(tokenColors),
    getTypstSemanticTokens(tokenColors)
  );
}
