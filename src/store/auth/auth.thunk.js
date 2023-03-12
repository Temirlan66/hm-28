import { createAsyncThunk } from '@reduxjs/toolkit'
import authServis from '../../lib/constans/authServis'
import { STORAGE_KEYS } from '../../lib/constans/common'

export const signUp = createAsyncThunk(
    'auth/signup',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await authServis.signUp(payload)
            const userData = data.data
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))
            return userData
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const signIn = createAsyncThunk(
    'auth/signin',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await authServis.signIn(payload)
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data.data))
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const signOut = createAsyncThunk('auth/signOut', async (payload) => {
    return localStorage.removeItem(STORAGE_KEYS.AUTH, payload)
})
