import { configureStore } from "@reduxjs/toolkit"; 
import postsReducer from './features/posts/posts.slice'
import usersReducer from './features/users/users.slice'
import commentsReducer from './features/comments/comments.slice'
import toastReducer from './features/toast/toast.sclice'
import apiSlice from "./features/api/apiSlice";
import modalReducer from "./features/modal/modal.slice";







const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        comments: commentsReducer,
        toast: toastReducer,
        modal: modalReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})




export default store