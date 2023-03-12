import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    addToBasketRequest,
    deleteBasketItemRequest,
    updeteBasketItemRequest,
} from '../../lib/constans/mealServis'
import { getBasket } from './getBasket'

export const addtoBasket = createAsyncThunk(
    'basket/addToBasket',
    async (newItem, { dispatch, rejectWithValue }) => {
        try {
            await addToBasketRequest(newItem)
            return dispatch(getBasket())
        } catch (error) {
            return rejectWithValue('Some thing wen wronf')
        }
    }
)

export const updeteBasketItem = createAsyncThunk(
    'basket/updeteBasket',
    async ({ amount, id }, { dispatch, rejectWithValue }) => {
        try {
            await updeteBasketItemRequest(id, amount)
            dispatch(getBasket())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const deleteBasketItem = createAsyncThunk(
    '/basket/deleteBasket',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await deleteBasketItemRequest(id)
            dispatch(getBasket())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
