import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { StatsApiResponse } from "../types";

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
    }),
});

export const {
    useGetStatsQuery,
} = cryptoApi;
