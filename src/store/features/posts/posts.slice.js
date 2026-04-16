import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPost, deletePost } from "./posts.thunks";







// define posts slice
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: 'idle', // loading | successful | failed
        errors: null,
        posts: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                let fetchedPosts = action.payload
                console.log("fetched posts = ", fetchedPosts)
                state.posts = fetchedPosts
                state.loading = 'successful'
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.errors = action.error 
                state.loading = 'failed'
            })
            .addCase(createPost.fulfilled, (state, action) => {
                console.log("new post created. ", action.payload)
                state.posts.push(action.payload)
                state.errors = null
            })
            .addCase(createPost.rejected, (state, action) => {
                console.log("failed to create new post due to error: ", action.error)
                state.errors = action.error
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                console.log("post deleted. data returned = ", action.payload)
                state.errors = null
                let postId = action.payload
                let filteredPosts = state.posts.filter(post => post.id !== postId)
                state.posts = filteredPosts
            })
            .addCase(deletePost.rejected, (state, action) => {
                console.log("failed to delete post due to error = ", action.error)
                state.errors = action.error
            })
    }
})




// export actions and reducer 
export const { addNewPost, updatePost } = postsSlice.actions

export default postsSlice.reducer