import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host': import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
};
const baseUrl = import.meta.env.VITE_CRYPTO_API_URL

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest(`/coins`),
            // query: (count: number) => createRequest(`/coins?limit=${count}`),
        })
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi;