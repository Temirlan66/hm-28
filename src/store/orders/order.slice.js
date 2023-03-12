import { createSlice } from '@reduxjs/toolkit'
import { getAllOrders, getOrders, submitOrder } from './order.thunk'

const initialState = {
    meals: [],
    isLoading: false,
    error: false,
}
export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(submitOrder.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.meals = action.payload
            state.isLoading = false
        })
        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.meals = action.payload
            state.isLoading = false
        })
        builder.addCase(getAllOrders.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAllOrders.rejected, (state) => {
            state.error = true
            state.isLoading = false
        })
    },
})

export const orderActions = orderSlice.actions
