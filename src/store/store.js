import { configureStore } from "@reduxjs/toolkit"; 
import postsReducer from './features/posts/posts.slice'
import usersReducer from './features/users/users.slice'
import commentsReducer from './features/comments/comments.slice'



const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        comments: commentsReducer
    }
})




export default store