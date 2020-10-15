import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';

// Logger middleware
import logger from './middleware/logger'

export default createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk, logger), 
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
)
