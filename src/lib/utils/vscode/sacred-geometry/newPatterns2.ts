// Additional Sacred Geometry Pattern Functions to be merged into colorUtils.svelte.ts

// Add these cases to the ColorSchemes enum in types/color.ts:
/*
MerkabaFieldHarmonics
CosmicCubeProjections
VectorEquilibrium
StellatedOctahedron
FractalPenrose
SacredVortex
PhiSpiralMandala
DoubleFibonacci
SacredPolygonNesting
QuantumGeometryGrid
*/

// Add these cases to the switch statement in generateSchemeHues:
/*
case ColorSchemes.MerkabaFieldHarmonics:
    return getMerkabaFieldHarmonics(baseHue);
case ColorSchemes.CosmicCubeProjections:
    return getCosmicCubeProjections(baseHue);
case ColorSchemes.VectorEquilibrium:
    return getVectorEquilibrium(baseHue);
case ColorSchemes.StellatedOctahedron:
    return getStellatedOctahedron(baseHue);
case ColorSchemes.FractalPenrose:
    return getFractalPenrose(baseHue);
case ColorSchemes.SacredVortex:
    return getSacredVortex(baseHue);
case ColorSchemes.PhiSpiralMandala:
    return getPhiSpiralMandala(baseHue);
case ColorSchemes.DoubleFibonacci:
    return getDoubleFibonacci(baseHue);
case ColorSchemes.SacredPolygonNesting:
    return getSacredPolygonNesting(baseHue);
case ColorSchemes.QuantumGeometryGrid:
    return getQuantumGeometryGrid(baseHue);
*/

export function getMerkabaFieldHarmonics(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const merkabaTiers = 7; // Seven levels of consciousness
  const rotationAngles = [19.47, 26.57, 45, 60, 72, 108]; // Sacred angles

  for (let i = 1; i <= merkabaTiers; i++) {
    // Counter-rotating tetrahedra
    angles.push((baseHue + i * 51.43) % 360); // 51.43° = Star tetrahedron angle

    for (const angle of rotationAngles) {
      // Field harmonics at each level
      angles.push((baseHue + angle * Math.pow(phi, i / 7)) % 360);
    }
  }
  return angles;
}

export function getCosmicCubeProjections(baseHue: number): number[] {
  const angles: number[] = [];
  const dimensions = 4; // 4D hypercube projection
  const vertices = Math.pow(2, dimensions); // 16 vertices in 4D
  const projectionRatios = [1, 1.414, 1.732, 2]; // Square roots of 1,2,3,4

  for (let i = 0; i < vertices; i++) {
    for (const ratio of projectionRatios) {
      const angle = i * 22.5 * ratio; // 22.5 = 360/16
      angles.push((baseHue + angle) % 360);
    }
  }
  return angles;
}

export function getVectorEquilibrium(baseHue: number): number[] {
  const angles: number[] = [];
  // Cuboctahedron - 12 vertices, 24 edges, 14 faces
  const vertices = 12;
  const edges = 24;
  const phi = 1.618033988749895;

  // Vertex angles
  for (let i = 0; i < vertices; i++) {
    angles.push((baseHue + i * 30) % 360); // 30° intervals
  }

  // Edge midpoint angles
  for (let i = 0; i < edges / 2; i++) {
    angles.push((baseHue + i * 15 * phi) % 360); // 15° * phi intervals
  }
  return angles;
}

export function getStellatedOctahedron(baseHue: number): number[] {
  const angles: number[] = [];
  const vertices = 14; // 6 original + 8 stellated points
  const starAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const octahedronAngles = [0, 60, 120, 180, 240, 300];

  // Combine octahedron and star angles
  for (const angle of [...starAngles, ...octahedronAngles]) {
    angles.push((baseHue + angle) % 360);
    // Add interlocking angles
    angles.push((baseHue + angle + 35.2644) % 360); // 35.2644° = Stellated octahedron angle
  }
  return angles;
}

export function getFractalPenrose(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const iterations = 5;
  const penroseAngles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];

  for (let i = 0; i < iterations; i++) {
    for (const angle of penroseAngles) {
      // Scale angles by phi at each iteration
      angles.push((baseHue + angle / Math.pow(phi, i)) % 360);
    }
  }
  return angles;
}

export function getSacredVortex(baseHue: number): number[] {
  const angles: number[] = [];
  const vortexLayers = 9;
  const phi = 1.618033988749895;
  const e = 2.718281828459045;

  for (let i = 1; i <= vortexLayers; i++) {
    // Phi-based vortex
    angles.push((baseHue * Math.pow(phi, i / 9)) % 360);
    // E-based vortex
    angles.push((baseHue * Math.pow(e, i / 9)) % 360);
    // Combined vortex
    angles.push((baseHue * Math.pow(phi * e, i / 9)) % 360);
  }
  return angles;
}

export function getPhiSpiralMandala(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const layers = 12;
  const petalCounts = [8, 13, 21, 34, 55, 89]; // Fibonacci numbers

  for (const petals of petalCounts) {
    for (let i = 0; i < petals; i++) {
      const angle = (360 / petals) * i;
      angles.push((baseHue + angle) % 360);
      // Add phi-scaled angles
      angles.push((baseHue + angle * phi) % 360);
    }
  }
  return angles;
}

export function getDoubleFibonacci(baseHue: number): number[] {
  const angles: number[] = [];
  const fib1 = [1, 1, 2, 3, 5, 8, 13, 21];
  const fib2 = [1, 2, 3, 5, 8, 13, 21, 34];

  // Combine two Fibonacci sequences
  for (let i = 0; i < fib1.length; i++) {
    const ratio1 = fib1[i] / fib1[Math.max(0, i - 1)];
    const ratio2 = fib2[i] / fib2[Math.max(0, i - 1)];

    angles.push((baseHue * ratio1) % 360);
    angles.push((baseHue * ratio2) % 360);
    angles.push((baseHue * (ratio1 * ratio2)) % 360);
  }
  return angles;
}

export function getSacredPolygonNesting(baseHue: number): number[] {
  const angles: number[] = [];
  const polygonSides = [3, 4, 5, 6, 7, 8, 9, 10, 12];
  const phi = 1.618033988749895;

  for (const sides of polygonSides) {
    for (let i = 0; i < sides; i++) {
      const angle = (360 / sides) * i;
      angles.push((baseHue + angle) % 360);
      // Add nested polygon angles
      angles.push((baseHue + angle * phi) % 360);
      angles.push((baseHue + angle / phi) % 360);
    }
  }
  return angles;
}

export function getQuantumGeometryGrid(baseHue: number): number[] {
  const angles: number[] = [];
  const planckLength = 1.616255 * Math.pow(10, -35); // Planck length in meters
  const quantumLevels = 7;
  const phi = 1.618033988749895;

  for (let i = 1; i <= quantumLevels; i++) {
    // Quantum geometric scaling
    const scale = Math.pow(phi, i) * planckLength;
    angles.push((baseHue * scale * 1e35) % 360);

    // Add quantum harmonic angles
    for (let j = 1; j <= i; j++) {
      angles.push((baseHue * Math.pow(scale * 1e35, 1 / j)) % 360);
    }
  }
  return angles;
}
