import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {CryptoNewsResponse} from "../types";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_APP_NEWS_RAPIDAPI_HOST
};

const baseUrl = import.meta.env.VITE_APP_NEWS_RAPIDAPI_URL

interface NewsQueryParams {
    offset?: number;
    limit?: number;
}

const createRequest = (url: string, params?: Record<string, string | number>) => {
    return {url, headers: cryptoNewsHeaders, params};
};

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query<CryptoNewsResponse, NewsQueryParams>({
            query: ({ offset = 0, limit = 12 } = {}) => 
                createRequest(`/api/v1/crypto/articles`, { offset: offset.toString(), limit: limit.toString() }),
        }),
    }),
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;