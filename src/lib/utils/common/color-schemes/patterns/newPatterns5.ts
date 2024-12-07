// Additional Sacred Geometry Pattern Functions to be merged into colorUtils.svelte.ts

// Add these cases to the ColorSchemes enum in types/color.ts:
/*
CymaticPatterns
SacredPolyhedra
QuantumEntanglement
CosmicMicrostructures
TempleGeometry
ChakraVortex
GalacticSpiral
MerkabaField
SoundGeometry
CrystallineGrid
*/

// Add these cases to the switch statement in generateSchemeHues:
/*
case ColorSchemes.CymaticPatterns:
    return getCymaticPatterns(baseHue);
case ColorSchemes.SacredPolyhedra:
    return getSacredPolyhedra(baseHue);
case ColorSchemes.QuantumEntanglement:
    return getQuantumEntanglement(baseHue);
case ColorSchemes.CosmicMicrostructures:
    return getCosmicMicrostructures(baseHue);
case ColorSchemes.TempleGeometry:
    return getTempleGeometry(baseHue);
case ColorSchemes.ChakraVortex:
    return getChakraVortex(baseHue);
case ColorSchemes.GalacticSpiral:
    return getGalacticSpiral(baseHue);
case ColorSchemes.MerkabaField:
    return getMerkabaField(baseHue);
case ColorSchemes.SoundGeometry:
    return getSoundGeometry(baseHue);
case ColorSchemes.CrystallineGrid:
    return getCrystallineGrid(baseHue);
*/

export function getCymaticPatterns(baseHue: number): number[] {
  const angles: number[] = [];
  // Frequencies that create specific cymatic patterns
  const frequencies = [
    24, // Circle
    48, // Square
    96, // Hexagon
    144, // Complex mandala
    192, // Star pattern
    384 // Flower of life pattern
  ];

  for (const freq of frequencies) {
    // Generate nodal points for each frequency
    for (let i = 0; i < 12; i++) {
      const theta = (2 * Math.PI * i) / 12;
      const r = Math.sin(freq * theta);
      const angle = (theta * 180) / Math.PI;

      angles.push((baseHue + angle) % 360);
      angles.push((baseHue + angle * r) % 360);
      // Add interference patterns
      angles.push((baseHue + angle * Math.abs(Math.sin(freq))) % 360);
    }
  }
  return angles;
}

export function getSacredPolyhedra(baseHue: number): number[] {
  const angles: number[] = [];
  const polyhedra = {
    tetrahedron: { vertices: 4, faces: 4, edges: 6 },
    cube: { vertices: 8, faces: 6, edges: 12 },
    octahedron: { vertices: 6, faces: 8, edges: 12 },
    dodecahedron: { vertices: 20, faces: 12, edges: 30 },
    icosahedron: { vertices: 12, faces: 20, edges: 30 }
  };

  for (const [name, data] of Object.entries(polyhedra)) {
    // Vertex angles
    for (let i = 0; i < data.vertices; i++) {
      angles.push((baseHue + (360 * i) / data.vertices) % 360);
    }
    // Face center angles
    for (let i = 0; i < data.faces; i++) {
      angles.push((baseHue + (360 * i) / data.faces) % 360);
    }
    // Edge midpoint angles
    for (let i = 0; i < data.edges; i++) {
      angles.push((baseHue + (360 * i) / data.edges) % 360);
    }
  }
  return angles;
}

export function getQuantumEntanglement(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const entangledStates = 8;
  const superpositions = 3;

  for (let state = 0; state < entangledStates; state++) {
    const baseAngle = (360 * state) / entangledStates;

    // Primary state
    angles.push((baseHue + baseAngle) % 360);

    // Entangled partner state
    angles.push((baseHue + baseAngle + 180) % 360);

    // Superposition states
    for (let sup = 1; sup <= superpositions; sup++) {
      const supAngle = baseAngle + (360 * sup * phi) / superpositions;
      angles.push((baseHue + supAngle) % 360);
      angles.push((baseHue + supAngle + 180) % 360);
    }
  }
  return angles;
}

export function getCosmicMicrostructures(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const scales = 7; // Seven scales of manifestation
  const dimensions = 4; // Four fundamental forces

  for (let scale = 1; scale <= scales; scale++) {
    for (let dim = 1; dim <= dimensions; dim++) {
      // Scale-based angles
      const scaleAngle = (360 * scale * phi) / scales;
      angles.push((baseHue + scaleAngle) % 360);

      // Dimensional interactions
      const dimAngle = (360 * dim * Math.sqrt(scale)) / dimensions;
      angles.push((baseHue + dimAngle) % 360);

      // Cross-scale resonance
      angles.push((baseHue + (scaleAngle * dimAngle) / 360) % 360);
    }
  }
  return angles;
}

export function getTempleGeometry(baseHue: number): number[] {
  const angles: number[] = [];
  const sacredRatios = [1, 1.414, 1.618, 1.732, 2, 2.236, 2.618, 3];
  const templeAngles = [36, 45, 54, 60, 72, 108, 120];

  // Sacred proportions from ancient temples
  for (const ratio of sacredRatios) {
    angles.push((baseHue * ratio) % 360);

    // Temple corner angles
    for (const angle of templeAngles) {
      angles.push((baseHue + angle * ratio) % 360);

      // Sacred intersections
      angles.push((baseHue + angle * Math.sqrt(ratio)) % 360);
    }
  }

  // Add specific temple geometry angles
  const specificAngles = [
    51.51, // Great Pyramid
    43.5, // Parthenon
    23.5, // Earth's axial tilt
    19.47, // Tetrahedral angle
    26.57, // Sacred mean
    31.72, // Golden angle
    137.5 // Phi angle
  ];

  for (const angle of specificAngles) {
    angles.push((baseHue + angle) % 360);
  }

  return angles;
}

export function getChakraVortex(baseHue: number): number[] {
  const angles: number[] = [];
  const chakras = 7;
  const vortexPoints = 12;
  const phi = 1.618033988749895;

  for (let chakra = 1; chakra <= chakras; chakra++) {
    // Base frequency for each chakra
    const baseFreq = 396 + (chakra - 1) * 57; // Starting at 396Hz

    for (let point = 0; point < vortexPoints; point++) {
      // Vortex spiral
      const theta = (2 * Math.PI * point) / vortexPoints;
      const r = Math.log(chakra + 1) * phi;

      // Calculate angles based on vortex dynamics
      const vortexAngle = (theta * 180) / Math.PI;
      angles.push((baseHue + vortexAngle) % 360);

      // Frequency-based angles
      angles.push((baseHue + (baseFreq / 396) * vortexAngle) % 360);

      // Chakra-specific sacred ratios
      angles.push((baseHue + vortexAngle * r) % 360);
    }
  }
  return angles;
}

export function getGalacticSpiral(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const spiralArms = 4;
  const rotations = 3;

  for (let arm = 0; arm < spiralArms; arm++) {
    const armOffset = (360 / spiralArms) * arm;

    for (let t = 0; t <= rotations * Math.PI; t += Math.PI / 12) {
      // Logarithmic spiral
      const r = Math.exp(phi * t);
      const theta = (t * 180) / Math.PI;

      // Spiral arm angles
      angles.push((baseHue + armOffset + theta) % 360);

      // Golden ratio based harmonics
      angles.push((baseHue + armOffset + theta * phi) % 360);

      // Galactic core resonance
      angles.push((baseHue + armOffset + theta / phi) % 360);
    }
  }
  return angles;
}

export function getMerkabaField(baseHue: number): number[] {
  const angles: number[] = [];
  const fieldLayers = 8;
  const vertices = 24; // Double tetrahedron
  const phi = 1.618033988749895;

  for (let layer = 1; layer <= fieldLayers; layer++) {
    const layerAngle = (360 / fieldLayers) * layer;

    // Counter-rotating tetrahedra
    for (let v = 0; v < vertices; v++) {
      const vertexAngle = (360 / vertices) * v;

      // Primary rotation
      angles.push((baseHue + layerAngle + vertexAngle) % 360);

      // Counter rotation
      angles.push((baseHue + layerAngle - vertexAngle) % 360);

      // Phi-based field harmonics
      angles.push((baseHue + layerAngle + vertexAngle * phi) % 360);
    }

    // Field resonance points
    angles.push((baseHue + layerAngle * phi) % 360);
    angles.push((baseHue + layerAngle * Math.sqrt(phi)) % 360);
  }
  return angles;
}

export function getSoundGeometry(baseHue: number): number[] {
  const angles: number[] = [];
  // Harmonic series frequencies
  const harmonics = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Solfeggio frequencies normalized
  const solfeggio = [396, 417, 528, 639, 741, 852].map((f) => f / 396);
  const phi = 1.618033988749895;

  for (const harmonic of harmonics) {
    // Harmonic angles
    angles.push((baseHue * harmonic) % 360);

    // Overtone series
    angles.push((baseHue * Math.log2(harmonic)) % 360);

    // Undertone series
    angles.push((baseHue / harmonic) % 360);

    // Phi-based harmonics
    angles.push((baseHue * (harmonic * phi)) % 360);
  }

  for (const freq of solfeggio) {
    // Solfeggio-based angles
    angles.push((baseHue * freq) % 360);

    // Sacred frequency interactions
    angles.push((baseHue * (freq * phi)) % 360);

    // Harmonic resonance
    angles.push((baseHue * Math.sqrt(freq)) % 360);
  }
  return angles;
}

export function getCrystallineGrid(baseHue: number): number[] {
  const angles: number[] = [];
  const gridPoints = 6;
  const layers = 5;
  const phi = 1.618033988749895;

  for (let layer = 1; layer <= layers; layer++) {
    const layerScale = Math.pow(phi, layer);

    for (let x = 0; x < gridPoints; x++) {
      for (let y = 0; y < gridPoints; y++) {
        // Grid point angles
        const gridAngle = (x * 60 + y * 30) * layerScale;
        angles.push((baseHue + gridAngle) % 360);

        // Crystalline resonance
        angles.push((baseHue + gridAngle * phi) % 360);

        // Layer interactions
        angles.push((baseHue + gridAngle / layer) % 360);

        // Sacred geometry alignments
        if ((x + y) % 2 === 0) {
          angles.push((baseHue + gridAngle * Math.sqrt(phi)) % 360);
        }
      }
    }
  }
  return angles;
}
