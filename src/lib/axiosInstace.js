import axios from 'axios'
import { store } from '../store'
import { signOut } from '../store/auth/auth.thunk'
const BASE_URL =
    'http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1'

export const axiosInstace = axios.create({
    baseURL: BASE_URL,
})

axiosInstace.interceptors.request.use(
    function configs(config) {
        const newConfig = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: store.getState().auth.token,
            },
        }
        return newConfig
    },
    function errorConfigs(error) {
        return Promise.reject(error)
    }
)

axiosInstace.interceptors.response.use(
    function responsees(response) {
        return response
    },
    function cathError(error) {
        if (error.response.status === 401) {
            store.dispatch(signOut())
        }
        return Promise.reject(error)
    }
)
