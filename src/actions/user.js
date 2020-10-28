export const readUser = () => {
    return (dispatch) => {
        let user = JSON.parse(localStorage.getItem('s_user'))
        if (!user) user = {}
        dispatch({ type: 'READ_USER', payload: { user } })
    }
}

export const setUser = (user) => {
    return (dispatch) => {
        const updatedUser = {
            username: user.username,
            email: user.email,
            avatar: user.avatar
        }
        localStorage.setItem('s_user', JSON.stringify(updatedUser))
        dispatch({ type: 'SET_USER', payload: { user } })
    }
}

export const setStateUsername = (username) => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem('s_user'))
        user.username = username
        localStorage.setItem('s_user', JSON.stringify(user))
        dispatch({ type: 'SET_USERNAME', payload: { username } })
    }
}

export const setAvatar = (url) => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem('s_user'))
        const updatedUser = { ...user, avatar: { url: url } }
        localStorage.setItem('s_user', JSON.stringify(updatedUser))
        dispatch({ type: 'SET_AVATAR', payload: { url: url } })
    }
}