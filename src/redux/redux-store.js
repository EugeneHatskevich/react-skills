import {applyMiddleware, combineReducers, createStore} from "redux";
import {homeReducer} from "./home-reducer";
import {headerReducer} from "./header-reducer";
import thunk from 'redux-thunk'
import {portfolioReducer} from "./portfolio-reducer";
import {coinReducer} from "./coin-reducer";


let reducers = combineReducers({
    home: homeReducer,
    header: headerReducer,
    portfolio: portfolioReducer,
    coinInfo: coinReducer
})


export let store = createStore(reducers, applyMiddleware(thunk))

window.store = store