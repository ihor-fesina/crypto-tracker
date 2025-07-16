import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {CoinDetailApiResponse, CoinsApiResponse, StatsApiResponse} from "../types";

const cryptoApiHeaders = {
    'Content-Type': 'application/json',
    'x-access-token': import.meta.env.VITE_API_KEY as string,
};

const baseUrl = import.meta.env.VITE_CRYPTO_API_URL;

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getStats: builder.query<StatsApiResponse, void>({
            query: () => createRequest(`/stats`),
        }),
        getCoins: builder.query<CoinsApiResponse, void>({
            query: () => createRequest(`/coins`),
        }),
        getCoinDetail: builder.query<CoinDetailApiResponse, string>({
            query: (uuid:string) => createRequest(`/coin/${uuid}`),
        }),
        getCoinHistory: builder.query<CoinsApiResponse, string>({
            query: (uuid:string, timePeriod:string) => createRequest(`/coin/${uuid}?timePeriod=${timePeriod}`),
        }),

    }),
});

export const {
    useGetStatsQuery,
    useGetCoinsQuery,
    useGetCoinDetailQuery,
    useGetCoinHistoryQuery,
} = cryptoApi;
