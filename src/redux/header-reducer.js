import coinAPI from '../api/coin.api';

const SET_TOP_COIN = 'SET_TOP_COIN';

const initialState = {
  topCoin: [],
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_COIN: {
      return {
        ...state,
        topCoin: [...action.topCoin],
      };
    }
    default:
      return state;
  }
};

export const setTopCoin = (topCoin) => ({
  type: SET_TOP_COIN,
  topCoin,
});

export const getTopCoin = () => (dispatch) => {
  coinAPI.getTopList().then((response) => {
    dispatch(setTopCoin(response.data));
  });
};
