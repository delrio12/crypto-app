import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
     /*'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,*/
    'Ocp-Apim-Subscription-Key': process.env.REACT_APP_AZURE_BING_API_KEY,
  };


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl:  process.env.REACT_APP_AZURE_BING_API_KEY }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});
console.log(process.env.REACT_APP_AZURE_BING_API_KEY);
console.log(process.env.REACT_APP_AZURE_BING_API_ENDPOINT);

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

