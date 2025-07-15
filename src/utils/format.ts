import millify from 'millify';
import type { Stats } from '../types.js'

export const getStatValue = <K extends keyof Stats>(
    stats: Stats,
    key: K,
): string => {

    const value = stats[key];

    if (typeof value === 'number') {
        return (key === 'btcDominance' ? (value.toFixed(2)+'%') : millify(value))
    }

    if (typeof value === 'string') {
        const parsed = Number(value.trim());
        return isNaN(parsed) ? 'N/A' :(key === 'btcDominance' ? (parsed.toFixed(2)+'%') : millify(parsed));
    }

    return 'N/A';
};
