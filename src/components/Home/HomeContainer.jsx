import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home';
import {
  getCoinsList, setCurrentPage, setPagePortion, setPortion,
} from '../../redux/home-reducer';
import { buyCoin } from '../../redux/portfolio-reducer';

const HomeContainer = (props) => {
  const {
    setCurrentPage: setCurrentPageFunc, getCoinsList: getCoinsListFunc,
    setPortion: setPortionFunc, setPagePortion: setPagePortionFunc,
    buyCoin: buyCoinFunc,
    pagePortion, currentPage, pageSize, totalPageSize, coinList,
  } = props;
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
      buyCoin={buyCoinFunc}
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
  buyCoin: PropTypes.func.isRequired,
  setPortion: PropTypes.func.isRequired,
  setPagePortion: PropTypes.func.isRequired,
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
  buyCoin,
})(HomeContainer);
