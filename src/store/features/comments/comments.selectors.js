export const selectCommentByPostId = (state, postId) =>  {
    let comments = state.comments.comments.filter(comment => comment.postId == postId)
    return comments
}


export const selectNumberOfComments = (state, postId) => {
    let comments = state.comments.comments.filter(comment => comment.postId == postId)
    return comments.length
}


