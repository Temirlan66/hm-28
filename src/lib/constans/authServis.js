import { axiosInstace } from '../axiosInstace'

const signUp = (data) => {
    return axiosInstace.post('/auth/register', data)
}
const signIn = (data) => {
    return axiosInstace.post('/auth/login', data)
}
export default {
    signUp,
    signIn,
}
