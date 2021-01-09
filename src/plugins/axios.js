import axios from 'axios'
import store from '../store'

// Actions
import { setNewToken, logoutUser } from '../actions/auth'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/v1' : 'https://api.seek-ev.com/v1'

axios.interceptors.request.use((config) => {
    const token = store.getState().auth.token
    if (token) config.headers.common['Authorization'] = token
    return config
})

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const originalRequest = error.config

        if (!error.response) return Promise.reject('Check your network connection')

        if (
            error.response.status === 401 &&
            (originalRequest.url === '/auth/login' || originalRequest.url === '/auth/login/tester')
        ) {
            return Promise.reject(error)
        }

        if (error.response.status === 401 && originalRequest.url === '/auth/reset-confirm') return Promise.reject('Token expired')

        if (
            error.response.status === 401 &&
            originalRequest.url === '/auth/refresh'
        ) {
            setTimeout(() => store.dispatch(logoutUser()), 250)
            return Promise.reject('Ops, you were logged for too long!')
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            return axios
                .post('/auth/refresh', {}, { withCredentials: true })
                .then((res) => {
                    store.dispatch(setNewToken(res.data.access_token))
                    originalRequest.headers['Authorization'] = res.data.access_token
                    return axios(originalRequest)
                })
        }

        return Promise.reject(error)
    }
)