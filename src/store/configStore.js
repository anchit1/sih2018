import { createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore();

    return store;
}