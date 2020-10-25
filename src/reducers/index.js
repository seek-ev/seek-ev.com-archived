import { combineReducers } from "redux";
import snackbar from './snackbar'
import auth from './auth'

export default combineReducers({ auth, snackbar });
