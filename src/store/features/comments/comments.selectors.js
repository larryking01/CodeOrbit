import { createSelector } from "@reduxjs/toolkit"





export const selectAllComments = (state) => {
    let comments = state.comments.comments 
    return comments
}


// memoize selector to prevent unnecessary re-renders
export const selectCommentByPostId = createSelector(
    [
        selectAllComments,
        (state, postId) => postId 
    ],
    (comments, postId) => {
        let filteredComments = comments.filter(comment => comment.postId == postId)
        return filteredComments
    }
)


// memoize selector to prevent unnecessary re-renders
export const selectNumberOfComments = createSelector(
    [
        selectAllComments,
        (state, postId) => postId
    ],
    (comments, postId) => {
        let filteredComments = comments.filter(comment => comment.postId == postId)
        return filteredComments.length
    }
)


