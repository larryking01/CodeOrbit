import { createSlice } from "@reduxjs/toolkit";
import { fetchComments, createComment } from "./comments.thunks";






// define comment slice
const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        loading: 'idle', // loading | successful | failed
        errors: null,
        comments: []
    },
    reducers: {
        // addComment: {
        //     reducer(state, action) {
                
        //     },
        //     prepare(commentPayload) {
        //         let transformedCommentPayload = {
        //             ...commentPayload,
        //             createdAt: new Date().toISOString()
        //         }
        //         return transformedCommentPayload
        //     }
        // }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(fetchComments.fulfilled, (state, action) => {
                console.log("comments = ", action.payload)
                state.loading = 'successful'
                state.comments = action.payload
                state.errors = null
            }) 
            .addCase(fetchComments.rejected, (state, action) => {
                console.log("comment fetch error = ", action.error)
                state.errors = action.error
                state.loading = 'failed'
            })
            .addCase(createComment.fulfilled, (state, action) => {
                console.log("comment created successfully..", action.payload)
                state.comments.push(action.payload)
                state.errors = null
            })
            .addCase(createComment.rejected, (state, action) => {
                console.log("failed to create comment due to error", action.error)
                state.errors = action.error
            })
    }
})



// export actions and reducer
// export const { } = commentSlice.actions


export default commentSlice.reducer