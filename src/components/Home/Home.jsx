import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddModal from '../ModalComponents/AddModal';

const Home = (props) => {
  const {
    totalPageSize, pagePortion, pageSize,
    coinList, onPageChange, buyCoin, nextPortion, prevPortion,
  } = props;
  const pagesCount = Math.ceil(totalPageSize / pageSize);
  const pages = [];
  for (let i = (pagePortion - 1) * props.pageSize + 1;
    i <= (pagePortion - 1) * props.pageSize + pagesCount;
    i += 1) {
    pages.push(i);
  }
  return (
    <div className="container">
      <div className="col">
        <table
          className="table align-middle text-center table-bordered table-hover table-striped table-sm border-top mt-4"
        >
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Market CAP</th>
              <th scope="col">VWAP (24Hr)</th>
              <th scope="col">Supply</th>
              <th scope="col">Volume (24Hr)</th>
              <th scope="col">Change (24Hr)</th>
              <th scope="col">Add</th>
            </tr>
          </thead>
          <tbody>
            {coinList.map((coin) => (
              <tr key={coin.id}>
                <th scope="row">{coin.rank}</th>
                <td><NavLink className="link-primary" to={`/view/${coin.id}`}>{coin.name}</NavLink></td>
                <td>
                  $
                  {Number(coin.priceUsd).toFixed(2)}
                </td>
                <td>
                  $
                  {(Number(coin.marketCapUsd) / 1000000000).toFixed(2)}
                  b
                </td>
                <td>
                  $
                  {Number(coin.vwap24Hr).toFixed(2)}
                </td>
                <td>
                  {(Number(coin.supply) / 1000000).toFixed(2)}
                  m
                </td>
                <td>
                  $
                  {(Number(coin.volumeUsd24Hr) / 1000000).toFixed(2)}
                  m
                </td>
                <td>
                  {Number(coin.changePercent24Hr).toFixed(2)}
                  %
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target={`#Modal${coin.id}`}
                  >
                    +
                  </button>
                  <AddModal
                    coinInfo={coin}
                    buyCoin={buyCoin}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={9}>
                <nav>
                  <ul className="pagination justify-content-center mb-2 mt-2">
                    {pagePortion > 1 && (
                      <button
                        type="button"
                        onClick={() => prevPortion(pagePortion)}
                        className="page-link"
                      >
                        Prev
                      </button>
                    )}
                    {pages.map((page) => (
                      <li key={page} className="page-item">
                        <button
                          type="button"
                          onClick={() => onPageChange(page)}
                          className="page-link"
                        >
                          {page}
                        </button>
                      </li>
                    ))}
                    {pagesCount === 10 && (
                      <button
                        type="button"
                        onClick={() => nextPortion(pagePortion)}
                        className="page-link"
                      >
                        Next
                      </button>
                    )}
                  </ul>
                </nav>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

Home.propTypes = {
  totalPageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  buyCoin: PropTypes.func.isRequired,
  coinList: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number.isRequired,
  pagePortion: PropTypes.number.isRequired,
  nextPortion: PropTypes.func.isRequired,
  prevPortion: PropTypes.func.isRequired,
};

export default Home;
