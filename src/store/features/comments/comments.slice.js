import { createSlice } from "@reduxjs/toolkit";
import { fetchComments, createCommentAsync } from "./comments.thunks";






// define comment slice
const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        loading: 'idle',   // loading | successful | failed
        errors: null,
        comments: [],
        temporaryCommentsStore: {}
    },
    reducers: {
        createComment(state, action) {
            let comment = action.payload 
            state.temporaryCommentsStore[comment.id] = comment
            state.comments.push(comment)
        }

    },
    extraReducers: (builder) => {
        builder 
            .addCase(fetchComments.pending, (state) => {
                state.loading = 'loading'
            })

            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = 'successful'
                state.comments = action.payload
                state.errors = null
            }) 

            .addCase(fetchComments.rejected, (state, action) => {
                state.errors = action.error
                state.loading = 'failed'
            })

            .addCase(createCommentAsync.pending, (state) => {
                state.loading = 'loading'
            })

            .addCase(createCommentAsync.fulfilled, (state, action) => {
                let createdComment = action.payload
                delete state.temporaryCommentsStore[createdComment.id]
                state.loading = 'successful'
                state.errors = null
            })

            .addCase(createCommentAsync.rejected, (state, action) => {
                let failedComment = action.meta.arg
                let filteredComments = state.comments.filter(comment => comment.id !== failedComment.id)
                state.comments = filteredComments
                delete state.temporaryCommentsStore[failedComment.id]
                state.loading = 'failed'
                state.errors = action.payload
            })
    }
})



// export actions and reducer
export const { createComment } = commentSlice.actions


export default commentSlice.reducer