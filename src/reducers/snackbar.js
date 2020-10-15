import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../actions/types'

const initialState = {
    show: false,
    type: 'basic'
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_SNACKBAR:
            return {
                ...state,
                show: true,
                type: action.payload
            }
        case HIDE_SNACKBAR:
            return {
                ...state,
                show: false,
                type: 'basic'
            }
        default:
            return state
    }
}