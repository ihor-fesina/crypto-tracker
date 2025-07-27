import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import millify from 'millify';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const formatValue = (value: number,
                     type: 'numeric' | 'percent' | 'origin'): string => {
  switch (type) {
    case 'percent':
      return value.toFixed(2) + '%'
    case 'numeric':
      return millify(value)
    case 'origin':
      return String(value)
    default:
      return String(value)
  }
}

export const getStatValue = (
    value: unknown,
    type: 'numeric' | 'percent' | 'origin'
): string => {
  if (typeof value === 'number') {
    return formatValue(value, type)
  }
  if (typeof value === 'string') {
    const numericValue = Number(value.trim());
    return isNaN(numericValue) ? 'N/A' : formatValue(numericValue, type)
  }
  return 'N/A';
};