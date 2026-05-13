import { createSlice } from "@reduxjs/toolkit";








const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        visible: false,
        type: '',
        title: '',
        content: '',
        confirmButtonText: '',
        cancelButtonText: ''
    },
    reducers: {
        showModal(state, action) {
            let modalConfig = action.payload 
            state.visible = modalConfig.visible
            state.type = modalConfig.type
            state.title = modalConfig.title
            state.content = modalConfig.content 
            state.confirmButtonText = modalConfig.confirmButtonText
            state.cancelButtonText = modalConfig.cancelButtonText
        },
        clearModal(state) {
            state.visible = false 
            state.type = ''
            state.title = ''
            state.content = ''
            state.confirmButtonText = ''
            state.cancelButtonText = ''
        }
    }
})



export const { showModal, clearModal } = modalSlice.actions

export default modalSlice.reducer