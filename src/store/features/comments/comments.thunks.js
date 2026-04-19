import { createAsyncThunk } from "@reduxjs/toolkit";






const api_url = 'http://localhost:8000'



export const fetchComments = createAsyncThunk('comments/fetchComments', async (_, thunkApi) => {

    // initialize abort controller to force fetch operation to terminate after 5 seconds.
    let controller = new AbortController()

    let timeoutId = setTimeout(() => {
        controller.abort()
    }, 5000)

    clearTimeout(timeoutId)

    try {
        let response = await fetch(`${ api_url }/comments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal
        })

        if(!response.ok) {
            throw new Error("Sorry, we could not load comments for this post right now. Please try again later.")
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
            return thunkApi.rejectWithValue("Sorry, we ran into an error while loading comments. Please try again later.")
        }
    }
})



export const createComment = createAsyncThunk('comments/createComment', async (comment, thunkApi) => {

    // initialize abort controller to force fetch operation to terminate after 5 seconds.
    let controller = new AbortController()

    let timeoutId = setTimeout(() => {
        controller.abort()
    }, 5000)

    clearTimeout( timeoutId )

    try{
        let response = await fetch(`${ api_url }/comments`, {
            method: 'POST',
            body: JSON.stringify( comment ),
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal,
        })

        if(!response.ok) {
            throw new Error("Sorry, we could not add your comment right now. Please try again later.")
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
            return thunkApi.rejectWithValue("Sorry, we ran into an error while adding your comment. Please try again later.")
        }
    }
})
