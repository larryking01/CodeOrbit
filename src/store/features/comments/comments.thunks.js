import { createAsyncThunk } from "@reduxjs/toolkit";






const api_url = 'http://localhost:8000'


// fetch all comments from server 
export const fetchComments = createAsyncThunk('comments/fetchComments', async (_, thunkApi) => {

    // ensure fetch aborts after 5 seconds
    let controller = new AbortController()
    setTimeout(() => {
        controller.abort()
    }, 5000)

    try {
        let response = await fetch(`${ api_url }/comments`, {
            method: 'GET',
            'Content-Type': 'application/json',
            signal: controller.signal
        })

        let data = await response.json()
        return data
    }
    catch(error) {
        thunkApi.rejectWithValue('Sorry, we could not load comments right now. Please try again later')
    }
})



// create a new comment for a post
export const createComment = createAsyncThunk('comments/createComment', async (commentPayload, thunkApi) => {

    // ensure fetch aborts after 5 seconds
    let controller = new AbortController()
    setTimeout(() => {
        controller.abort()
    }, 5000)

    try{
        let response = await fetch(`${ api_url}/comments`, {
            method: 'POST',
            body: JSON.stringify( commentPayload ),
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json()
        return data
    }
    catch( error ) {
        thunkApi.rejectWithValue('Sorry, we could not post your comment right now. Please try again later')
    }
})
