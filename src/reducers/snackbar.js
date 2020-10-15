import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../actions/types'

const initialState = {
    show: false,
    text: '',
    type: 'basic'
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_SNACKBAR:
            return {
                ...state,
                show: true,
                text: action.payload.text,
                type: action.payload.type
            }
        case HIDE_SNACKBAR:
            return {
                ...state,
                show: false,
            }
        default:
            return state
    }
}