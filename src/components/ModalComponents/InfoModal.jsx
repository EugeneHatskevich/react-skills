import React from 'react';
import PropTypes from 'prop-types';
import PortfolioTable from '../Header/PortfolioTable';

const InfoModal = (props) => {
  const { portfolio, removeCoin } = props;
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Portfolio</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <PortfolioTable
              portfolio={portfolio}
              removeCoin={removeCoin}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoModal.propTypes = {
  removeCoin: PropTypes.func.isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InfoModal;
