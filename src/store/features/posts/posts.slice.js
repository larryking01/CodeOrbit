import { createSlice, current } from "@reduxjs/toolkit";
import { fetchPosts, createPost, deletePost } from "./posts.thunks";







// define posts slice
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: 'idle',    // loading | successful | failed
        errors: null,
        posts: [],
        temporaryPostsStore: {}
    },
    reducers: {
        addNewPost(state, action) {
            let post = action.payload 
            state.temporaryPostsStore[post.id] = post
            state.posts.push(post)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'loading'
            })

            .addCase(fetchPosts.fulfilled, (state, action) => {
                let fetchedPosts = action.payload
                state.posts = fetchedPosts
                state.loading = 'successful'
            })

            .addCase(fetchPosts.rejected, (state, action) => {
                state.errors = action.error 
                state.loading = 'failed'
            })

            .addCase(createPost.fulfilled, (state, action) => {
                const createdPost = action.payload
                delete state.temporaryPostsStore[createdPost.id]
            })

            .addCase(createPost.rejected, (state, action) => {
                let failedPost = action.meta.arg
                let filteredPosts = state.posts.filter( post => post.id !== failedPost.id )
                state.posts = filteredPosts

                delete state.temporaryPostsStore[failedPost.id]
            })

            .addCase(deletePost.fulfilled, (state, action) => {
                state.errors = null
                let postId = action.payload
                let filteredPosts = state.posts.filter(post => post.id !== postId)
                state.posts = filteredPosts
            })

            .addCase(deletePost.rejected, (state, action) => {
                state.errors = action.error
            })
    }
})





// export actions and reducer 
export const { addNewPost, updatePost } = postsSlice.actions

export default postsSlice.reducer