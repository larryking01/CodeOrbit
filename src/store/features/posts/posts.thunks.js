import { createAsyncThunk } from "@reduxjs/toolkit";



let api_url = 'http://localhost:8000'


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    let endpoint = `${ api_url }/posts` 
    let controller = new AbortController()

    setTimeout(() => {
        controller.abort()
    }, 5000)

    try {
        let data
        let response = await fetch(endpoint, {
            method: 'GET',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if(!response.ok) {
            throw new Error("An error occurred, failed to fetch posts...")
        }
        else {
            data = await response.json()
            return data
        }
    }
    catch(error) {
        return error
    }

})



export const createPost = createAsyncThunk('posts/createPost', async (postPayload) => {
    let endpoint = `${ api_url }/posts` 
    let controller = new AbortController()
    setTimeout(() => {
        controller.abort()
    }, 5000)

    try {
        let response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(postPayload),
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'         
            }
        })

        let data = await response.json()
        return data
    }
    catch( error ) {
        return error
    }

})



export const deletePost = createAsyncThunk('posts/deletePost', async (postId, thunkApi) => {
    let endpoint = `${ api_url }/posts/${ postId }` 

    let controller = new AbortController()
    let timeoutId = setTimeout(() => {
        controller.abort()
    }, 5000)

    clearTimeout( timeoutId )


    try {
        let response = await fetch(endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        })

        if(!response.ok) {
            return thunkApi.rejectWithValue("We could not delete the post right now. Please try again in a few minutes")
        }
        else {
            return postId
        }

    }
    catch( error ) {
        if(error.name === 'AbortError') {
            thunkApi.rejectWithValue("Sorry, the request timed out. Please try again later")
        }
        else {
            thunkApi.rejectWithValue("We could not delete the post right now. Please try again in a few minutes")
        }
    }
})