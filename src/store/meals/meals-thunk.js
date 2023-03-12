import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstace } from '../../lib/axiosInstace'
import { addMealRequest } from '../../lib/constans/mealServis'
import { mealsAdmin } from '../meals-admin/admin-thunk'

export const getMeals = createAsyncThunk(
    'meals/getMeals',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstace.get('/foods')
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const addMeals = createAsyncThunk(
    'meals/addMeals',
    async (payload, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await addMealRequest(payload)
            dispatch(mealsAdmin())
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
