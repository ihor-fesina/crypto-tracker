import type { AllowedTimePeriods } from './coin.types';

export type StatType = 'numeric' | 'percent';

export interface CoinHistoryPoint {
    price: string;
    timestamp: number;
}

export interface CoinHistoryApiResponse {
    status: 'success';
    data: {
        change: string;
        history: CoinHistoryPoint[];
    };
}

export interface CoinHistoryQueryParams {
    uuid: string;
    period: AllowedTimePeriods;
} 