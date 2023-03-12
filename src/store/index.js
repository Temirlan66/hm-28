import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth.slice'
import { basketSlice } from './basket/basket.slice'
import { mealsAdminSlice } from './meals-admin/admin.slice'
import { mealsSlice } from './meals/meals.slice'
import { orderSlice } from './orders/order.slice'
import { uiSlice } from './UI/ui.slice'

export const store = configureStore({
    reducer: {
        [mealsSlice.name]: mealsSlice.reducer,
        [basketSlice.name]: basketSlice.reducer,
        [uiSlice.name]: uiSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [mealsAdminSlice.name]: mealsAdminSlice.reducer,
        [orderSlice.name]: orderSlice.reducer,
    },
})
