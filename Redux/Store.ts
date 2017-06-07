import {combineReducers,createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {MainReducer} from './Reducers';

let AllReducers=combineReducers({
    MainReducer:MainReducer
});

export let Store=createStore(
    AllReducers, {}, applyMiddleware(thunk)
);