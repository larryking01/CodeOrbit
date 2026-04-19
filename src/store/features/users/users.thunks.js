import { createAsyncThunk } from "@reduxjs/toolkit";





let api_url = 'http://localhost:8000'


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkApi) => {
    let endpoint = `${ api_url }/users` 

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
            throw new Error("Sorry, we could not load users right now. Please try again later.")
        }
        else {
            let data = response.json()
            return data
        }
    }
    catch(error) {
        if(error.name === 'AbortError') {
            return thunkApi.rejectWithValue("Sorry, the request timed out. Check your network connection and try again.")
        }
        else {
            return thunkApi.rejectWithValue("Sorry, we ran into an error while loading users. Please try again later.")
        }
    }
    finally {
        clearTimeout( timeoutId )
    }

})