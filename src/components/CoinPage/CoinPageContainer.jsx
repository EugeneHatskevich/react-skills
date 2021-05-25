import React, { useEffect } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinPage from './CoinPage';
import { getInfoAndHistory } from '../../redux/coin-reducer';
import { setPortfolio, updatePortfolioValue } from '../../redux/portfolio-reducer';

const CoinPageContainer = (props) => {
  const { match } = props;
  const { coinId } = match.params;
  const {
    coinHistory, coinInfo, updatePortfolioValue: updatePortfolioValueFunc,
    setPortfolio: setPortfolioFunc, getInfoAndHistory: getInfoAndHistoryFunc,
  } = props;
  const buyCoin = (coinValue, priceUsd, name) => {
    if (localStorage.getItem('current')) {
      const previous = localStorage.getItem('current');
      localStorage.setItem('previous', previous);
      const current = +(coinValue * priceUsd) + +previous;
      localStorage.setItem('current', current.toFixed(2).toString());
      updatePortfolioValueFunc(current, previous);
    } else {
      localStorage.setItem('previous', '0');
      const current = (coinValue * priceUsd);
      localStorage.setItem('current', current.toFixed(2).toString());
      updatePortfolioValueFunc(current, '0');
    }
    if (localStorage.getItem('list')) {
      const oldList = JSON.parse(localStorage.getItem('list'));
      const newList = [...oldList, {
        title: name,
        count: coinValue,
        price: Number(priceUsd).toFixed(2),
        value: (coinValue * priceUsd).toFixed(2),
      }];
      localStorage.setItem('list', JSON.stringify(newList));
      setPortfolioFunc(newList);
    } else {
      const newList = [{
        title: name,
        count: coinValue,
        price: Number(priceUsd).toFixed(2),
        value: (coinValue * priceUsd).toFixed(2),
      }];
      localStorage.setItem('list', JSON.stringify(newList));
      setPortfolioFunc(newList);
    }
  };
  useEffect(() => {
    getInfoAndHistoryFunc(coinId);
  }, [getInfoAndHistoryFunc, coinId]);

  return (
    <div>
      <CoinPage
        id={coinId}
        coinHistory={coinHistory}
        coinInfo={coinInfo}
        buyCoin={buyCoin}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  coinHistory: state.coinInfo.historyData,
  coinInfo: state.coinInfo.infoData,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getInfoAndHistory,
    updatePortfolioValue,
    setPortfolio,
  }),
)(CoinPageContainer);

CoinPageContainer.propTypes = {
  getInfoAndHistory: PropTypes.func.isRequired,
  updatePortfolioValue: PropTypes.func.isRequired,
  setPortfolio: PropTypes.func.isRequired,
  coinHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
  coinInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      coinId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
