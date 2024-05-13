
import {applyMiddleware, combineReducers, createStore} from 'redux'
import logger from 'redux-logger';
import { wreducers} from './reducers';
const reducers = combineReducers({
    wishList : wreducers
})
export default createStore(reducers,applyMiddleware(logger));