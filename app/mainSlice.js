import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: 'mainer',
    initialState: {
        data: [],
        selectedTLD: "",
        selectedPeriod: 1,
        taxes: true,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        setFilterFormParams: (state, action) => {
            state.selectedTLD = action.payload.TLD;
            state.selectedPeriod = action.payload.period;
        },
        changeTaxes: (state) => {
            state.taxes = !state.taxes
        },
    }
})

export const { setData, setFilterFormParams, changeTaxes } = mainSlice.actions
export default mainSlice.reducer