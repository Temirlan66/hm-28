import { createSlice } from '@reduxjs/toolkit'
import { getBasket } from './getBasket'
import { addtoBasket, deleteBasketItem, updeteBasketItem } from './thunk'

export const basketActionsTypes = {
    ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
    GET_BASKET_SUCCESS: 'GET_BASKET_SUCCESS',
}

const initialState = {
    items: [],
    error: '',
    isLoading: false,
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        getBasketSucccess(state, action) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addtoBasket.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
        builder.addCase(addtoBasket.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addtoBasket.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(getBasket.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getBasket.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoading = false
        })
        builder.addCase(getBasket.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
        })
        builder.addCase(updeteBasketItem.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updeteBasketItem.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(updeteBasketItem.rejected, (state, action) => {
            state.isLoading = false
            state.error = +action.payload
        })
        builder.addCase(deleteBasketItem.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteBasketItem.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(deleteBasketItem.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
    },
})

export const basketActions = basketSlice.actions
