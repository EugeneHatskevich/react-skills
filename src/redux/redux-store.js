import {applyMiddleware, combineReducers, createStore} from "redux";
import {coinReducer} from "./coin-reducer";
import {headerReducer} from "./header-reducer";
import thunk from 'redux-thunk'


let reducers = combineReducers({
    coinInfo: coinReducer,
    header: headerReducer,
})


export let store = createStore(reducers, applyMiddleware(thunk))

window.store = store