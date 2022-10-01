import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoRequestHeaders = {
  'x-rapidapi-host': import.meta.env.VITE_REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': import.meta.env.VITE_REACT_APP_RAPIDAPI_KEY,
};

const createRequest = (url) => ({ url, headers: cryptoRequestHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_CRYPTO_API_URL,
  }),
  tagTypes: ['Cryptos'],
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod.param}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
