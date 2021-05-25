import dateformat from 'dateformat';
import coinAPI from '../api/coin.api';

const SET_HISTORY = 'SET_HISTORY';
const SET_INFO = 'SET_INFO';

const initialState = {
  historyData: [],
  infoData: {},
};

export const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY: {
      const newList = action.historyData.map((elem) => ({ date: dateformat(new Date(elem.time), 'hh TT'), priceUsd: elem.priceUsd }));
      return {
        ...state,
        historyData: newList,
      };
    }
    case SET_INFO: {
      return {
        ...state,
        infoData: { ...action.infoData },
      };
    }
    default:
      return state;
  }
};

const setHistory = (historyData) => ({
  type: SET_HISTORY,
  historyData,
});
const setInfo = (infoData) => ({
  type: SET_INFO,
  infoData,
});

export const getInfoAndHistory = (id) => (dispatch) => {
  coinAPI.getHistory(id).then((responseHistory) => {
    dispatch(setHistory(responseHistory.data));
    coinAPI.getInfo(id).then((responseInfo) => {
      dispatch(setInfo(responseInfo.data));
    });
  });
};
