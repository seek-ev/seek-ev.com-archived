let timeout

export const showSnackbar = (text, type) => {
    return (dispatch) => {
        dispatch({ type: 'SHOW_SNACKBAR', payload: { text: text, type: type } })

        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            dispatch({ type: 'HIDE_SNACKBAR' })
        }, 6000)
    }
}

export const hideSnackbar = () => {
    return (dispatch) => {
        dispatch({ type: 'HIDE_SNACKBAR' })
        if (timeout) clearTimeout(timeout)
    }
}