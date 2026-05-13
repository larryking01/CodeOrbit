import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





const api_url = 'http://localhost:8000'




// define api slice
const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: api_url, timeout: 7000 }),
    tagTypes: ['Posts', 'Comments', 'Users'],
    endpoints: (builder) => ({
        // posts endpoints
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts']
        }),
        getPost: builder.query({
            query: (id) => `/posts/${ id }`
        }),
        createPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Posts']
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${ id }`,
                method: 'DELETE',
                body: JSON.stringify(id)
            }),
            invalidatesTags: ['Posts']
        }),
        updatePostLikes: builder.mutation({
            query: (post) => ({
                url: `/posts/${ post.id }`,
                method: 'PATCH',
                body: post
            })
        }),
        // comments endpoints
        getCommentsByPostId: builder.query({
            query: (postId) => `/comments?postId=${ postId }`,
            providesTags: ['Comments']
        }),
        createComment: builder.mutation({
            query: (comment) => ({
                url: '/comments',
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['Comments']
        }),
        // users endpoints
        getUsers: builder.query({
            query: () => '/users'
        })
    })

})



export const {
    useGetPostsQuery,
    useGetPostQuery,
    useCreatePostMutation,
    useDeletePostMutation,
    useUpdatePostLikesMutation,
    useGetCommentsByPostIdQuery,
    useCreateCommentMutation,
    useGetUsersQuery
    
} = apiSlice


export default apiSlice