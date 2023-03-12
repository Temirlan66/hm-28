import { axiosInstace } from '../axiosInstace'

export const addOrderRequest = (totalPrice) => {
    return axiosInstace.post('/orders', { totalPrice })
}

export const getUserOrdersRequest = () => {
    return axiosInstace.get('/orders')
}

export const getAllOrdersRequest = () => {
    return axiosInstace.get('/orders/all')
}
