import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: 'mainer',
    initialState: {
        data: [],
        selectedTLD: "",
        taxes: true,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        setTLD: (state, action) => {
            state.selectedTLD = action.payload
        },
        changeTaxes: (state) => {
            state.taxes = !state.taxes
        },
    }
})

export const { setData, setTLD, changeTaxes } = mainSlice.actions
export default mainSlice.reducer