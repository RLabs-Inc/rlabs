// New Sacred Geometry Pattern Functions to be merged into colorUtils.svelte.ts

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
PhiGridSystem
SacredIntersectionPoints
HarmonicResonance
SeedOfLifeVariations
OctahedronProjections
RhombicDodecahedron
TruncatedIcosahedron
SacredSpirals
DivineProportion
TetractysPattern
*/

// Add these cases to the switch statement in generateSchemeHues:
/*
[Previous cases remain the same...]

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
case ColorSchemes.PhiGridSystem:
    return getPhiGridSystem(baseHue);
case ColorSchemes.SacredIntersectionPoints:
    return getSacredIntersectionPoints(baseHue);
case ColorSchemes.HarmonicResonance:
    return getHarmonicResonance(baseHue);
case ColorSchemes.SeedOfLifeVariations:
    return getSeedOfLifeVariations(baseHue);
case ColorSchemes.OctahedronProjections:
    return getOctahedronProjections(baseHue);
case ColorSchemes.RhombicDodecahedron:
    return getRhombicDodecahedron(baseHue);
case ColorSchemes.TruncatedIcosahedron:
    return getTruncatedIcosahedron(baseHue);
case ColorSchemes.SacredSpirals:
    return getSacredSpirals(baseHue);
case ColorSchemes.DivineProportion:
    return getDivineProportion(baseHue);
case ColorSchemes.TetractysPattern:
    return getTetractysPattern(baseHue);
*/

// [Previous functions remain exactly the same...]

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

export function getPhiGridSystem(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const gridSize = 5;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const x = i / gridSize;
      const y = j / gridSize;
      angles.push((baseHue + x * phi * 180) % 360);
      angles.push((baseHue + y * phi * 180) % 360);
      angles.push((baseHue + (x + y) * phi * 90) % 360);
    }
  }
  return angles;
}

export function getSacredIntersectionPoints(baseHue: number): number[] {
  const angles: number[] = [];
  // Based on intersection points of various sacred geometry patterns
  const vesicaPoints = [30, 150, 210, 330];
  const flowerPoints = [0, 60, 120, 180, 240, 300];
  const starPoints = [36, 72, 108, 144, 180, 216, 252, 288, 324];

  for (const angle of [...vesicaPoints, ...flowerPoints, ...starPoints]) {
    angles.push((baseHue + angle) % 360);
  }
  return angles;
}

export function getHarmonicResonance(baseHue: number): number[] {
  const angles: number[] = [];
  // Based on harmonic series and cymatics patterns
  const harmonicSeries = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cymaticRatios = [1.059, 1.122, 1.189, 1.26, 1.335, 1.414, 1.498, 1.587];

  for (const harmonic of harmonicSeries) {
    angles.push((baseHue * harmonic) % 360);
  }

  for (const ratio of cymaticRatios) {
    angles.push((baseHue * ratio) % 360);
  }
  return angles;
}

export function getSeedOfLifeVariations(baseHue: number): number[] {
  const angles: number[] = [];
  // Different stages of the Seed of Life formation
  const centralHexagon = [0, 60, 120, 180, 240, 300];
  const outerCircles = [30, 90, 150, 210, 270, 330];
  const intersectionPoints = [45, 105, 165, 225, 285, 345];

  for (const angle of [...centralHexagon, ...outerCircles, ...intersectionPoints]) {
    angles.push((baseHue + angle) % 360);
  }
  return angles;
}

export function getOctahedronProjections(baseHue: number): number[] {
  const angles: number[] = [];
  // Octahedron has 6 vertices and 8 faces
  const vertices = 6;
  const faces = 8;

  // Vertex angles
  for (let i = 0; i < vertices; i++) {
    angles.push((baseHue + i * 60) % 360);
  }

  // Face center angles
  for (let i = 0; i < faces; i++) {
    angles.push((baseHue + i * 45) % 360);
  }

  return angles;
}

export function getRhombicDodecahedron(baseHue: number): number[] {
  const angles: number[] = [];
  // Rhombic dodecahedron has 14 vertices and 12 faces
  const vertices = 14;
  const faces = 12;
  const phi = 1.618033988749895;

  for (let i = 0; i < vertices; i++) {
    angles.push((baseHue + (i * 360) / vertices) % 360);
  }

  for (let i = 0; i < faces; i++) {
    angles.push((baseHue + ((i * 360) / faces) * phi) % 360);
  }
  return angles;
}

export function getTruncatedIcosahedron(baseHue: number): number[] {
  const angles: number[] = [];
  // Truncated icosahedron has 60 vertices and 32 faces (12 pentagonal, 20 hexagonal)
  const pentagonalFaces = 12;
  const hexagonalFaces = 20;

  // Pentagonal face centers
  for (let i = 0; i < pentagonalFaces; i++) {
    angles.push((baseHue + (i * 360) / pentagonalFaces) % 360);
  }

  // Hexagonal face centers
  for (let i = 0; i < hexagonalFaces; i++) {
    angles.push((baseHue + (i * 360) / hexagonalFaces) % 360);
  }
  return angles;
}

export function getSacredSpirals(baseHue: number): number[] {
  const angles: number[] = [];
  // Collection of different sacred spiral types
  const phi = 1.618033988749895;
  const e = 2.718281828459045;
  const iterations = 12;

  for (let i = 1; i <= iterations; i++) {
    // Phi spiral
    angles.push((baseHue * Math.pow(phi, i / 12)) % 360);
    // E spiral
    angles.push((baseHue * Math.pow(e, i / 12)) % 360);
    // Square root spiral
    angles.push((baseHue * Math.sqrt(i)) % 360);
  }
  return angles;
}

export function getDivineProportion(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const divineSections = 9;

  for (let i = 1; i <= divineSections; i++) {
    // Forward progression
    angles.push((baseHue * Math.pow(phi, i)) % 360);
    // Reverse progression
    angles.push((baseHue * Math.pow(phi, -i)) % 360);
    // Mean points
    angles.push(((baseHue * (Math.pow(phi, i) + Math.pow(phi, -i))) / 2) % 360);
  }
  return angles;
}

export function getTetractysPattern(baseHue: number): number[] {
  const angles: number[] = [];
  // Pythagorean tetractys: triangular figure of 10 points
  const rows = 4;
  let points = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < points; j++) {
      const angle = (360 / points) * j;
      angles.push((baseHue + angle) % 360);
      // Add harmonic overtones
      angles.push((baseHue + angle * (i + 1)) % 360);
    }
    points++;
  }
  return angles;
}

// [Previous functions remain exactly the same...]
