import type { SimpleCoin } from './coin.types';

export interface CoinStats {
    total: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
}

export interface MarketStats {
    referenceCurrencyRate: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
    btcDominance: number;
    btcMarketCap: string;
}

export interface Stats extends MarketStats {
    bestCoins: SimpleCoin[];
    newestCoins: SimpleCoin[];
} 