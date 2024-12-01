// Additional Sacred Geometry Pattern Functions to be merged into colorUtils.svelte.ts

// Add these cases to the ColorSchemes enum in types/color.ts:
/*
VesicaPiscesSequence
VitruvianProportions
TorusKnots
HypercubeProjections
PythagoreanSpiral
LoxodromicSpiral
SacredTriangles
FlowerOfLifeHarmonics
CubeOfSpace
PlatonicSolidsDuals
FibonacciSpiralMatrix
GoldenRectangleSubdivisions
SacredSoundFrequencies
MetatronVariations
PentagonalSymmetries
*/

// Add these cases to the switch statement in generateSchemeHues:
/*
case ColorSchemes.VesicaPiscesSequence:
    return getVesicaPiscesSequence(baseHue);
case ColorSchemes.VitruvianProportions:
    return getVitruvianProportions(baseHue);
case ColorSchemes.TorusKnots:
    return getTorusKnots(baseHue);
case ColorSchemes.HypercubeProjections:
    return getHypercubeProjections(baseHue);
case ColorSchemes.PythagoreanSpiral:
    return getPythagoreanSpiral(baseHue);
case ColorSchemes.LoxodromicSpiral:
    return getLoxodromicSpiral(baseHue);
case ColorSchemes.SacredTriangles:
    return getSacredTriangles(baseHue);
case ColorSchemes.FlowerOfLifeHarmonics:
    return getFlowerOfLifeHarmonics(baseHue);
case ColorSchemes.CubeOfSpace:
    return getCubeOfSpace(baseHue);
case ColorSchemes.PlatonicSolidsDuals:
    return getPlatonicSolidsDuals(baseHue);
case ColorSchemes.FibonacciSpiralMatrix:
    return getFibonacciSpiralMatrix(baseHue);
case ColorSchemes.GoldenRectangleSubdivisions:
    return getGoldenRectangleSubdivisions(baseHue);
case ColorSchemes.SacredSoundFrequencies:
    return getSacredSoundFrequencies(baseHue);
case ColorSchemes.MetatronVariations:
    return getMetatronVariations(baseHue);
case ColorSchemes.PentagonalSymmetries:
    return getPentagonalSymmetries(baseHue);
*/

export function getVesicaPiscesSequence(baseHue: number): number[] {
  const angles: number[] = [];
  const vesicaRatio = Math.sqrt(3);
  const iterations = 7;

  for (let i = 0; i < iterations; i++) {
    // Main vesica angle
    angles.push((baseHue + i * 60) % 360);
    // Secondary intersection points
    angles.push((baseHue + i * 60 * vesicaRatio) % 360);
    // Tertiary points based on vesica pisces proportions
    angles.push((baseHue + i * 60 * (vesicaRatio / 2)) % 360);
  }
  return angles;
}

export function getVitruvianProportions(baseHue: number): number[] {
  const angles: number[] = [];
  // Based on Leonardo da Vinci's Vitruvian Man proportions
  const vitruvianRatio = 1.618034; // Golden ratio in human proportions
  const bodyPoints = 8; // Major body proportion points

  for (let i = 0; i < bodyPoints; i++) {
    // Main body proportion points
    angles.push((baseHue + i * 45) % 360);
    // Circle points (arms extended)
    angles.push((baseHue + i * 45 * vitruvianRatio) % 360);
    // Square points (arms down)
    angles.push((baseHue + i * 90) % 360);
  }
  return angles;
}

export function getTorusKnots(baseHue: number): number[] {
  const angles: number[] = [];
  // Torus knot parameters (p,q) must be coprime
  const p = 2;
  const q = 3;
  const points = 12;

  for (let i = 0; i < points; i++) {
    const t = (i * 2 * Math.PI) / points;
    const angle = ((p * t) % (2 * Math.PI)) * (180 / Math.PI);
    const secondaryAngle = ((q * t) % (2 * Math.PI)) * (180 / Math.PI);

    angles.push((baseHue + angle) % 360);
    angles.push((baseHue + secondaryAngle) % 360);
  }
  return angles;
}

export function getHypercubeProjections(baseHue: number): number[] {
  const angles: number[] = [];
  // 4D hypercube has 16 vertices
  const vertices = 16;
  const rotationAngle = 24; // Rotation angle for 4D to 3D projection

  for (let i = 0; i < vertices; i++) {
    // Main vertex projections
    angles.push((baseHue + i * 22.5) % 360);
    // Rotated projections
    angles.push((baseHue + (i * 22.5 + rotationAngle)) % 360);
  }
  return angles;
}

export function getPythagoreanSpiral(baseHue: number): number[] {
  const angles: number[] = [];
  // Based on Pythagorean triples (3,4,5), (5,12,13), etc.
  const pythagoreanTriples = [
    [3, 4, 5],
    [5, 12, 13],
    [8, 15, 17],
    [7, 24, 25]
  ];

  for (const triple of pythagoreanTriples) {
    const ratio = triple[0] / triple[1];
    angles.push((baseHue + ratio * 180) % 360);
    angles.push((baseHue + triple[2] * 10) % 360);
  }
  return angles;
}

export function getLoxodromicSpiral(baseHue: number): number[] {
  const angles: number[] = [];
  const alpha = Math.PI / 6; // Constant angle with meridians
  const points = 12;

  for (let i = 0; i < points; i++) {
    const t = (i * Math.PI) / 6;
    const phi = Math.log(Math.tan(t / 2 + Math.PI / 4)) / Math.tan(alpha);
    angles.push((baseHue + (phi * 180) / Math.PI) % 360);
  }
  return angles;
}

export function getSacredTriangles(baseHue: number): number[] {
  const angles: number[] = [];
  // Various sacred triangles
  const keplerTriangle = [31.7174, 67.4948, 80.7878]; // Kepler's right triangle
  const egyptianTriangle = [36.87, 53.13, 90]; // Egyptian sacred triangle
  const pythagoreanTriangle = [30, 60, 90]; // Basic Pythagorean triangle

  for (const angle of [...keplerTriangle, ...egyptianTriangle, ...pythagoreanTriangle]) {
    angles.push((baseHue + angle) % 360);
  }
  return angles;
}

export function getFlowerOfLifeHarmonics(baseHue: number): number[] {
  const angles: number[] = [];
  // Based on musical ratios found in the Flower of Life
  const musicalRatios = [
    1,
    2 / 1,
    3 / 2,
    4 / 3,
    5 / 3,
    5 / 4,
    6 / 5,
    8 / 5,
    9 / 5,
    9 / 8,
    10 / 9,
    16 / 15
  ];

  for (const ratio of musicalRatios) {
    angles.push((baseHue * ratio) % 360);
  }
  return angles;
}

export function getCubeOfSpace(baseHue: number): number[] {
  const angles: number[] = [];
  // Based on the Kabbalistic Cube of Space
  const directions = 6; // Up, Down, East, West, North, South
  const edges = 12;

  for (let i = 0; i < directions; i++) {
    angles.push((baseHue + i * 60) % 360);
  }

  for (let i = 0; i < edges; i++) {
    angles.push((baseHue + i * 30) % 360);
  }
  return angles;
}

export function getPlatonicSolidsDuals(baseHue: number): number[] {
  const angles: number[] = [];
  // Platonic solids dual pairs: Tetrahedron(self), Cube-Octahedron, Dodecahedron-Icosahedron
  const tetrahedronAngles = [0, 109.47, 219.47, 329.47];
  const cubeOctahedronAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const dodecaIcosaAngles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];

  for (const angle of [...tetrahedronAngles, ...cubeOctahedronAngles, ...dodecaIcosaAngles]) {
    angles.push((baseHue + angle) % 360);
  }
  return angles;
}

export function getFibonacciSpiralMatrix(baseHue: number): number[] {
  const angles: number[] = [];
  const fibMatrix = [
    [1, 1, 2, 3],
    [1, 2, 3, 5],
    [2, 3, 5, 8],
    [3, 5, 8, 13]
  ];

  for (let i = 0; i < fibMatrix.length; i++) {
    for (let j = 0; j < fibMatrix[i].length; j++) {
      const value = fibMatrix[i][j];
      angles.push((baseHue * value) % 360);
      angles.push((baseHue + value * 30) % 360);
    }
  }
  return angles;
}

export function getGoldenRectangleSubdivisions(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const subdivisions = 8;

  for (let i = 1; i <= subdivisions; i++) {
    const ratio = 1 / Math.pow(phi, i);
    angles.push((baseHue * ratio) % 360);
    angles.push((baseHue + ratio * 180) % 360);
    angles.push((baseHue * (1 - ratio)) % 360);
  }
  return angles;
}

export function getSacredSoundFrequencies(baseHue: number): number[] {
  const angles: number[] = [];
  // Solfeggio frequencies: 396, 417, 528, 639, 741, 852 Hz
  const frequencies = [396, 417, 528, 639, 741, 852];
  // Overtone series ratios: 1:1, 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:7, 9:8
  const overtones = [1, 2, 1.5, 1.333, 1.25, 1.2, 1.167, 1.143, 1.125];

  for (const freq of frequencies) {
    angles.push((baseHue * (freq / 396)) % 360);
  }

  for (const ratio of overtones) {
    angles.push((baseHue * ratio) % 360);
  }
  return angles;
}

export function getMetatronVariations(baseHue: number): number[] {
  const angles: number[] = [];
  // 13 circles of Metatron's Cube with different rotations
  const centerAngles = [0, 60, 120, 180, 240, 300];
  const innerAngles = [30, 90, 150, 210, 270, 330];
  const outerAngle = 72; // Pentagon angle

  for (const angle of centerAngles) {
    angles.push((baseHue + angle) % 360);
  }

  for (const angle of innerAngles) {
    angles.push((baseHue + angle) % 360);
  }

  for (let i = 0; i < 5; i++) {
    angles.push((baseHue + i * outerAngle) % 360);
  }
  return angles;
}

export function getPentagonalSymmetries(baseHue: number): number[] {
  const angles: number[] = [];
  const pentagonAngle = 72;
  const starPentagonAngle = 144;
  const iterations = 5;

  for (let i = 0; i < iterations; i++) {
    // Regular pentagon points
    angles.push((baseHue + i * pentagonAngle) % 360);
    // Star pentagon points
    angles.push((baseHue + i * starPentagonAngle) % 360);
    // Golden ratio based points
    angles.push((baseHue + i * pentagonAngle * 1.618033988749895) % 360);
  }
  return angles;
}
