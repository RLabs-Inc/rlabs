// Additional Sacred Geometry Pattern Functions - Dissipative Systems and Coherent States
// These patterns are already added to the ColorSchemes enum

export function getDissipativeSystems(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const modes = 9;
  const dampings = 6;
  const couplings = 5;

  for (let m = 1; m <= modes; m++) {
    for (let d = 1; d <= dampings; d++) {
      // Dissipation dynamics
      const damping = Math.exp(-d / dampings) * Math.pow(phi, m / modes);

      for (let c = 1; c <= couplings; c++) {
        // System-environment coupling
        const interaction = (2 * Math.PI * c * m) / (couplings * modes);
        const loss = Math.sin(interaction) * damping;
        const decoherence = Math.cos(interaction * phi) * Math.sqrt(d);

        // Lindblad evolution
        const lindbladAngle = Math.atan2(loss, decoherence) * (180 / Math.PI);
        angles.push((baseHue + lindbladAngle) % 360);
        angles.push((baseHue + lindbladAngle * phi) % 360);

        // Steady states
        for (let s = 1; s <= m; s++) {
          const steady = lindbladAngle * Math.sin((s * Math.PI) / m);
          angles.push((baseHue + steady) % 360);
          angles.push((baseHue + steady * Math.sqrt(c * d)) % 360);

          // Quantum jumps
          const jump = steady * Math.exp(-s / modes);
          angles.push((baseHue + jump * phi) % 360);
        }
      }
    }
  }
  return angles;
}

export function getCoherentStates(baseHue: number): number[] {
  const angles: number[] = [baseHue]; // Start with base hue
  const phi = 1.618033988749895;
  const amplitudes = 8;
  const phases = 7;
  const squeezing = 4;

  for (let a = 1; a <= amplitudes; a++) {
    for (let p = 1; p <= phases; p++) {
      // Coherent state parameters
      const alpha = Math.exp(-p / phases) * Math.pow(phi, a / amplitudes);

      for (let s = 1; s <= squeezing; s++) {
        // Squeezed states
        const squeeze = (2 * Math.PI * s * a) / (squeezing * amplitudes);
        const displacement = Math.sin(squeeze) * alpha;
        const uncertainty = Math.cos(squeeze * phi) * Math.sqrt(p);

        // Minimum uncertainty
        const coherentAngle = Math.atan2(displacement, uncertainty) * (180 / Math.PI);
        angles.push((baseHue + coherentAngle) % 360);
        angles.push((baseHue + coherentAngle * phi) % 360);

        // Wigner function
        for (let w = 1; w <= s; w++) {
          const wigner = coherentAngle * Math.sin((w * Math.PI) / s);
          angles.push((baseHue + wigner) % 360);
          angles.push((baseHue + wigner * Math.sqrt(a * p)) % 360);

          // Phase space rotations
          const rotation = wigner * Math.exp(-w / squeezing);
          angles.push((baseHue + rotation * phi) % 360);
        }
      }
    }
  }
  return angles;
}
