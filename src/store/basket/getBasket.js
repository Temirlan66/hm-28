import { createAsyncThunk } from '@reduxjs/toolkit'
import { getBasketRequest } from '../../lib/constans/mealServis'

export const getBasket = createAsyncThunk(
    'basket/getBasket',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getBasketRequest()
            return data.data.items
        } catch (error) {
            return rejectWithValue('something went wrong getBasket ')
        }
    }
)
