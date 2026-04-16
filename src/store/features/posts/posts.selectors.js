export const selectAllPosts = (state) => state.posts.posts  


export const selectPostById = (state, postId) => {
    let selectedPost = state.posts.posts.find( post => post.id === postId )
    return selectedPost
}


export const selectNumberOfPosts = (state) => state.posts.posts.length