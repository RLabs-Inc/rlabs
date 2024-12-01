/**
 * Sacred Geometry Color Patterns
 * Export all pattern functions and utilities
 */

import * as patterns from './newColorUtils';
export { ColorSchemes, type ColorScheme } from '$lib/types/sacred-geometry-schemes';

// Export all pattern functions
export {
  // Main color scheme generation
  generateSchemeHues,

  // Traditional pattern functions
  getSriYantraAngles,
  getKabbalahTreeOfLife,
  getTorus,
  getMandelbrotSet,
  getSierpinskiCarpet,
  getKochSnowflake,
  getCelticKnot,
  getLabirinth,
  getYinYang,
  getStarTetrahedron,
  getHamsaLengths,
  getEnneagramAngles,
  getHexagramAngles,
  getChakraSymbols,
  getSpiralDynamics,
  getDoubleTorus,
  getRosettePattern,
  getNestedPolygons
} from './newColorUtils';

// Type for pattern functions
type PatternFunction = (baseHue: number) => number[];

// Export pattern function getter
export function getPatternFunction(name: string): PatternFunction | undefined {
  const functionName = `get${name}` as keyof typeof patterns;
  return patterns[functionName] as PatternFunction | undefined;
}
