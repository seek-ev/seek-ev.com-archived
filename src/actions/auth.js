export const readAuth = () => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem('s_user'))
        const token = localStorage.getItem('a_token')
        const cookie = document.cookie.match(
            '(^|;)\\s*r_token\\s*=\\s*([^;]+)'
        )
        const r_token = cookie ? cookie.pop() : ''

        let isLogged = false
        if (user && token && r_token) isLogged = true

        dispatch({ type: 'READ_AUTH', payload: { user, isLogged, token, r_token } })
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
        dispatch({ type: 'LOG_IN', payload: { user: user, isLogged: true, token, r_token } })
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        localStorage.removeItem('s_user')
        localStorage.removeItem('a_token')
        document.cookie = 'r_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
        dispatch({ type: 'LOG_OUT' })
    }
}

export const setStateUsername = (username) => {
    return async (dispatch) => {
        const user = JSON.parse(localStorage.getItem('s_user'))
        user.username = username
        localStorage.setItem('s_user', JSON.stringify(user))
        dispatch({ type: 'SET_USERNAME', payload: { username } })
    }
}