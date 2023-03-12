import { createSlice } from '@reduxjs/toolkit'
import { addMeals, getMeals } from './meals-thunk'

export const mealsactionsTypes = {
    GET_MEALS_SUCCESS: 'GET_MEALS_SUCCESS',
    GET_MEALS_STARTED: 'GET_MEALS_STARTED',
    GET_MEALS_FAILED: 'GET_MEALS_FAILED',
}

const initialState = {
    maels: [],
    isLoading: false,
}
export const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMeals.fulfilled, (state, action) => {
            state.maels = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(getMeals.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(getMeals.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addCase(addMeals, (state, action) => {
            state.maels = action.payload
        })
    },
})

export const mealsActions = mealsSlice.actions
