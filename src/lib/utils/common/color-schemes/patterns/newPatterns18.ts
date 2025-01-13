// Additional Sacred Geometry Pattern Functions - Natural Phenomena and Cosmic Structures
// Add these cases to the ColorSchemes enum in types/sacred-geometry-schemes.ts:
/*
GalaxySpirals
WaveInterference
CrystalFormation
PlantGrowth
FluidDynamics
QuantumOscillations
CosmicInflation
MagneticFields
BiorhythmPatterns
ResonanceWaves
*/

export function getGalaxySpirals(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const arms = 5;
  const density = 8;

  for (let a = 1; a <= arms; a++) {
    for (let d = 1; d <= density; d++) {
      // Logarithmic spiral
      const theta = (2 * Math.PI * a * d) / (arms * density);
      const r = Math.exp(theta / phi);

      // Galactic rotation
      const rotation = Math.atan2(r * Math.sin(theta), r * Math.cos(theta)) * (180 / Math.PI);

      // Dark matter halo influence
      const halo = Math.exp(-d / (density * phi));

      angles.push((baseHue + rotation) % 360);
      angles.push((baseHue + rotation * halo) % 360);
      angles.push((baseHue + rotation * Math.sqrt(a * d)) % 360);
    }
  }
  return angles;
}

export function getWaveInterference(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const waves = 6;
  const phases = 8;

  for (let w = 1; w <= waves; w++) {
    for (let p = 1; p <= phases; p++) {
      // Wave superposition
      const k1 = (2 * Math.PI * w) / waves;
      const k2 = (2 * Math.PI * p) / phases;

      // Interference pattern
      const interference = Math.sin(k1) * Math.cos(k2) + Math.cos(k1) * Math.sin(k2 * phi);

      const waveAngle = Math.atan2(interference, Math.sin(k1 + k2)) * (180 / Math.PI);

      angles.push((baseHue + waveAngle) % 360);
      angles.push((baseHue + waveAngle * phi) % 360);
      angles.push((baseHue + waveAngle * Math.sqrt(w * p)) % 360);
    }
  }
  return angles;
}

export function getCrystalFormation(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const layers = 6;
  const symmetry = 8;

  for (let l = 1; l <= layers; l++) {
    for (let s = 1; s <= symmetry; s++) {
      // Crystal lattice angles
      const latticeAngle = (360 / symmetry) * s;

      // Growth patterns
      const growth = Math.exp(l / phi) * Math.sin((s * Math.PI) / symmetry);

      // Atomic arrangement
      const arrangement =
        Math.atan2(
          growth * Math.sin((latticeAngle * Math.PI) / 180),
          growth * Math.cos((latticeAngle * Math.PI) / 180)
        ) *
        (180 / Math.PI);

      angles.push((baseHue + arrangement) % 360);
      angles.push((baseHue + arrangement * phi) % 360);
    }
  }
  return angles;
}

export function getPlantGrowth(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const iterations = 8;
  const branches = 5;

  for (let i = 1; i <= iterations; i++) {
    for (let b = 1; b <= branches; b++) {
      // Phyllotaxis angle
      const divergence = 137.5077640500378; // Golden angle
      const growthAngle = divergence * i * b;

      // Branching pattern
      const radius = Math.sqrt(i * b) * phi;
      const branchAngle =
        Math.atan2(
          radius * Math.sin((growthAngle * Math.PI) / 180),
          radius * Math.cos((growthAngle * Math.PI) / 180)
        ) *
        (180 / Math.PI);

      angles.push((baseHue + branchAngle) % 360);
      angles.push((baseHue + growthAngle) % 360);
    }
  }
  return angles;
}

export function getFluidDynamics(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const vortices = 5;
  const streamlines = 7;

  for (let v = 1; v <= vortices; v++) {
    for (let s = 1; s <= streamlines; s++) {
      // Fluid flow
      const flowAngle = (360 / streamlines) * s;

      // Vorticity
      const vortex = Math.exp(v / phi) * Math.sin((s * Math.PI) / streamlines);

      // Turbulence patterns
      const turbulence =
        Math.atan2(
          vortex * Math.cos((flowAngle * Math.PI) / 180),
          v * Math.sin((flowAngle * Math.PI) / 180)
        ) *
        (180 / Math.PI);

      angles.push((baseHue + turbulence) % 360);
      angles.push((baseHue + flowAngle * Math.sqrt(v * s)) % 360);
    }
  }
  return angles;
}

export function getQuantumOscillations(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const states = 6;
  const superpositions = 4;

  for (let n = 1; n <= states; n++) {
    for (let s = 1; s <= superpositions; s++) {
      // Quantum phase
      const phase = (2 * Math.PI * n * s) / (states * superpositions);

      // Wavefunction
      const psi = Math.exp(-n / phi) * Math.cos(phase);
      const probability = Math.sin(phase) * Math.sqrt(s);

      const quantumAngle = Math.atan2(psi, probability) * (180 / Math.PI);
      angles.push((baseHue + quantumAngle) % 360);
      angles.push((baseHue + quantumAngle * phi) % 360);
    }
  }
  return angles;
}

export function getCosmicInflation(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const epochs = 7;
  const dimensions = 4;

  for (let e = 1; e <= epochs; e++) {
    for (let d = 1; d <= dimensions; d++) {
      // Inflation field
      const fieldAngle = (360 / epochs) * e * Math.pow(phi, d);

      // Expansion rate
      const hubble = Math.exp(e / dimensions) * Math.sin((d * Math.PI) / dimensions);

      // Quantum fluctuations
      const fluctuation =
        Math.atan2(
          hubble * Math.sin((fieldAngle * Math.PI) / 180),
          hubble * Math.cos((fieldAngle * Math.PI) / 180)
        ) *
        (180 / Math.PI);

      angles.push((baseHue + fluctuation) % 360);
      angles.push((baseHue + fieldAngle * Math.sqrt(e * d)) % 360);
    }
  }
  return angles;
}

export function getMagneticFields(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const fieldLines = 6;
  const polarities = 2;

  for (let f = 1; f <= fieldLines; f++) {
    for (let p = 1; p <= polarities; p++) {
      // Magnetic dipole
      const dipoleAngle = (360 / fieldLines) * f;

      // Field strength
      const strength = Math.exp(-f / (fieldLines * phi)) * p;

      // Magnetic flux
      for (let i = 1; i <= 3; i++) {
        const fluxAngle = dipoleAngle + 120 * i * strength;
        angles.push((baseHue + fluxAngle) % 360);
        angles.push((baseHue + fluxAngle * phi) % 360);
      }
    }
  }
  return angles;
}

export function getBiorhythmPatterns(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const cycles = 3; // Physical, Emotional, Intellectual
  const periods = [23, 28, 33]; // Standard biorhythm periods

  for (let c = 0; c < cycles; c++) {
    for (let t = 1; t <= periods[c]; t++) {
      // Biorhythm wave
      const phase = (2 * Math.PI * t) / periods[c];

      // Cycle interaction
      const interaction = Math.sin(phase) * Math.cos(phase * phi);

      // Resonance pattern
      const resonance =
        Math.atan2(interaction, Math.sin(phase + (c * 2 * Math.PI) / cycles)) * (180 / Math.PI);

      angles.push((baseHue + resonance) % 360);
      angles.push((baseHue + resonance * phi) % 360);
    }
  }
  return angles;
}

export function getResonanceWaves(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const harmonics = 7;
  const nodes = 5;

  for (let h = 1; h <= harmonics; h++) {
    for (let n = 1; n <= nodes; n++) {
      // Standing wave
      const frequency = (h * Math.PI) / harmonics;
      const position = (n * Math.PI) / nodes;

      // Wave superposition
      const amplitude = Math.sin(frequency) * Math.cos(position * phi);
      const phase = Math.cos(frequency) * Math.sin(position);

      // Resonance pattern
      const resonanceAngle = Math.atan2(amplitude, phase) * (180 / Math.PI);
      angles.push((baseHue + resonanceAngle) % 360);
      angles.push((baseHue + resonanceAngle * Math.sqrt(h * n)) % 360);
      angles.push((baseHue + (resonanceAngle * h) / n) % 360);
    }
  }
  return angles;
}

// ... More patterns to follow
