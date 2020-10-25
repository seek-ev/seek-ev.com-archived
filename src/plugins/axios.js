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

        if (
            error.response.status === 401 &&
            originalRequest.url === ('/auth/login' || '/auth/login/tester')
        ) {
            return Promise.reject(error)
        }

        if (
            error.response.status === 401 &&
            originalRequest.url === '/auth/refresh'
        ) {
            store.dispatch(logoutUser())
            return Promise.reject(error)
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            return axios
                .post('/auth/refresh', {
                    refresh_token: store.getState().auth.r_token,
                })
                .then((res) => {
                    store.dispatch(setNewToken(res.data.access_token))

                    originalRequest.headers['Authorization'] = res.data.access_token

                    return axios(originalRequest)
                })
        }

        return Promise.reject(error)
    }
)
