import { REFRESH_TOKEN, READ_AUTH, LOG_IN, LOG_OUT } from '../actions/types'

const initialState = {
    isLogged: false,
    logout: false,
    token: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case READ_AUTH:
            return {
                ...state,
                isLogged: action.payload.isLogged,
                token: action.payload.token,
            }
        case REFRESH_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            }
        case LOG_IN:
            return {
                ...state,
                isLogged: action.payload.isLogged,
                logout: false,
                token: action.payload.token,
            }
        case LOG_OUT:
            return {
                ...state,
                isLogged: false,
                logout: true,
                token: null,
            }
        default:
            return state
    }
}