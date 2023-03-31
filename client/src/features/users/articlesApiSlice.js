import { apiSlice } from '../../app/api/apiSlice';

export const articlesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getArticles: builder.query({
            query: (_id) => `/users/${_id}/articles`
        }),
        addArticle: builder.mutation({
            query: ({ _id, article, ...credentials }) => ({
                url: `/users/${_id}/articles`,
                method: 'POST',
                body: { article, ...credentials }
            })
        }),
        deleteArticle: builder.mutation({
            query: ({ _userId, _articleId, ...credentials }) => ({
                url: `/users/${_userId}/articles/${_articleId}`,
                method: 'DELETE',
                body: { ...credentials }
            })
        })
    })
});

export const {
    useGetArticlesQuery,
    useAddArticleMutation,
    useDeleteArticleMutation
} = articlesApiSlice;