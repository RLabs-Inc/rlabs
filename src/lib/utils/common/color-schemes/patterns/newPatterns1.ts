import { degreesToRadians } from '$lib/utils/common/math';

export function getSriYantraAngles(baseHue: number): number[] {
  const angles: number[] = [];
  for (let i = 1; i <= 9; i++) {
    angles.push((baseHue + i * 20) % 360);
  }
  return angles;
}

export function getKabbalahTreeOfLife(baseHue: number): number[] {
  const values: number[] = [];
  for (let i = 1; i <= 10; i++) {
    values.push((baseHue + i * 15) % 360);
  }
  return values;
}

export function getTorus(baseHue: number): number[] {
  const u = degreesToRadians(baseHue % 360);
  const v = degreesToRadians((baseHue * 2) % 360);
  const R = 1; // Major radius
  const r = 0.5; // Minor radius
  const x = ((R + r * Math.cos(v)) * Math.cos(u)) % 360;
  const y = ((R + r * Math.cos(v)) * Math.sin(u)) % 360;
  const z = (r * Math.sin(v)) % 360;
  return [x, y, z];
}

export function getMandelbrotSet(baseHue: number): number[] {
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

export function getSierpinskiCarpet(baseHue: number): number[] {
  const triangleIterations = 5;
  const areas: number[] = [];
  let area = baseHue;
  for (let i = 0; i < triangleIterations; i++) {
    areas.push(area % 360);
    area = area / 2;
  }
  return areas;
}

export function getKochSnowflake(baseHue: number): number[] {
  const flakeIterations = 5;
  const lengths: number[] = [];
  let length = baseHue;
  for (let i = 0; i < flakeIterations; i++) {
    lengths.push(length % 360);
    length = length / 3;
  }
  return lengths;
}

export function getCelticKnot(baseHue: number): number[] {
  const knotAngles: number[] = [];
  for (let i = 1; i <= 8; i++) {
    const angle = (baseHue + i * 45) % 360;
    knotAngles.push(angle);
  }
  return knotAngles;
}

export function getLabirinth(baseHue: number): number[] {
  const paths: number[] = [];
  for (let i = 1; i <= 7; i++) {
    paths.push((baseHue + i * 10) % 360);
  }
  return paths;
}

export function getYinYang(baseHue: number): number[] {
  const proportion = Math.abs(Math.sin(degreesToRadians(baseHue)));
  return [(proportion * 360) % 360, ((1 - proportion) * 360) % 360];
}

export function getStarTetrahedron(baseHue: number): number[] {
  const starAngles: number[] = [];
  for (let i = 0; i < 4; i++) {
    starAngles.push((baseHue + i * 90) % 360);
  }
  return starAngles;
}

export function getHamsaLengths(baseHue: number): number[] {
  const hamsaLengths: number[] = [
    (baseHue * 0.5) % 360,
    (baseHue * 0.6) % 360,
    (baseHue * 0.7) % 360
  ];
  return hamsaLengths;
}

export function getEnneagramAngles(baseHue: number): number[] {
  const enneagramAngles: number[] = [];
  for (let i = 0; i < 9; i++) {
    enneagramAngles.push((baseHue + i * 40) % 360);
  }
  return enneagramAngles;
}

export function getHexagramAngles(baseHue: number): number[] {
  const hexagramAngles: number[] = [];
  for (let i = 0; i < 6; i++) {
    hexagramAngles.push((baseHue + i * 60) % 360);
  }
  return hexagramAngles;
}

export function getChakraSymbols(baseHue: number): number[] {
  const chakraValues: number[] = [];
  for (let i = 1; i <= 7; i++) {
    chakraValues.push((baseHue + i * 30) % 360);
  }
  return chakraValues;
}

export function getSpiralDynamics(baseHue: number): number[] {
  const spiralValues: number[] = [];
  for (let i = 1; i <= 6; i++) {
    spiralValues.push((baseHue * Math.pow(1.5, i)) % 360);
  }
  return spiralValues;
}

export function getDoubleTorus(baseHue: number): number[] {
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

export function getRosettePattern(baseHue: number): number[] {
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

export function getNestedPolygons(baseHue: number): number[] {
  const sides = Math.floor((baseHue % 360) / 30) + 3; // Number of sides from 3 to 15
  const layers = 5; // Number of nested layers
  const polygons: number[] = [];
  for (let i = 1; i <= layers; i++) {
    polygons.push((sides * i) % 360);
  }
  return polygons;
}

// // Pattern generation functions
// export function getSriYantraAngles(baseHue: number): number[] {
//   const angles: number[] = [];
//   for (let i = 1; i <= 9; i++) {
//     angles.push((baseHue + i * 20) % 360);
//   }
//   return angles;
// }

// export function getKabbalahTreeOfLife(baseHue: number): number[] {
//   const values: number[] = [];
//   for (let i = 1; i <= 10; i++) {
//     values.push((baseHue + i * 15) % 360);
//   }
//   return values;
// }

// export function getTorus(baseHue: number): number[] {
//   const u = degreesToRadians(baseHue % 360);
//   const v = degreesToRadians((baseHue * 2) % 360);
//   const R = 1;
//   const r = 0.5;
//   const x = ((R + r * Math.cos(v)) * Math.cos(u)) % 360;
//   const y = ((R + r * Math.cos(v)) * Math.sin(u)) % 360;
//   const z = (r * Math.sin(v)) % 360;
//   return [x, y, z];
// }

// export function getMandelbrotSet(baseHue: number): number[] {
//   const c_re = Math.cos(degreesToRadians(baseHue));
//   const c_im = Math.sin(degreesToRadians(baseHue));
//   const maxIterations = 10;
//   let z_re = 0;
//   let z_im = 0;
//   const iterations: number[] = [];
//   for (let i = 0; i < maxIterations; i++) {
//     const z_re_new = z_re * z_re - z_im * z_im + c_re;
//     const z_im_new = 2 * z_re * z_im + c_im;
//     z_re = z_re_new;
//     z_im = z_im_new;
//     iterations.push(Math.sqrt(z_re * z_re + z_im * z_im) % 360);
//     if (z_re * z_re + z_im * z_im > 4) break;
//   }
//   return iterations;
// }

// export function getSierpinskiCarpet(baseHue: number): number[] {
//   const triangleIterations = 5;
//   const areas: number[] = [];
//   let area = baseHue;
//   for (let i = 0; i < triangleIterations; i++) {
//     areas.push(area % 360);
//     area = area / 2;
//   }
//   return areas;
// }

// export function getKochSnowflake(baseHue: number): number[] {
//   const flakeIterations = 5;
//   const lengths: number[] = [];
//   let length = baseHue;
//   for (let i = 0; i < flakeIterations; i++) {
//     lengths.push(length % 360);
//     length = length / 3;
//   }
//   return lengths;
// }

// export function getCelticKnot(baseHue: number): number[] {
//   const knotAngles: number[] = [];
//   for (let i = 1; i <= 8; i++) {
//     const angle = (baseHue + i * 45) % 360;
//     knotAngles.push(angle);
//   }
//   return knotAngles;
// }

// export function getLabirinth(baseHue: number): number[] {
//   const paths: number[] = [];
//   for (let i = 1; i <= 7; i++) {
//     paths.push((baseHue + i * 10) % 360);
//   }
//   return paths;
// }

// export function getYinYang(baseHue: number): number[] {
//   const proportion = Math.abs(Math.sin(degreesToRadians(baseHue)));
//   return [(proportion * 360) % 360, ((1 - proportion) * 360) % 360];
// }

// export function getStarTetrahedron(baseHue: number): number[] {
//   const starAngles: number[] = [];
//   for (let i = 0; i < 4; i++) {
//     starAngles.push((baseHue + i * 90) % 360);
//   }
//   return starAngles;
// }

// export function getHamsaLengths(baseHue: number): number[] {
//   const hamsaLengths: number[] = [
//     (baseHue * 0.5) % 360,
//     (baseHue * 0.6) % 360,
//     (baseHue * 0.7) % 360
//   ];
//   return hamsaLengths;
// }

// export function getEnneagramAngles(baseHue: number): number[] {
//   const enneagramAngles: number[] = [];
//   for (let i = 0; i < 9; i++) {
//     enneagramAngles.push((baseHue + i * 40) % 360);
//   }
//   return enneagramAngles;
// }

// export function getHexagramAngles(baseHue: number): number[] {
//   const hexagramAngles: number[] = [];
//   for (let i = 0; i < 6; i++) {
//     hexagramAngles.push((baseHue + i * 60) % 360);
//   }
//   return hexagramAngles;
// }

// export function getChakraSymbols(baseHue: number): number[] {
//   const chakraValues: number[] = [];
//   for (let i = 1; i <= 7; i++) {
//     chakraValues.push((baseHue + i * 30) % 360);
//   }
//   return chakraValues;
// }

// export function getSpiralDynamics(baseHue: number): number[] {
//   const spiralValues: number[] = [];
//   for (let i = 1; i <= 6; i++) {
//     spiralValues.push((baseHue * Math.pow(1.5, i)) % 360);
//   }
//   return spiralValues;
// }

// export function getDoubleTorus(baseHue: number): number[] {
//   const du = degreesToRadians(baseHue % 360);
//   const dv = degreesToRadians((baseHue * 2) % 360);
//   const R1 = 1;
//   const r1 = 0.5;
//   const R2 = 1;
//   const r2 = 0.5;

//   const x1 = ((R1 + r1 * Math.cos(dv)) * Math.cos(du)) % 360;
//   const y1 = ((R1 + r1 * Math.cos(dv)) * Math.sin(du)) % 360;
//   const z1 = (r1 * Math.sin(dv)) % 360;

//   const x2 = ((R2 + r2 * Math.cos(dv + Math.PI)) * Math.cos(du + Math.PI)) % 360;
//   const y2 = ((R2 + r2 * Math.cos(dv + Math.PI)) * Math.sin(du + Math.PI)) % 360;
//   const z2 = (r2 * Math.sin(dv + Math.PI)) % 360;
//   return [x1, y1, z1, x2, y2, z2];
// }

// export function getRosettePattern(baseHue: number): number[] {
//   const k = ((baseHue % 360) / 360) * 10 + 2;
//   const points: number[] = [];
//   const numPoints = 10;
//   for (let i = 0; i < numPoints; i++) {
//     const theta = (2 * Math.PI * i) / numPoints;
//     const r = Math.cos(k * theta) % 360;
//     points.push(r);
//   }
//   return points;
// }

// export function getNestedPolygons(baseHue: number): number[] {
//   const sides = Math.floor((baseHue % 360) / 30) + 3;
//   const layers = 5;
//   const polygons: number[] = [];
//   for (let i = 1; i <= layers; i++) {
//     polygons.push((sides * i) % 360);
//   }
//   return polygons;
// }
