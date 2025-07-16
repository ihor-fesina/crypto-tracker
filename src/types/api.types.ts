import type { CoinStats, Stats } from './stats.types';
import type { CoinDetailed, CoinDetail } from './coin.types';

export interface CoinsApiResponse {
    status: 'success';
    data: {
        stats: CoinStats;
        coins: CoinDetailed[];
    };
}

export interface StatsApiResponse {
    status: 'success';
    data: Stats;
}

export interface CoinDetailApiResponse {
    status: 'success';
    data: {
        coin: CoinDetail;
    };
} 