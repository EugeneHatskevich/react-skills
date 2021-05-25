import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { getTopCoin } from '../../redux/header-reducer';
import { removeCoin } from '../../redux/portfolio-reducer';

const HeaderContainer = (props) => {
  const {
    getTopCoin: getTopCoinFunc,
    currentPortfolio,
    previousPortfolio, portfolio, topCoin, removeCoin: removeCoinFunc,
  } = props;
  useEffect(() => {
    getTopCoinFunc();
  }, [getTopCoinFunc]);

  return (
    <header>
      <Header
        currentPortfolio={currentPortfolio}
        previousPortfolio={previousPortfolio}
        portfolio={portfolio}
        topCoin={topCoin}
        removeCoin={removeCoinFunc}
      />
    </header>
  );
};
const mapStateToProps = (state) => ({
  topCoin: state.header.topCoin,
  currentPortfolio: state.portfolio.currentPortfolio,
  previousPortfolio: state.portfolio.previousPortfolio,
  portfolio: state.portfolio.portfolio,
});

HeaderContainer.propTypes = {
  getTopCoin: PropTypes.func.isRequired,
  removeCoin: PropTypes.func.isRequired,
  topCoin: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPortfolio: PropTypes.string.isRequired,
  previousPortfolio: PropTypes.string.isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, {
  getTopCoin,
  removeCoin,
})(HeaderContainer);
