import Color from 'color';
import { ColorSchemes } from '../../types/colors';

export function generateSchemeColors(baseHue: number, scheme: ColorSchemes): number[] {
  let result: number[];
  const goldenRatio = 0.618033988749895;
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
        Math.abs(baseHue - 60 + 360) % 360,
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
      result = [baseHue, Math.abs(baseHue + 90) % 360, Math.abs(baseHue + 180) % 360, Math.abs(baseHue + 270) % 360];
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
        Math.abs(baseHue + 360 * goldenRatio * 7) % 360,
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
        Math.abs(baseHue + 360 * goldenRatio * 9) % 360,
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
        Math.abs(baseHue + 360 / 89) % 360,
      ];
      break;
    case ColorSchemes.PentagramStar:
      result = [
        baseHue,
        Math.abs(baseHue + 72) % 360,
        Math.abs(baseHue + 144) % 360,
        Math.abs(baseHue + 216) % 360,
        Math.abs(baseHue + 288) % 360,
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
        Math.abs(baseHue + 300) % 360,
      ];
      break;
    case ColorSchemes.PlatonicSolids:
      result = [
        baseHue,
        Math.abs(baseHue + 72) % 360,
        Math.abs(baseHue + 144) % 360,
        Math.abs(baseHue + 216) % 360,
        Math.abs(baseHue + 288) % 360,
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
        Math.abs(baseHue + Math.sqrt(8) * 180) % 360,
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
        Math.abs(baseHue + 330) % 360,
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
        Math.abs(baseHue + 308.4) % 360,
      ];
      break;
    case ColorSchemes.FibonacciSequence:
      // const fibSequence = [1, 1, 2, 3, 5, 8, 13, 21]
      const fibSequence = [8, 13, 21, 34];
      result = [baseHue, ...fibSequence.slice(1).map((n) => Math.abs(baseHue * n) % 360)];
      break;
    case ColorSchemes.GoldenSpiral:
      const goldenAngle = 137.5077640500378; // (3 - Math.sqrt(5)) * 180
      result = [baseHue, ...Array.from({ length: 3 }, (_, i) => Math.abs(baseHue + (i + 1) * goldenAngle) % 360)];
      break;
    case ColorSchemes.MetallicMeans:
      const metallicRatios = [1.618, 2.414, 3.303, 4.236]; // Golden, Silver, Bronze, Copper
      result = [baseHue, ...metallicRatios.flatMap((ratio) => Math.abs(baseHue + 360 / ratio) % 360)];
      break;
    case ColorSchemes.ContinuedFraction:
      const piConvergents = [22 / 7, 333 / 106, 355 / 113, 103993 / 33102];
      result = [baseHue, ...piConvergents.map((frac) => Math.abs(baseHue + frac * 360) % 360)];
      break;
    case ColorSchemes.GoldenTrisection:
      const rho = 0.4656;
      const sigma = 0.6823;
      result = [baseHue, Math.abs(baseHue + 360 * rho) % 360, Math.abs(baseHue + 360 * sigma) % 360];
      break;
    case ColorSchemes.FareySequence:
      const fareySequence = [0, 1 / 3, 1 / 2, 2 / 3, 1];
      result = [baseHue, ...fareySequence.map((frac) => Math.abs(baseHue + frac * 360) % 360)];
      break;
    case ColorSchemes.NobleNumbers:
      const nobleNumbers = [1.618, 2.414, 3.303, 4.236, 5.192];
      result = [baseHue, ...nobleNumbers.map((n) => Math.abs(baseHue * n) % 360)];
      break;
    case ColorSchemes.GoldenTriangle:
      const angle = Math.atan(1 / goldenRatio) * (180 / Math.PI);
      result = [baseHue, Math.abs(baseHue + angle) % 360, Math.abs(baseHue - angle + 360) % 360];
      break;
    case ColorSchemes.SriYantra:
      const angles: number[] = [];
      for (let i = 1; i <= 9; i++) {
        angles.push((baseHue + i * 20) % 360);
      }
      result = [baseHue, ...angles];
      break;
    case ColorSchemes.KabbalahTreeOfLife:
      const values: number[] = [];
      for (let i = 1; i <= 10; i++) {
        values.push((baseHue + i * 15) % 360);
      }
      result = [baseHue, ...values];
      break;
    case ColorSchemes.Torus:
      const u = degreesToRadians(baseHue % 360);
      const v = degreesToRadians((baseHue * 2) % 360);
      const R = 1; // Major radius
      const r = 0.5; // Minor radius
      const x = ((R + r * Math.cos(v)) * Math.cos(u)) % 360;
      const y = ((R + r * Math.cos(v)) * Math.sin(u)) % 360;
      const z = (r * Math.sin(v)) % 360;
      result = [baseHue, x, y, z];
      break;
    case ColorSchemes.MandelbrotSet:
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
      result = [baseHue, ...iterations];
      break;
    case ColorSchemes.SierpinskiTriangle:
      const triangleIterations = 5;
      const areas: number[] = [];
      let area = baseHue;
      for (let i = 0; i < triangleIterations; i++) {
        areas.push(area % 360);
        area = area / 2;
      }
      result = [baseHue, ...areas];
      break;
    // case ColorScheme.SierpinskiCarpet:
    //   result = [baseHue, ...sierpinskiCarpet(baseHue)]
    //   break
    case ColorSchemes.KochSnowflake:
      const flakeIterations = 5;
      const lengths: number[] = [];
      let length = baseHue;
      for (let i = 0; i < flakeIterations; i++) {
        lengths.push(length % 360);
        length = length / 3;
      }
      result = [baseHue, ...lengths];
      break;
    case ColorSchemes.CelticKnot:
      const knotAngles: number[] = [];
      for (let i = 1; i <= 8; i++) {
        const angle = (baseHue + i * 45) % 360;
        knotAngles.push(angle);
      }
      result = [baseHue, ...knotAngles];
      break;
    case ColorSchemes.Labirinth:
      const paths: number[] = [];
      for (let i = 1; i <= 7; i++) {
        paths.push((baseHue + i * 10) % 360);
      }
      result = [baseHue, ...paths];
      break;
    case ColorSchemes.YinYang:
      const proportion = Math.abs(Math.sin(degreesToRadians(baseHue)));
      result = [baseHue, (proportion * 360) % 360, ((1 - proportion) * 360) % 360];
      break;
    case ColorSchemes.StarTetrahedron:
      const starAngles: number[] = [];
      for (let i = 0; i < 4; i++) {
        starAngles.push((baseHue + i * 90) % 360);
      }
      result = [baseHue, ...starAngles];
      break;
    case ColorSchemes.Hamsa:
      const hamsaLengths: number[] = [(baseHue * 0.5) % 360, (baseHue * 0.6) % 360, (baseHue * 0.7) % 360];
      result = [baseHue, ...hamsaLengths];
      break;
    case ColorSchemes.Enneagram:
      const enneagramAngles: number[] = [];
      for (let i = 0; i < 9; i++) {
        enneagramAngles.push((baseHue + i * 40) % 360);
      }
      result = [baseHue, ...enneagramAngles];
      break;
    case ColorSchemes.Hexagram:
      const hexagramAngles: number[] = [];
      for (let i = 0; i < 6; i++) {
        hexagramAngles.push((baseHue + i * 60) % 360);
      }
      result = [baseHue, ...hexagramAngles];
      break;
    case ColorSchemes.ChakraSymbols:
      const chakraValues: number[] = [];
      for (let i = 1; i <= 7; i++) {
        chakraValues.push((baseHue + i * 30) % 360);
      }
      result = [baseHue, ...chakraValues];
      break;
    case ColorSchemes.SpiralDynamics:
      const spiralValues: number[] = [];
      for (let i = 1; i <= 6; i++) {
        spiralValues.push((baseHue * Math.pow(1.5, i)) % 360);
      }
      result = [baseHue, ...spiralValues];
      break;
    case ColorSchemes.DoubleTorus:
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

      result = [baseHue, x1, y1, z1, x2, y2, z2];
      break;
    case ColorSchemes.RosettePattern:
      const k = ((baseHue % 360) / 360) * 10 + 2; // Number of petals between 2 and 12
      const points: number[] = [];
      const numPoints = 10;
      for (let i = 0; i < numPoints; i++) {
        const theta = (2 * Math.PI * i) / numPoints;
        const r = Math.cos(k * theta) % 360;
        points.push(r);
      }
      result = [baseHue, ...points];
      break;
    case ColorSchemes.NestedPolygons:
      const sides = Math.floor((baseHue % 360) / 30) + 3; // Number of sides from 3 to 15
      const layers = 5; // Number of nested layers
      const polygons: number[] = [];
      for (let i = 1; i <= layers; i++) {
        polygons.push((sides * i) % 360);
      }
      result = [baseHue, ...polygons];
      break;
    default:
      result = [baseHue];
  }
  return result;
}

export function adjustCommentColor(
  commentColor: string,
  backgroundColor: string,
  minContrast: number,
  maxContrast: number,
): string {
  const bgColor = Color(backgroundColor);
  let comment = Color(commentColor);
  const bgLuminosity = bgColor.luminosity();
  const isDarkTheme = bgColor.isDark();
  const maxSaturation = isDarkTheme ? 15 : 35;
  // Adjust the comment color until it meets our criteria
  while (true) {
    const contrast = comment.contrast(bgColor);
    const luminanceRatio = Math.abs(comment.luminosity() - bgLuminosity) / Math.max(comment.luminosity(), bgLuminosity);

    if (isDarkTheme) {
      // For dark themes, we want to darken the comment color
      if (contrast < minContrast || contrast > maxContrast) {
        if (contrast > maxContrast) {
          comment = comment.darken(0.2);
          comment = comment.desaturate(0.5);
        } else if (contrast < minContrast) {
          comment = comment.lighten(0.2);
          comment = comment.saturate(0.2);
        }
      } else {
        break;
      }
    } else {
      // For light themes, keep the current behavior
      if (contrast < minContrast || contrast > maxContrast) {
        if (contrast < minContrast) {
          comment = comment.darken(0.2);
          comment = comment.saturate(0.2);
        } else if (contrast > maxContrast) {
          comment = comment.lighten(0.2);
          comment = comment.desaturate(0.5);
        }
      } else {
        break;
      }
    }
    // Prevent infinite loop and ensure the color doesn't get too dark or too light
    if (isDarkTheme && comment.luminosity() < 0.05) break;
    if (!isDarkTheme && comment.luminosity() > 0.95) break;
  }

  // Ensure maxSaturation
  while (Color(comment).hsl().saturationl() > maxSaturation) {
    comment = comment.desaturate(0.01);
  }

  return comment.hexa();
}

export function ensureReadability(foreground: string, background: string, minContrast = 5.5): string {
  let color = Color(foreground);
  const bgColor = Color(background);
  let iterations = 0;
  const maxIterations = 100;

  while (color.contrast(bgColor) < minContrast && iterations < maxIterations) {
    color = color.isLight() ? color.darken(0.05).saturate(0.05) : color.lighten(0.05).saturate(0.05);
    iterations++;
  }

  return color.hexa();
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
