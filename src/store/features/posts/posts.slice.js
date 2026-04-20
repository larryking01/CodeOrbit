import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPost, deletePostAsync } from "./posts.thunks";







// define posts slice
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: 'idle',    // loading | successful | failed
        error: null,
        posts: [],
        temporaryPostsStore: {}
    },
    reducers: {
        addNewPost(state, action) {
            let post = action.payload 
            state.temporaryPostsStore[post.id] = post
            state.posts.push(post)
        },
        deletePost(state, action) {
            let postToDelete = action.payload 
            state.temporaryPostsStore[postToDelete.id] = postToDelete
            let filteredPosts = state.posts.filter( post => post.id !== postToDelete.id )
            state.posts = filteredPosts
            state.error = null
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
                state.error = action.payload
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
                state.error = action.payload
            })

            .addCase(deletePostAsync.fulfilled, (state, action) => {
                let deletedPost = action.meta.arg
                delete state.temporaryPostsStore[deletedPost.id]
                state.error = null
            })

            .addCase(deletePostAsync.rejected, (state, action) => {
                let deletedPost = action.meta.arg 
                state.posts.push(deletedPost)
                delete state.temporaryPostsStore[deletedPost.id]
                state.error = action.payload
            })
    }
})





// export actions and reducer 
export const { addNewPost, deletePost } = postsSlice.actions

export default postsSlice.reducer