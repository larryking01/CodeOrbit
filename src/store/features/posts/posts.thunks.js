import { createAsyncThunk } from "@reduxjs/toolkit";



let api_url = 'http://localhost:8000'


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkApi) => {
    let endpoint = `${ api_url }/posts` 

    // initialize abort controller to force fetch operation to terminate after 5 seconds.
    let controller = new AbortController()

    let timeoutId = setTimeout(() => {
        controller.abort()
    }, 5000)


    try {
        let response = await fetch(endpoint, {
            method: 'GET',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if(!response.ok) {
            throw new Error("Sorry, we could not load posts right now. Please try again later.")
        }
        else {
            let data = await response.json()
            return data
        }
    }
    catch(error) {
        if(error.name === 'AbortError') {
            return thunkApi.rejectWithValue("Sorry, the request timed out. Check your network connection and try again.")
        }
        else {
            return thunkApi.rejectWithValue("Sorry, we ran into an error while loading posts. Please try again later.")
        }
    }
    finally {
        clearTimeout( timeoutId )
    }

})



export const createPost = createAsyncThunk('posts/createPost', async (post, thunkApi) => {
    let endpoint = `${ api_url }/posts` 

    // initialize abort controller to force fetch operation to terminate after 5 seconds.
    let controller = new AbortController()

    let timeoutId = setTimeout(() => {
        controller.abort()
    }, 5000)


    try {
        let response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(post),
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'         
            }
        })

        if(!response.ok) {
            throw new Error("Sorry, we could not create your post right now. Please try again later.")
        }
        else {
            let data = await response.json()
            return data
        }
    }
    catch( error ) {
        if(error.name === 'AbortError') {
            return thunkApi.rejectWithValue("Sorry, the request timed out. Check your network connection and try again.")
        }
        else {
            return thunkApi.rejectWithValue("Sorry, we ran into an error while creating your post. Please try again later.")
        }
    }
    finally {
        clearTimeout( timeoutId )
    }

})



export const deletePostAsync = createAsyncThunk('posts/deletePost', async (post, thunkApi) => {
    let endpoint = `${ api_url }/posts/${ post.id }` 

    // initialize abort controller to force fetch operation to terminate after 5 seconds.
    let controller = new AbortController()

    let timeoutId = setTimeout(() => {
        controller.abort()
    }, 5000)


    try {
        if(post.id === 'pzKFW9gbKCI') {
            console.log("async delete post fired too")
            throw new Error("We could not delete the post right now. Please try again later.")
        }

        let response = await fetch(endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        })
    }
    catch( error ) {
        if(error.name === 'AbortError') {
            return thunkApi.rejectWithValue("Sorry, the request timed out. Check your network connection and try again.")
        }
        else {
            console.log("async delete post error caught")
            return thunkApi.rejectWithValue("We ran into an error when deleting the post. Please try again later.")
        }
    }
    finally {
        clearTimeout( timeoutId )
    }
})