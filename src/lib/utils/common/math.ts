import type { ColorSchemes } from '$lib/types/vscode/color';

export const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};
export const randomEnum = (enumObj: ColorSchemes) => {
  const enumValues = Object.values(enumObj).filter(
    (value) => typeof value === 'string' && isNaN(parseInt(value))
  );
  return enumValues[Math.floor(Math.random() * enumValues.length)];
};
// Format number to 1 decimal place
export const formatDecimal = (num: number) => Number(num.toFixed(1));

// Utility function to convert degrees to radians
export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
