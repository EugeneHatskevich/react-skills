import React, { useEffect } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinPage from './CoinPage';
import { getInfoAndHistory } from '../../redux/coin-reducer';
import { buyCoin } from '../../redux/portfolio-reducer';

const CoinPageContainer = (props) => {
  const { match } = props;
  const { coinId } = match.params;
  const {
    coinHistory, coinInfo, buyCoin: buyCoinFunc, getInfoAndHistory: getInfoAndHistoryFunc,
  } = props;
  useEffect(() => {
    getInfoAndHistoryFunc(coinId);
  }, [getInfoAndHistoryFunc, coinId]);

  return (
    <div>
      <CoinPage
        id={coinId}
        coinHistory={coinHistory}
        coinInfo={coinInfo}
        buyCoin={buyCoinFunc}
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
    buyCoin,
  }),
)(CoinPageContainer);

CoinPageContainer.propTypes = {
  getInfoAndHistory: PropTypes.func.isRequired,
  buyCoin: PropTypes.func.isRequired,
  coinHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
  coinInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      coinId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
