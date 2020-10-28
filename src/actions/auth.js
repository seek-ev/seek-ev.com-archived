export const readAuth = () => {
    return (dispatch) => {

        const token = localStorage.getItem('a_token')
        const cookie = document.cookie.match(
            '(^|;)\\s*r_token\\s*=\\s*([^;]+)'
        )
        const r_token = cookie ? cookie.pop() : ''

        let isLogged = false
        if (token && r_token) isLogged = true
        dispatch({ type: 'READ_AUTH', payload: { isLogged, token, r_token } })
    }
}

export const setNewToken = (newToken) => {
    return (dispatch) => {
        localStorage.setItem('a_token', newToken)
        dispatch({ type: 'REFRESH_TOKEN', payload: { token: newToken } })
    }
}

export const loginUser = (user, token, r_token) => {
    const expires = new Date()

    return (dispatch) => {
        localStorage.setItem('s_user', JSON.stringify(user))
        localStorage.setItem('a_token', token)
        document.cookie = 'r_token=' + r_token + '; expires=' + new Date(expires.setFullYear(expires.getFullYear() + 1)).toString() + '; SameSite=Strict;'
        dispatch({ type: 'SET_USER', payload: { user } })
        dispatch({ type: 'LOG_IN', payload: { isLogged: true, token, r_token } })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('s_user')
        localStorage.removeItem('a_token')
        document.cookie = 'r_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
        dispatch({ type: 'CLEAR_USER' })
        dispatch({ type: 'LOG_OUT' })
    }
}

