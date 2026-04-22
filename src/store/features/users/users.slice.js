import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./users.thunks";
import { setCurrentUser } from "../../../helpers/getRandomUser";



const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: 'idle', // idle | loading | successful | failed
        users: [],
        currentUser: {},
        error: null
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
                let currentUser = setCurrentUser(fetchedUsers)
                state.users = fetchedUsers
                state.currentUser = currentUser
                state.loading = 'successful'
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.payload
                state.loading = 'failed'
            })
    }
})



// export reducer and actions 
export default usersSlice.reducer