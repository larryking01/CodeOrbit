import { createAsyncThunk } from "@reduxjs/toolkit";





let api_url = 'http://localhost:8000'


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    let endpoint = `${ api_url }/users` 
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
            throw new Error("An error occurred, failed to fetch users...")
        }
        else {
            data = response.json()
            return data
        }
    }
    catch(error) {
        return error
    }

})