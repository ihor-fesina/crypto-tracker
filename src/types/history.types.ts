export type AllowedTimePeriods = '1h' | '3h' | '12h' | '24h' | '7d' | '30d' | '3m' | '1y' | '3y' | '5y';

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
export interface CoinsQueryParams {
    offset: string;
    limit: string;
}