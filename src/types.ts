export interface Coin {
    uuid: string;
    symbol: string;
    name: string;
    iconUrl: string;
    coinrankingUrl: string;
}

export interface Stats {
    referenceCurrencyRate: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
    btcDominance: number;
    btcMarketCap: string;
    bestCoins: Coin[];
    newestCoins: Coin[];
}

export interface StatsApiResponse {
    status: 'success';
    data: Stats
}

export interface ApiError {
    status: 'fail';
    type: string;
    message: string;
}
