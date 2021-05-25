import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import InfoModal from '../ModalComponents/InfoModal';
import style from './Header.module.css';

const Header = (props) => {
  const {
    removeCoin, currentPortfolio, previousPortfolio, portfolio, topCoin,
  } = props;
  const change = (currentPortfolio - previousPortfolio).toFixed(2);

  const changePercent = +previousPortfolio
    ? ((currentPortfolio / previousPortfolio) * 100 - 100).toFixed(2)
    : 0;
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${style.navbar_color}`}>
      <div className="container">
        <NavLink className="navbar-brand" to="/home">Home</NavLink>
        <div className="container col-5">
          <div className="row">
            {topCoin.map((coin, index) => (
              <div key={coin.id} className="col-4 w-75">
                {`${index + 1}. ${coin.name} - $${Number(coin.priceUsd).toFixed(2)}`}
              </div>
            ))}
          </div>
        </div>
        <div className="col-7 container text-center">
          <div className="row">
            <div className="col-8 align-self-center w-75">{`You portfolio: $${(+currentPortfolio).toFixed(2)}, change: $${change} (${changePercent} %)`}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-info btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Info
              </button>
              <InfoModal
                portfolio={portfolio}
                removeCoin={removeCoin}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  removeCoin: PropTypes.func.isRequired,
  topCoin: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPortfolio: PropTypes.string.isRequired,
  previousPortfolio: PropTypes.string.isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
