import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./users.thunks";




const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: 'idle', // idle | loading | successful | failed
        users: [],
        errors: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder 
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                let fetchedUsers = action.payload
                console.log("fetched users = ", fetchedUsers)
                state.users = fetchedUsers
                state.loading = 'successful'
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.errors = action.error 
                state.loading = 'failed'
            })
    }
})



// export reducer and actions 
export default usersSlice.reducer