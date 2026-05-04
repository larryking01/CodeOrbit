import { createSlice } from "@reduxjs/toolkit";





export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        visible: false,
        type: '',
        title: '',
        content: ''
    },
    reducers: {
        showToast(state, action) {
            let toastConfig = action.payload
            state.visible = true
            state.type = toastConfig.type 
            state.title = toastConfig.title
            state.content = toastConfig.content
        },
        clearToast(state) {
            state.visible = false
            state.type = ''
            state.title = ''
            state.content = ''
        }
    }
})




// export reducer and actions
export const { showToast, clearToast } = toastSlice.actions
export default toastSlice.reducer