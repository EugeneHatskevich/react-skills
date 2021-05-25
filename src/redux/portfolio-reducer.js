const REMOVE_COIN = 'REMOVE_COIN';
const BUY_COIN = 'BUY_COIN';

const initialState = {
  portfolio: JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [],
  currentPortfolio: localStorage.getItem('current') ? localStorage.getItem('current') : '0',
  previousPortfolio: localStorage.getItem('previous'),
};

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_COIN: {
      const previous = localStorage.getItem('current');
      localStorage.setItem('previous', previous);
      const current = +(previous - action.portfolio[action.index].value).toFixed(2);
      localStorage.setItem('current', current.toString());
      const oldList = JSON.parse(localStorage.getItem('list'));
      oldList.splice(action.index, 1);
      localStorage.setItem('list', JSON.stringify(oldList));
      return {
        ...state,
        currentPortfolio: current,
        previousPortfolio: previous,
        portfolio: [...oldList],
      };
    }
    case BUY_COIN: {
      let newList;
      let previous;
      let current;
      if (localStorage.getItem('current') && localStorage.getItem('list')) {
        previous = localStorage.getItem('current');
        localStorage.setItem('previous', previous);
        current = +(action.coinValue * action.priceUsd) + +previous;
        localStorage.setItem('current', current.toFixed(2).toString());
        const oldList = JSON.parse(localStorage.getItem('list'));
        newList = [...oldList, {
          title: action.name,
          count: action.coinValue,
          price: Number(action.priceUsd).toFixed(2),
          value: (action.coinValue * action.priceUsd).toFixed(2),
        }];
        localStorage.setItem('list', JSON.stringify(newList));
      } else {
        localStorage.setItem('previous', '0');
        current = (action.coinValue * action.priceUsd);
        localStorage.setItem('current', current.toFixed(2).toString());
        newList = [{
          title: action.name,
          count: action.coinValue,
          price: Number(action.priceUsd).toFixed(2),
          value: (action.coinValue * action.priceUsd).toFixed(2),
        }];
        localStorage.setItem('list', JSON.stringify(newList));
      }
      return {
        ...state,
        currentPortfolio: current,
        previousPortfolio: previous,
        portfolio: [...newList],
      };
    }
    default:
      return state;
  }
};

export const removeCoin = (portfolio, index) => ({
  type: REMOVE_COIN,
  portfolio,
  index,
});
export const buyCoin = (coinValue, priceUsd, name) => ({
  type: BUY_COIN,
  coinValue,
  priceUsd,
  name,
});
