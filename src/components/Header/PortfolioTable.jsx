import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const PortfolioTable = (props) => {
  const { portfolio, removeCoin } = props;
  return (
    <div className="container">
      <div className="col">
        <table
          className="table align-middle text-center table-bordered table-hover table-striped table-sm border-top"
        >
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Name</th>
              <th scope="col">Count</th>
              <th scope="col">Price</th>
              <th scope="col">Value</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((coin, index) => (
              <tr key={coin.id}>
                <th scope="row">{index + 1}</th>
                <td><NavLink className="link-primary" to="/view/1">{coin.title}</NavLink></td>
                <td>{coin.count}</td>
                <td>{coin.price}</td>
                <td>{coin.value}</td>
                <td>
                  <button type="button" className="btn btn-primary btn-sm" onClick={() => removeCoin(portfolio, index)}>
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

PortfolioTable.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCoin: PropTypes.func.isRequired,
};

export default PortfolioTable;
