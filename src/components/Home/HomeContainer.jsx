import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home';
import {
  getCoinsList, setCurrentPage, setPagePortion, setPortion,
} from '../../redux/home-reducer';
import { setPortfolio, updatePortfolioValue } from '../../redux/portfolio-reducer';

const HomeContainer = (props) => {
  const {
    setCurrentPage: setCurrentPageFunc, getCoinsList: getCoinsListFunc,
    setPortion: setPortionFunc, setPagePortion: setPagePortionFunc,
    updatePortfolioValue: updatePortfolioValueFunc, setPortfolio: setPortfolioFunc,
    pagePortion, currentPage, pageSize, totalPageSize, coinList,
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
    getCoinsListFunc(currentPage, pageSize);
  }, [pageSize, currentPage, getCoinsListFunc]);

  useEffect(() => {
    setPortionFunc(pagePortion, pageSize);
  }, [pagePortion, pageSize, setPortionFunc]);

  const onPageChange = (page) => {
    setCurrentPageFunc(page);
  };
  const nextPortion = (portionPage) => {
    setPagePortionFunc(portionPage + 1);
  };
  const prevPortion = (portionPage) => {
    setPagePortionFunc(portionPage - 1);
  };

  return (
    <Home
      totalPageSize={totalPageSize}
      coinList={coinList}
      pagePortion={pagePortion}
      onPageChange={onPageChange}
      pageSize={pageSize}
      buyCoin={buyCoin}
      nextPortion={nextPortion}
      prevPortion={prevPortion}
    />
  );
};

const mapStateToProps = (state) => ({
  coinList: state.home.coinList,
  pageSize: state.home.pageSize,
  currentPage: state.home.currentPage,
  totalPageSize: state.home.totalPageSize,
  pagePortion: state.home.pagePortion,
});

HomeContainer.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  getCoinsList: PropTypes.func.isRequired,
  setPortion: PropTypes.func.isRequired,
  setPagePortion: PropTypes.func.isRequired,
  updatePortfolioValue: PropTypes.func.isRequired,
  setPortfolio: PropTypes.func.isRequired,
  pagePortion: PropTypes.number.isRequired,
  totalPageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  coinList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, {
  setCurrentPage,
  getCoinsList,
  setPortion,
  setPagePortion,
  updatePortfolioValue,
  setPortfolio,
})(HomeContainer);
