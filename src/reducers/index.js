import { combineReducers } from "redux"
import snackbar from './snackbar'
import auth from './auth'
import user from './user'

export default combineReducers({ auth, user, snackbar })
