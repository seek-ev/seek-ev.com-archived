import { READ_USER, SET_USERNAME, SET_USER, SET_AVATAR, CLEAR_USER } from '../actions/types'

const initialState = {
    username: null,
    email: null,
    avatar: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case READ_USER:
            return {
                ...state,
                username: action.payload.user.username,
                email: action.payload.user.email,
                avatar: action.payload.user.avatar
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload.username
            }
        case SET_USER:
            return {
                ...state,
                username: action.payload.user.username,
                email: action.payload.user.email,
                avatar: action.payload.user.avatar
            }
        case SET_AVATAR:
            return {
                ...state,
                avatar: {
                    url: action.payload.url
                }
            }
        case CLEAR_USER:
            return {
                username: '',
                email: '',
                avatar: {
                    url: ''
                }
            }
        default:
            return state
    }
}