export interface SimpleCoin {
    uuid: string;
    symbol: string;
    name: string;
    iconUrl: string;
    coinrankingUrl: string;
}

export interface CoinDetailed extends SimpleCoin {
    color: string;
    "24hVolume": string;
    marketCap: string;
    price: string;
    btcPrice: string;
    listedAt: number | null;
    change: string;
    rank: number;
    sparkline: string[];
    contractAddresses: string[];
    isWrappedTrustless: boolean;
    wrappedTo: string | null;
}

export interface CoinStats {
    total: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
}

export interface CoinsApiResponse {
    status: 'success';
    data: {
        stats: CoinStats;
        coins: CoinDetailed[];
    };
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
    bestCoins: SimpleCoin[];
    newestCoins: SimpleCoin[];
}

export interface StatsApiResponse {
    status: 'success';
    data: {
        referenceCurrencyRate: number;
        totalCoins: number;
        totalMarkets: number;
        totalExchanges: number;
        totalMarketCap: string;
        total24hVolume: string;
        btcDominance: number;
        btcMarketCap: string;
        bestCoins: SimpleCoin[];
        newestCoins: SimpleCoin[];
    };
}

export interface ApiError {
    status: 'fail';
    type: string;
    message: string;
}
