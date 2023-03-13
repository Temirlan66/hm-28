import { axiosInstace } from '../axiosInstace'

export const getBasketRequest = () => {
    return axiosInstace.get('/basket')
}

export const addMealRequest = (data) => {
    return axiosInstace.post('/foods', data)
}
export const getMealsAdminRequest = () => {
    return axiosInstace.get('/foods')
}

export const deleteMealRequest = (id) => {
    return axiosInstace.delete(`/foods/${id}`)
}

export const getOneMealRequest = (id) => {
    return axiosInstace.get(`/foods/${id}`)
}

export const updateMealRequest = (data) => {
    return axiosInstace.put(`/foods/${data.id}`, data)
}

export const addToBasketRequest = (newItem) => {
    return axiosInstace.post(`foods/${newItem.id}/addToBasket`, newItem)
}

export const updeteBasketItemRequest = (id, amount) => {
    return axiosInstace.put(`basketItem/${id}/update`, { amount })
}
export const deleteBasketItemRequest = (id) => {
    return axiosInstace.delete(`/basketItem/${id}/delete`)
}
