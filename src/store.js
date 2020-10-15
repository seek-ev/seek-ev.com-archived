import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";

// Logger middleware
import logger from './middleware/logger'

export default createStore(rootReducer, applyMiddleware(logger))