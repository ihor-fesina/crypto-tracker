import millify from 'millify';

const formatValue = (   value: number,
                        type: 'numeric' | 'percent'):string => {
    return (type === 'percent' ? (value.toFixed(2)+'%') : millify(value))
}

export const getStatValue = (
    value: unknown,
    type: 'numeric' | 'percent'
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
