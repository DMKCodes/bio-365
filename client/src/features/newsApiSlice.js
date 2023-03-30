import { apiSlice } from '../app/api/apiSlice';

export const newsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        articles: builder.query({
            query: () => '/news/articles'
        })
    })
});

export const {
    useArticlesQuery
} = newsApiSlice;