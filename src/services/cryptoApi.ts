import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    CoinDetailApiResponse,
    CoinHistoryApiResponse,
    CoinHistoryQueryParams,
    CoinsApiResponse, CoinsQueryParams,
    StatsApiResponse
} from "../types";

const cryptoApiHeaders = {
    'Content-Type': 'application/json',
    'x-access-token': import.meta.env.VITE_API_KEY as string,
};

const baseUrl = import.meta.env.VITE_CRYPTO_API_URL;

const createRequest = (url: string, params?:Record<string, string>) => ({ url, headers: cryptoApiHeaders, params});

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getStats: builder.query<StatsApiResponse, void>({
            query: () => createRequest(`/stats`),
        }),
        getCoins: builder.query<CoinsApiResponse, CoinsQueryParams>({
            query: ({...params}) => createRequest(`/coins`, params),
        }),
        getCoinDetail: builder.query<CoinDetailApiResponse, string>({
            query: (uuid:string) => createRequest(`/coin/${uuid}`),
        }),
        getCoinHistory: builder.query<CoinHistoryApiResponse, CoinHistoryQueryParams>({
            query: ({ uuid, period }) =>
                createRequest(`/coin/${uuid}/price-history?timePeriod=${period}`),
        }),

    }),
});

export const {
    useGetStatsQuery,
    useGetCoinsQuery,
    useGetCoinDetailQuery,
    useGetCoinHistoryQuery,
} = cryptoApi;
