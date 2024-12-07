/**
 * Set 1: Fundamental Sacred Geometry Patterns
 */

export function getVesicaPiscesSequence(baseHue: number): number[] {
  const angles: number[] = [];
  const vesicaRatio = Math.sqrt(3);
  const iterations = 7;

  for (let i = 0; i < iterations; i++) {
    angles.push((baseHue + i * 60) % 360);
    angles.push((baseHue + i * 60 * vesicaRatio) % 360);
    angles.push((baseHue + i * 60 * (vesicaRatio / 2)) % 360);
  }
  return angles;
}

export function getVitruvianProportions(baseHue: number): number[] {
  const angles: number[] = [];
  const vitruvianRatio = 1.618034;
  const bodyPoints = 8;

  for (let i = 0; i < bodyPoints; i++) {
    angles.push((baseHue + i * 45) % 360);
    angles.push((baseHue + i * 45 * vitruvianRatio) % 360);
    angles.push((baseHue + i * 90) % 360);
  }
  return angles;
}

export function getTorusKnots(baseHue: number): number[] {
  const angles: number[] = [];
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
  const vertices = 16;
  const rotationAngle = 24;

  for (let i = 0; i < vertices; i++) {
    angles.push((baseHue + i * 22.5) % 360);
    angles.push((baseHue + (i * 22.5 + rotationAngle)) % 360);
  }
  return angles;
}

export function getPythagoreanSpiral(baseHue: number): number[] {
  const angles: number[] = [];
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
  const alpha = Math.PI / 6;
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
  const keplerTriangle = [31.7174, 67.4948, 80.7878];
  const egyptianTriangle = [36.87, 53.13, 90];
  const pythagoreanTriangle = [30, 60, 90];

  for (const angle of [...keplerTriangle, ...egyptianTriangle, ...pythagoreanTriangle]) {
    angles.push((baseHue + angle) % 360);
  }
  return angles;
}

export function getFlowerOfLifeHarmonics(baseHue: number): number[] {
  const angles: number[] = [];
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
  const directions = 6;
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
  const tetrahedronAngles = [0, 109.47, 219.47, 329.47];
  const cubeOctahedronAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const dodecaIcosaAngles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];

  for (const angle of [...tetrahedronAngles, ...cubeOctahedronAngles, ...dodecaIcosaAngles]) {
    angles.push((baseHue + angle) % 360);
  }
  return angles;
}
