import type { ColorSchemes } from '$lib/types/color';

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
  const enumValues = Object.values(enumObj).filter((value) => typeof value === 'string');
  return enumValues[Math.floor(Math.random() * enumValues.length)];
};
