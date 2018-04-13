import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import user from './reducers/user'
import job from './reducers/job'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
    user, job
});
export default createStore(mainReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));