import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { getTopCoin } from '../../redux/header-reducer';
import { setPortfolio, updatePortfolioValue } from '../../redux/portfolio-reducer';

const HeaderContainer = (props) => {
  const {
    setPortfolio: setPortfolioFunc, getTopCoin: getTopCoinFunc,
    updatePortfolioValue: updatePortfolioValueFunc, currentPortfolio,
    previousPortfolio, portfolio, topCoin,
  } = props;
  const removeCoin = (index) => {
    const previous = localStorage.getItem('current');
    localStorage.setItem('previous', previous);
    const current = +(previous - portfolio[index].value).toFixed(2);
    localStorage.setItem('current', current.toString());
    updatePortfolioValueFunc(current, previous);
    const oldList = JSON.parse(localStorage.getItem('list'));
    oldList.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(oldList));
    setPortfolioFunc(oldList);
  };
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
        removeCoin={removeCoin}
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
  setPortfolio: PropTypes.func.isRequired,
  updatePortfolioValue: PropTypes.func.isRequired,
  topCoin: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPortfolio: PropTypes.string.isRequired,
  previousPortfolio: PropTypes.string.isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, {
  getTopCoin,
  setPortfolio,
  updatePortfolioValue,
})(HeaderContainer);
