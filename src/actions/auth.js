export const readAuth = () => {
    return (dispatch) => {
        const token = JSON.parse(localStorage.getItem('a_token'))
        const r_token = JSON.parse(localStorage.getItem('r_token'))
        localStorage.removeItem('a_token')
        localStorage.removeItem('r_token')
        let isLogged = false
        if (token && r_token) isLogged = true
        dispatch({ type: 'READ_AUTH', payload: { isLogged, token, r_token } })
    }
}

export const setNewToken = (newToken) => {
    return (dispatch) => {
        dispatch({ type: 'REFRESH_TOKEN', payload: { token: newToken } })
    }
}

export const loginUser = (user, token, r_token) => {
    return (dispatch) => {
        localStorage.setItem('s_user', JSON.stringify(user))
        dispatch({ type: 'SET_USER', payload: { user } })
        dispatch({ type: 'LOG_IN', payload: { isLogged: true, token, r_token } })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('s_user')
        localStorage.removeItem('a_token')
        dispatch({ type: 'CLEAR_USER' })
        dispatch({ type: 'LOG_OUT' })
    }
}
