import {
  wcagLuminance,
  wcagContrast,
  filterBrightness,
  filterSaturate,
  parseHex,
  formatHex8,
  hsl
} from 'culori';

import { ColorSchemes } from '$lib/types/color';

export const brightenColor = filterBrightness(1.2, 'rgb');
export const darkenColor = filterBrightness(0.8, 'rgb');
export const saturateColor = filterSaturate(1.3, 'rgb');
export const desaturateColor = filterSaturate(0.9, 'rgb');

export function brighten(color: string): string {
  return formatHex8(brightenColor(parseHex(color)));
}

export function darken(color: string): string {
  return formatHex8(darkenColor(parseHex(color)));
}

export function saturate(color: string): string {
  return formatHex8(saturateColor(parseHex(color)));
}

export function desaturate(color: string): string {
  return formatHex8(desaturateColor(parseHex(color)));
}

export function darkenSaturate(color: string): string {
  return formatHex8(darkenColor(saturateColor(parseHex(color))));
}
export function brightenDesaturate(color: string): string {
  return formatHex8(brightenColor(desaturateColor(parseHex(color))));
}

export function isDark(color: string): boolean {
  return wcagLuminance(color) < 0.5;
}

export function calculateContrast(color1: string, color2: string): number {
  return wcagContrast(color1, color2);
}

export function getAlphaColor(color: string, alpha: string): string {
  if (color.length > 7) {
    return color.slice(0, -2) + alpha;
  } else {
    return color + alpha;
  }
}

export function generateSchemeHues(baseHue: number, scheme: ColorSchemes): number[] {
  let result: number[];
  const goldenRatio = 0.618033988749895;
  // const fibSequence = [1, 1, 2, 3, 5, 8, 13, 21]
  const fibSequence = [8, 13, 21, 34];
  const goldenAngle = 137.5077640500378; // (3 - Math.sqrt(5)) * 180
  const metallicRatios = [1.618, 2.414, 3.303, 4.236]; // Golden, Silver, Bronze, Copper
  const piConvergents = [22 / 7, 333 / 106, 355 / 113, 103993 / 33102];
  const rho = 0.4656;
  const sigma = 0.6823;
  const fareySequence = [0, 1 / 3, 1 / 2, 2 / 3, 1];
  const nobleNumbers = [1.618, 2.414, 3.303, 4.236, 5.192];

  const goldenTriangleAngle = Math.atan(1 / goldenRatio) * (180 / Math.PI);

  switch (scheme) {
    case ColorSchemes.Monochromatic:
      result = [baseHue, baseHue, baseHue, baseHue];
      break;
    case ColorSchemes.Analogous:
      result = [
        baseHue,
        Math.abs(baseHue + 30) % 360,
        Math.abs(baseHue + 60) % 360,
        Math.abs(baseHue - 30 + 360) % 360,
        Math.abs(baseHue - 60 + 360) % 360
      ];
      break;
    case ColorSchemes.Complementary:
      result = [baseHue, Math.abs(baseHue + 180) % 360];
      break;
    case ColorSchemes.SplitComplementary:
      result = [baseHue, Math.abs(baseHue + 150) % 360, Math.abs(baseHue + 210) % 360];
      break;
    case ColorSchemes.Triadic:
      result = [baseHue, Math.abs(baseHue + 60) % 360, Math.abs(baseHue + 120) % 360];
      break;
    case ColorSchemes.Tetradic:
      result = [
        baseHue,
        Math.abs(baseHue + 90) % 360,
        Math.abs(baseHue + 180) % 360,
        Math.abs(baseHue + 270) % 360
      ];
      break;
    case ColorSchemes.GoldenRatio:
      result = [
        baseHue,
        // Math.abs(baseHue + 360 * goldenRatio) % 360,
        Math.abs(baseHue + 360 * goldenRatio * 2) % 360,
        // Math.abs(baseHue + 360 * goldenRatio * 3) % 360,
        // Math.abs(baseHue + 360 * goldenRatio * 4) % 360,
        Math.abs(baseHue + 360 * goldenRatio * 5) % 360,
        // Math.abs(baseHue + 360 * goldenRatio * 6) % 360,
        Math.abs(baseHue + 360 * goldenRatio * 7) % 360
      ];
      break;
    case ColorSchemes.GoldenRatio3:
      result = [
        baseHue,
        // Math.abs(baseHue + 360 * goldenRatio) % 360,
        // Math.abs(baseHue + 360 * goldenRatio * 2) % 360,
        Math.abs(baseHue + 360 * goldenRatio * 3) % 360,
        // Math.abs(baseHue + 360 * goldenRatio * 4) % 360,
        // Math.abs(baseHue + 360 * goldenRatio * 5) % 360,
        Math.abs(baseHue + 360 * goldenRatio * 6) % 360,
        // Math.abs(baseHue + 360 * goldenRatio * 7) % 360,
        // Math.abs(baseHue + 360 * goldenRatio * 8) % 360,
        Math.abs(baseHue + 360 * goldenRatio * 9) % 360
      ];
      break;
    case ColorSchemes.Fibonacci:
      result = [
        baseHue,
        Math.abs(baseHue + 360 / 2) % 360,
        Math.abs(baseHue + 360 / 3) % 360,
        Math.abs(baseHue + 360 / 5) % 360,
        Math.abs(baseHue + 360 / 8) % 360,
        Math.abs(baseHue + 360 / 13) % 360,
        Math.abs(baseHue + 360 / 21) % 360,
        Math.abs(baseHue + 360 / 34) % 360,
        Math.abs(baseHue + 360 / 55) % 360,
        Math.abs(baseHue + 360 / 89) % 360
      ];
      break;
    case ColorSchemes.PentagramStar:
      result = [
        baseHue,
        Math.abs(baseHue + 72) % 360,
        Math.abs(baseHue + 144) % 360,
        Math.abs(baseHue + 216) % 360,
        Math.abs(baseHue + 288) % 360
      ];
      break;
    case ColorSchemes.VesicaPiscis:
      result = [baseHue, Math.abs(baseHue + 33) % 360, Math.abs(baseHue + 66) % 360];
      break;
    case ColorSchemes.FlowerOfLife:
      result = [
        baseHue,
        Math.abs(baseHue + 60) % 360,
        Math.abs(baseHue + 120) % 360,
        Math.abs(baseHue + 180) % 360,
        Math.abs(baseHue + 240) % 360,
        Math.abs(baseHue + 300) % 360
      ];
      break;
    case ColorSchemes.PlatonicSolids:
      result = [
        baseHue,
        Math.abs(baseHue + 72) % 360,
        Math.abs(baseHue + 144) % 360,
        Math.abs(baseHue + 216) % 360,
        Math.abs(baseHue + 288) % 360
      ];
      break;
    case ColorSchemes.SpiralOfTheodorus:
      result = [
        baseHue,
        Math.abs(baseHue + Math.sqrt(2) * 180) % 360,
        Math.abs(baseHue + Math.sqrt(3) * 180) % 360,
        Math.abs(baseHue + Math.sqrt(5) * 180) % 360,
        Math.abs(baseHue + Math.sqrt(6) * 180) % 360,
        Math.abs(baseHue + Math.sqrt(7) * 180) % 360,
        Math.abs(baseHue + Math.sqrt(8) * 180) % 360
      ];
      break;
    case ColorSchemes.MetatronsCube:
      result = [
        baseHue,
        Math.abs(baseHue + 60) % 360,
        Math.abs(baseHue + 120) % 360,
        Math.abs(baseHue + 180) % 360,
        Math.abs(baseHue + 240) % 360,
        Math.abs(baseHue + 300) % 360,
        Math.abs(baseHue + 30) % 360,
        Math.abs(baseHue + 90) % 360,
        Math.abs(baseHue + 150) % 360,
        Math.abs(baseHue + 210) % 360,
        Math.abs(baseHue + 270) % 360,
        Math.abs(baseHue + 330) % 360
      ];
      break;
    case ColorSchemes.SeedOfLife:
      result = [
        baseHue,
        Math.abs(baseHue + 51.4) % 360,
        Math.abs(baseHue + 102.8) % 360,
        Math.abs(baseHue + 154.2) % 360,
        Math.abs(baseHue + 205.6) % 360,
        Math.abs(baseHue + 257) % 360,
        Math.abs(baseHue + 308.4) % 360
      ];
      break;
    case ColorSchemes.FibonacciSequence:
      result = [baseHue, ...fibSequence.slice(1).map((n) => Math.abs(baseHue * n) % 360)];
      break;
    case ColorSchemes.GoldenSpiral:
      result = [
        baseHue,
        ...Array.from({ length: 3 }, (_, i) => Math.abs(baseHue + (i + 1) * goldenAngle) % 360)
      ];
      break;
    case ColorSchemes.MetallicMeans:
      result = [
        baseHue,
        ...metallicRatios.flatMap((ratio) => Math.abs(baseHue + 360 / ratio) % 360)
      ];
      break;
    case ColorSchemes.ContinuedFraction:
      result = [baseHue, ...piConvergents.map((frac) => Math.abs(baseHue + frac * 360) % 360)];
      break;
    case ColorSchemes.GoldenTrisection:
      result = [
        baseHue,
        Math.abs(baseHue + 360 * rho) % 360,
        Math.abs(baseHue + 360 * sigma) % 360
      ];
      break;
    case ColorSchemes.FareySequence:
      result = [baseHue, ...fareySequence.map((frac) => Math.abs(baseHue + frac * 360) % 360)];
      break;
    case ColorSchemes.NobleNumbers:
      result = [baseHue, ...nobleNumbers.map((n) => Math.abs(baseHue * n) % 360)];
      break;
    case ColorSchemes.GoldenTriangle:
      result = [
        baseHue,
        Math.abs(baseHue + goldenTriangleAngle) % 360,
        Math.abs(baseHue - goldenTriangleAngle + 360) % 360
      ];
      break;
    case ColorSchemes.SriYantra:
      result = [baseHue, ...getSriYantraAngles(baseHue)];
      break;
    case ColorSchemes.KabbalahTreeOfLife:
      result = [baseHue, ...getKabbalahTreeOfLife(baseHue)];
      break;
    case ColorSchemes.Torus:
      result = [baseHue, ...getTorus(baseHue)];
      break;
    case ColorSchemes.MandelbrotSet:
      result = [baseHue, ...getMandelbrotSet(baseHue)];
      break;
    case ColorSchemes.SierpinskiTriangle:
      result = [baseHue, ...getSierpinskiCarpet(baseHue)];
      break;
    case ColorSchemes.KochSnowflake:
      result = [baseHue, ...getKochSnowflake(baseHue)];
      break;
    case ColorSchemes.CelticKnot:
      result = [baseHue, ...getCelticKnot(baseHue)];
      break;
    case ColorSchemes.Labirinth:
      result = [baseHue, ...getLabirinth(baseHue)];
      break;
    case ColorSchemes.YinYang:
      result = [baseHue, ...getYinYang(baseHue)];
      break;
    case ColorSchemes.StarTetrahedron:
      result = [baseHue, ...getStarTetrahedron(baseHue)];
      break;
    case ColorSchemes.Hamsa:
      result = [baseHue, ...getHamsaLengths(baseHue)];
      break;
    case ColorSchemes.Enneagram:
      result = [baseHue, ...getEnneagramAngles(baseHue)];
      break;
    case ColorSchemes.Hexagram:
      result = [baseHue, ...getHexagramAngles(baseHue)];
      break;
    case ColorSchemes.ChakraSymbols:
      result = [baseHue, ...getChakraSymbols(baseHue)];
      break;
    case ColorSchemes.SpiralDynamics:
      result = [baseHue, ...getSpiralDynamics(baseHue)];
      break;
    case ColorSchemes.DoubleTorus:
      result = [baseHue, ...getDoubleTorus(baseHue)];
      break;
    case ColorSchemes.RosettePattern:
      result = [baseHue, ...getRosettePattern(baseHue)];
      break;
    case ColorSchemes.NestedPolygons:
      result = [baseHue, ...getNestedPolygons(baseHue)];
      break;
    default:
      result = [baseHue];
  }
  return result;
}

function getSriYantraAngles(baseHue: number): number[] {
  const angles: number[] = [];
  for (let i = 1; i <= 9; i++) {
    angles.push((baseHue + i * 20) % 360);
  }
  return angles;
}

function getKabbalahTreeOfLife(baseHue: number): number[] {
  const values: number[] = [];
  for (let i = 1; i <= 10; i++) {
    values.push((baseHue + i * 15) % 360);
  }
  return values;
}

function getTorus(baseHue: number): number[] {
  const u = degreesToRadians(baseHue % 360);
  const v = degreesToRadians((baseHue * 2) % 360);
  const R = 1; // Major radius
  const r = 0.5; // Minor radius
  const x = ((R + r * Math.cos(v)) * Math.cos(u)) % 360;
  const y = ((R + r * Math.cos(v)) * Math.sin(u)) % 360;
  const z = (r * Math.sin(v)) % 360;
  return [x, y, z];
}

function getMandelbrotSet(baseHue: number): number[] {
  const c_re = Math.cos(degreesToRadians(baseHue));
  const c_im = Math.sin(degreesToRadians(baseHue));
  const maxIterations = 10;
  let z_re = 0;
  let z_im = 0;
  const iterations: number[] = [];
  for (let i = 0; i < maxIterations; i++) {
    const z_re_new = z_re * z_re - z_im * z_im + c_re;
    const z_im_new = 2 * z_re * z_im + c_im;
    z_re = z_re_new;
    z_im = z_im_new;
    iterations.push(Math.sqrt(z_re * z_re + z_im * z_im) % 360);
    if (z_re * z_re + z_im * z_im > 4) break;
  }
  return iterations;
}

function getSierpinskiCarpet(baseHue: number): number[] {
  const triangleIterations = 5;
  const areas: number[] = [];
  let area = baseHue;
  for (let i = 0; i < triangleIterations; i++) {
    areas.push(area % 360);
    area = area / 2;
  }
  return areas;
}

function getKochSnowflake(baseHue: number): number[] {
  const flakeIterations = 5;
  const lengths: number[] = [];
  let length = baseHue;
  for (let i = 0; i < flakeIterations; i++) {
    lengths.push(length % 360);
    length = length / 3;
  }
  return lengths;
}

function getCelticKnot(baseHue: number): number[] {
  const knotAngles: number[] = [];
  for (let i = 1; i <= 8; i++) {
    const angle = (baseHue + i * 45) % 360;
    knotAngles.push(angle);
  }
  return knotAngles;
}

function getLabirinth(baseHue: number): number[] {
  const paths: number[] = [];
  for (let i = 1; i <= 7; i++) {
    paths.push((baseHue + i * 10) % 360);
  }
  return paths;
}

function getYinYang(baseHue: number): number[] {
  const proportion = Math.abs(Math.sin(degreesToRadians(baseHue)));
  return [(proportion * 360) % 360, ((1 - proportion) * 360) % 360];
}

function getStarTetrahedron(baseHue: number): number[] {
  const starAngles: number[] = [];
  for (let i = 0; i < 4; i++) {
    starAngles.push((baseHue + i * 90) % 360);
  }
  return starAngles;
}

function getHamsaLengths(baseHue: number): number[] {
  const hamsaLengths: number[] = [
    (baseHue * 0.5) % 360,
    (baseHue * 0.6) % 360,
    (baseHue * 0.7) % 360
  ];
  return hamsaLengths;
}

function getEnneagramAngles(baseHue: number): number[] {
  const enneagramAngles: number[] = [];
  for (let i = 0; i < 9; i++) {
    enneagramAngles.push((baseHue + i * 40) % 360);
  }
  return enneagramAngles;
}

function getHexagramAngles(baseHue: number): number[] {
  const hexagramAngles: number[] = [];
  for (let i = 0; i < 6; i++) {
    hexagramAngles.push((baseHue + i * 60) % 360);
  }
  return hexagramAngles;
}

function getChakraSymbols(baseHue: number): number[] {
  const chakraValues: number[] = [];
  for (let i = 1; i <= 7; i++) {
    chakraValues.push((baseHue + i * 30) % 360);
  }
  return chakraValues;
}

function getSpiralDynamics(baseHue: number): number[] {
  const spiralValues: number[] = [];
  for (let i = 1; i <= 6; i++) {
    spiralValues.push((baseHue * Math.pow(1.5, i)) % 360);
  }
  return spiralValues;
}

function getDoubleTorus(baseHue: number): number[] {
  const du = degreesToRadians(baseHue % 360);
  const dv = degreesToRadians((baseHue * 2) % 360);
  const R1 = 1; // Major radius of the first torus
  const r1 = 0.5; // Minor radius of the first torus
  const R2 = 1; // Major radius of the second torus
  const r2 = 0.5; // Minor radius of the second torus

  // First torus coordinates
  const x1 = ((R1 + r1 * Math.cos(dv)) * Math.cos(du)) % 360;
  const y1 = ((R1 + r1 * Math.cos(dv)) * Math.sin(du)) % 360;
  const z1 = (r1 * Math.sin(dv)) % 360;

  // Second torus coordinates (shifted)
  const x2 = ((R2 + r2 * Math.cos(dv + Math.PI)) * Math.cos(du + Math.PI)) % 360;
  const y2 = ((R2 + r2 * Math.cos(dv + Math.PI)) * Math.sin(du + Math.PI)) % 360;
  const z2 = (r2 * Math.sin(dv + Math.PI)) % 360;
  return [x1, y1, z1, x2, y2, z2];
}

function getRosettePattern(baseHue: number): number[] {
  const k = ((baseHue % 360) / 360) * 10 + 2; // Number of petals between 2 and 12
  const points: number[] = [];
  const numPoints = 10;
  for (let i = 0; i < numPoints; i++) {
    const theta = (2 * Math.PI * i) / numPoints;
    const r = Math.cos(k * theta) % 360;
    points.push(r);
  }
  return points;
}

function getNestedPolygons(baseHue: number): number[] {
  const sides = Math.floor((baseHue % 360) / 30) + 3; // Number of sides from 3 to 15
  const layers = 5; // Number of nested layers
  const polygons: number[] = [];
  for (let i = 1; i <= layers; i++) {
    polygons.push((sides * i) % 360);
  }
  return polygons;
}

export function adjustCommentColor(
  commentColor: string,
  backgroundColor: string,
  isDarkTheme: boolean
): string {
  const minContrast = 2;
  const maxContrast = 3;
  let comment = parseHex(commentColor);
  // const bgLuminosity = bgColor.luminosity();
  console.log('Is dark theme: ', isDarkTheme, minContrast, maxContrast);
  const maxSaturation = isDarkTheme ? 15 : 35;
  // Adjust the comment color until it meets our criteria
  while (true) {
    const contrast = calculateContrast(formatHex8(comment), backgroundColor);

    if (isDarkTheme) {
      if (contrast < minContrast || contrast > maxContrast) {
        if (contrast > maxContrast) {
          comment = parseHex(darkenSaturate(formatHex8(comment)));
        } else if (contrast < minContrast) {
          comment = parseHex(brightenDesaturate(formatHex8(comment)));
        }
      } else {
        break;
      }
    } else {
      if (contrast < minContrast || contrast > maxContrast) {
        if (contrast < minContrast) {
          comment = parseHex(darkenSaturate(formatHex8(comment)));
        } else if (contrast > maxContrast) {
          comment = parseHex(brightenDesaturate(formatHex8(comment)));
        }
      } else {
        break;
      }
    }
    console.log('Comment contrast: ', contrast);
    console.log(
      'CONDITION: ',
      isDarkTheme && isDark(formatHex8(comment)),
      !isDarkTheme && !isDark(formatHex8(comment))
    );
    // Prevent infinite loop and ensure the color doesn't get too dark or too light
    if (isDarkTheme && isDark(formatHex8(comment))) break;
    if (!isDarkTheme && !isDark(formatHex8(comment))) break;
  }

  // Ensure maxSaturation
  while (hsl(comment).s > maxSaturation) {
    comment = desaturateColor(comment);
  }

  return formatHex8(comment);
}

export function ensureReadability(
  foreground: string,
  background: string,
  minContrast = 5.5
): string {
  let color = parseHex(foreground);
  const bgColor = parseHex(background);
  const isDarkTheme = isDark(background);
  let iterations = 0;
  const maxIterations = 100;

  if (isDarkTheme) {
    while (
      calculateContrast(formatHex8(color), formatHex8(bgColor)) < minContrast &&
      iterations < maxIterations
    ) {
      color = !isDark(formatHex8(color))
        ? parseHex(darkenSaturate(formatHex8(color)))
        : parseHex(brightenDesaturate(formatHex8(color)));
      iterations++;
    }
  } else {
    while (
      calculateContrast(formatHex8(color), formatHex8(bgColor)) < minContrast &&
      iterations < maxIterations
    ) {
      let newColor = darkenColor(color);
      newColor = saturateColor(newColor);

      if (newColor) {
        color = newColor;
      }

      iterations++;
    }
  }
  console.log(
    'Iterations: ',
    iterations,
    calculateContrast(formatHex8(color), formatHex8(bgColor))
  );
  return formatHex8(color);
}

export function adjustHue(hue: number): number {
  return (hue + 360) % 360;
}

export function adjustSaturation(saturation: number): number {
  return Math.max(0, Math.min(100, saturation));
}

export function adjustLightness(lightness: number): number {
  return Math.max(0, Math.min(100, lightness));
}
// Utility function to convert degrees to radians
function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
