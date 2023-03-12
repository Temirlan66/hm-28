import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, UserRoles } from '../../lib/constans/common'
import { signIn, signOut, signUp } from './auth.thunk'
const getInitialState = () => {
    const json = localStorage.getItem(STORAGE_KEYS.AUTH)
    if (json) {
        const userData = JSON.parse(json)
        return {
            isAuthorized: true,
            token: userData.token,
            user: {
                name: userData.user.name,
                email: userData.user.email,
                role: userData.user.role,
            },
        }
    }
    return {
        isaAuthorized: false,
        token: '',
        user: {
            email: '',
            name: '',
            role: UserRoles.GUEST,
        },
    }
}
const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, { payload }) => {
            state.isAuthorized = true
            state.token = payload.token
            state.user = {
                name: payload.user.name,
                email: payload.user.email,
                role: payload.user.role,
            }
        })
        builder.addCase(signIn.fulfilled, (state, { payload }) => {
            state.isAuthorized = true
            state.token = payload.token
            state.user = {
                name: payload.user.name,
                email: payload.user.email,
                role: payload.user.role,
            }
        })
        builder.addCase(signOut.fulfilled, (state) => {
            state.isAuthorized = false
            state.token = ''
            state.user = {
                name: '',
                email: '',
                role: UserRoles.GUEST,
            }
        })
    },
})

export default authSlice
