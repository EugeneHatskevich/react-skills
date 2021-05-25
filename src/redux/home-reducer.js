import coinAPI from '../api/coin.api';

const SET_COIN_LIST = 'SET_COIN_LIST';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PAGE_PORTION = 'SET_PAGE_PORTION';
const SET_LEN = 'SET_LEN';

const initialState = {
  coinList: [],
  pageSize: 10,
  currentPage: 1,
  totalPageSize: 100,
  pagePortion: 1,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COIN_LIST: {
      return {
        ...state,
        coinList: [...action.data],
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_PAGE_PORTION: {
      return {
        ...state,
        pagePortion: action.pagePortion,
        currentPage: (action.pagePortion - 1) * state.pageSize + 1,
      };
    }
    case SET_LEN: {
      return {
        ...state,
        totalPageSize: action.len,
      };
    }
    default:
      return state;
  }
};

const setCoinList = (data, len) => ({
  type: SET_COIN_LIST,
  data,
  len,
});

const setLen = (len) => ({
  type: SET_LEN,
  len,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setPagePortion = (pagePortion) => ({
  type: SET_PAGE_PORTION,
  pagePortion,
});

export const getCoinsList = (currentPage, pageSize) => (dispatch) => {
  coinAPI.getCoinList(currentPage, pageSize).then((response) => {
    dispatch(setCoinList(response.data));
  });
};

export const setPortion = (pagePortion, pageSize) => (dispatch) => {
  coinAPI.getAllCoin((pagePortion - 1) * pageSize + 1, pageSize).then((response) => {
    dispatch(setLen(response.data.length));
  });
};
