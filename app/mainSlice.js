import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: 'mainer',
    initialState: {
        data: [],
        selectedTLD: "",
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        setTLD: (state, action) => {
            state.selectedTLD = action.payload
        },
    }
})

export const { setData, setTLD } = mainSlice.actions
export default mainSlice.reducer