export type AllowedTimePeriods = '1h' | '3h' | '12h' | '24h' | '7d' | '30d' | '3m' | '1y' | '3y' | '5y';

export interface SimpleCoin {
    uuid: string;
    symbol: string;
    name: string;
    iconUrl: string;
    coinrankingUrl: string;
}

export interface CoinDetailed extends SimpleCoin {
    color: string;
    '24hVolume': string;
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

export interface CoinDetail extends SimpleCoin {
    description: string;
    color: string;
    websiteUrl: string;
    links: CoinLink[];
    supply: CoinSupply;
    marketCap: string;
    fullyDilutedMarketCap: string;
    price: string;
    btcPrice: string;
    priceAt: number | null;
    '24hVolume': string;
    change: string;
    rank: number;
    numberOfMarkets: number;
    numberOfExchanges: number;
    sparkline: string[];
    allTimeHigh: {
        price: string;
        timestamp: number;
    };
    lowVolume: boolean;
    listedAt: number | null;
    notices: CoinNotice[];
    contractAddresses: string[];
    tags: string[];
    isWrappedTrustless: boolean;
    wrappedTo: string | null;
}

export interface CoinLink {
    name: string;
    url: string;
    type: string;
}

export interface CoinSupply {
    confirmed: boolean;
    supplyAt: number | null;
    total: string;
    circulating: string;
    max: string;
}

export interface CoinNotice {
    type: string;
    value: string;
}

export interface CoinDetailApiResponse {
    status: 'success';
    data: {
        coin: CoinDetail;
    };
}
export type StatType = 'numeric' | 'percent';