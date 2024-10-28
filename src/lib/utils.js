import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function getTailwindColors () {
  const fullConfig = resolveConfig(tailwindConfig);
  return fullConfig.theme.colors
} 