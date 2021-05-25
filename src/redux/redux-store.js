import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './home-reducer';
import { headerReducer } from './header-reducer';
import { portfolioReducer } from './portfolio-reducer';
import { coinReducer } from './coin-reducer';

const reducers = combineReducers({
  home: homeReducer,
  header: headerReducer,
  portfolio: portfolioReducer,
  coinInfo: coinReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;
