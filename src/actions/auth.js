import axios from 'axios'

export const authUser = () => {
    return (dispatch) => {
        const token = localStorage.getItem('a_token')
        if (!token) return dispatch(logoutUser())
        dispatch({ type: 'READ_AUTH', payload: { isLogged: true, token } })
    }
}

export const setNewToken = (token) => {
    return (dispatch) => {
        localStorage.setItem('a_token', token)
        dispatch({ type: 'REFRESH_TOKEN', payload: { token } })
    }
}

export const loginUser = (user, token) => {
    return (dispatch) => {
        localStorage.setItem('s_user', JSON.stringify(user))
        localStorage.setItem('a_token', token)
        dispatch({ type: 'SET_USER', payload: { user } })
        dispatch({ type: 'LOG_IN', payload: { isLogged: true, token } })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('a_token')
        localStorage.removeItem('s_user')
        axios.post('/auth/logout', {}, { withCredentials: true }).catch(err => { return err })
        dispatch({ type: 'CLEAR_USER' })
        dispatch({ type: 'LOG_OUT' })
    }
}
