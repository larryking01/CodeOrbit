import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





const api_url = 'http://localhost:8000'




// define api slice
const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: api_url, timeout: 7000 }),
    endpoints: (builder) => ({
        // posts endpoints
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getPost: builder.query({
            query: (id) => `/posts/${ id }`
        }),
        createPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            })
        }),
        deletePost: builder.mutation({
            query: (post) => ({
                url: `/posts/${ post.id }`,
                method: 'DELETE',
                body: post.id
            })
        }),
        updatePostLikes: builder.mutation({
            query: (post) => ({
                url: `/posts/${ post.id }`,
                method: 'PATCH',
                body: post
            })
        }),
        // comments endpoints
        getComments: builder.query({
            query: () => '/comments'
        }),
        createComment: builder.mutation({
            query: (comment) => ({
                url: '/comments',
                method: 'POST',
                body: comment
            })
        }),
        // users thunks
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
    useGetCommentsQuery,
    useCreateCommentMutation,
    useGetUsersQuery
    
} = apiSlice

export default apiSlice