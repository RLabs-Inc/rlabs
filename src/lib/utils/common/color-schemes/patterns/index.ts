/**
 * Sacred Geometry Color Patterns
 * Export all pattern functions and utilities
 */

// Import all pattern functions
import * as patterns from './newPatterns';
import * as patterns1 from './newPatterns1';
import * as patterns2 from './newPatterns2';
import * as patterns3 from './newPatterns3';
import * as patterns4 from './newPatterns4';
import * as patterns5 from './newPatterns5';
import * as patterns6 from './newPatterns6';
import * as patterns7 from './newPatterns7';
import * as patterns8 from './newPatterns8';
import * as patterns9 from './newPatterns9';
import * as patterns10 from './newPatterns10';
import * as patterns11 from './newPatterns11';
import * as patterns12 from './newPatterns12';
import * as patterns13 from './newPatterns13';
import * as patterns14 from './newPatterns14';
import * as patterns15 from './newPatterns15';
import * as patterns16 from './newPatterns16';
import * as patterns17 from './newPatterns17';
import * as patterns18 from './newPatterns18';
import * as patterns19 from './newPatterns19';
import * as patterns20 from './newPatterns20';
import * as patterns21 from './newPatterns21';
import * as patterns22 from './newPatterns22';
import * as patterns23 from './newPatterns23';

export const schemeFunctions = {
  ...patterns,
  ...patterns1,
  ...patterns2,
  ...patterns3,
  ...patterns4,
  ...patterns5,
  ...patterns6,
  ...patterns7,
  ...patterns8,
  ...patterns9,
  ...patterns10,
  ...patterns11,
  ...patterns12,
  ...patterns13,
  ...patterns14,
  ...patterns15,
  ...patterns16,
  ...patterns17,
  ...patterns18,
  ...patterns19,
  ...patterns20,
  ...patterns21,
  ...patterns22,
  ...patterns23
};

export { ColorSchemes, type ColorScheme } from '$lib/types/sacred-geometry-schemes';

export { generateSchemeHues } from '$lib/utils/common/color-schemes/index.svelte';

// Type for pattern functions
type SchemeFunction = (baseHue: number) => number[];

// Export pattern function getter
export function getPatternFunction(name: string): SchemeFunction | undefined {
  const functionName = `get${name}` as keyof typeof patterns;
  return schemeFunctions[functionName] as SchemeFunction | undefined;
}
