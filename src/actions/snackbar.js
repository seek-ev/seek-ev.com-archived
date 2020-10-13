import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "./types"

export const showSnackbar = (type) => {
    return {
        type: SHOW_SNACKBAR,
        payload: type
    }
}

export const hideSnackbar = {
    type: HIDE_SNACKBAR
}