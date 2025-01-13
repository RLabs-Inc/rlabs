// Additional Sacred Geometry Pattern Functions - Hyperbolic Geometry and Tessellations
// Add these cases to the ColorSchemes enum in types/sacred-geometry-schemes.ts:
/*
HyperbolicTessellations
PoincareDisc
KleinModel
ModularGroup
FuchsianGroups
HyperbolicKnots
UniformTilings
SchottkyGroups
AutomorphicForms
GeodeticFlows
*/

export function getHyperbolicTessellations(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const p = 7; // p-gon
  const q = 3; // q vertices meeting at each vertex

  for (let i = 1; i <= p; i++) {
    for (let j = 1; j <= q; j++) {
      // Hyperbolic angle
      const theta = (2 * Math.PI * i) / p;

      // Tessellation mapping
      const z = Math.tanh(j * Math.atanh(Math.sin(theta)));
      const w = Math.cosh(Math.atanh(Math.cos(theta)));

      const tessAngle = Math.atan2(z, w) * (180 / Math.PI);
      angles.push((baseHue + tessAngle) % 360);
      angles.push((baseHue + tessAngle * phi) % 360);
      angles.push((baseHue + tessAngle * Math.sqrt(p * q)) % 360);
    }
  }
  return angles;
}

export function getPoincareDisc(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const orbits = 5;
  const points = 8;

  for (let o = 1; o <= orbits; o++) {
    for (let p = 1; p <= points; p++) {
      // Möbius transformation in disc
      const theta = (2 * Math.PI * p) / points;
      const r = Math.tanh((o * Math.PI) / orbits);

      // Complex coordinates
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);

      const discAngle = Math.atan2(y, x) * (180 / Math.PI);
      angles.push((baseHue + discAngle) % 360);
      angles.push((baseHue + discAngle * phi) % 360);
      angles.push((baseHue + (discAngle * o) / p) % 360);
    }
  }
  return angles;
}

export function getModularGroup(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const levels = 6;
  const transformations = 4;

  for (let l = 1; l <= levels; l++) {
    for (let t = 1; t <= transformations; t++) {
      // Modular transformations
      const a = Math.cos((2 * Math.PI * t) / transformations);
      const b = Math.sin((2 * Math.PI * l) / levels);
      const c = -b;
      const d = a;

      // Action on upper half-plane
      const modularAngle = Math.atan2(a * d - b * c, l * t) * (180 / Math.PI);
      angles.push((baseHue + modularAngle) % 360);
      angles.push((baseHue + modularAngle * phi) % 360);
      angles.push((baseHue + modularAngle * Math.sqrt(l * t)) % 360);
    }
  }
  return angles;
}

export function getFuchsianGroups(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const generators = 4;
  const iterations = 5;

  for (let g = 1; g <= generators; g++) {
    for (let i = 1; i <= iterations; i++) {
      // Hyperbolic isometries
      const theta = (2 * Math.PI * g) / generators;
      const rho = Math.tanh((i * Math.PI) / iterations);

      // Group action
      const real = rho * Math.cos(theta);
      const imag = rho * Math.sin(theta);

      const groupAngle = Math.atan2(imag, real) * (180 / Math.PI);
      angles.push((baseHue + groupAngle) % 360);
      angles.push((baseHue + groupAngle * phi) % 360);
      angles.push((baseHue + groupAngle * Math.sqrt(g * i)) % 360);
    }
  }
  return angles;
}

export function getUniformTilings(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const vertices = 8;
  const edges = 12;

  for (let v = 1; v <= vertices; v++) {
    for (let e = 1; e <= edges; e++) {
      // Vertex configuration
      const vertexAngle = (360 / vertices) * v;

      // Edge configuration
      const edgeAngle = (360 / edges) * e;

      // Tiling symmetries
      const symmetryAngle =
        Math.atan2(
          Math.sin((vertexAngle * Math.PI) / 180) * e,
          Math.cos((edgeAngle * Math.PI) / 180) * v
        ) *
        (180 / Math.PI);

      angles.push((baseHue + symmetryAngle) % 360);
      angles.push((baseHue + symmetryAngle * phi) % 360);
      angles.push((baseHue + (symmetryAngle * v) / e) % 360);
    }
  }
  return angles;
}

export function getAutomorphicForms(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const weight = 4;
  const level = 6;

  for (let w = 1; w <= weight; w++) {
    for (let l = 1; l <= level; l++) {
      // Automorphic factor
      const theta = (2 * Math.PI * w * l) / (weight * level);

      // Fourier expansion
      const real = Math.cos(theta) * Math.exp((-w * l) / (weight * level));
      const imag = Math.sin(theta) * Math.exp((-l * w) / (level * weight));

      const formAngle = Math.atan2(imag, real) * (180 / Math.PI);
      angles.push((baseHue + formAngle) % 360);
      angles.push((baseHue + formAngle * phi) % 360);
      angles.push((baseHue + formAngle * Math.sqrt(w * l)) % 360);
    }
  }
  return angles;
}

export function getGeodeticFlows(baseHue: number): number[] {
  const angles: number[] = [];
  const phi = 1.618033988749895;
  const trajectories = 5;
  const steps = 8;

  for (let t = 1; t <= trajectories; t++) {
    for (let s = 1; s <= steps; s++) {
      // Geodesic path
      const pathAngle = (360 / trajectories) * t;
      const flowAngle = (360 / steps) * s;

      // Flow dynamics
      const flow = Math.exp(t * Math.cos((flowAngle * Math.PI) / 180));
      const divergence = Math.sin((pathAngle * Math.PI) / 180) * s;

      angles.push((baseHue + pathAngle * flow) % 360);
      angles.push((baseHue + flowAngle * divergence) % 360);
      angles.push((baseHue + (pathAngle + flowAngle) * phi) % 360);
    }
  }
  return angles;
}
