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

    },
    extraReducers: (builder) => {
        builder 
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = 'successful'
                state.comments = action.payload
                state.errors = null
            }) 
            .addCase(fetchComments.rejected, (state, action) => {
                state.errors = action.error
                state.loading = 'failed'
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.comments.push(action.payload)
                state.errors = null
            })
            .addCase(createComment.rejected, (state, action) => {
                state.errors = action.error
            })
    }
})



// export actions and reducer
// export const { } = commentSlice.actions


export default commentSlice.reducer