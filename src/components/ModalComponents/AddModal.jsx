import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddModal = (props) => {
  const [coinValue, setValue] = useState('');
  const { coinInfo, buyCoin } = props;
  const { priceUsd, name, id } = coinInfo;
  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="container">
      <div
        className="modal fade"
        id={`Modal${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="container">
                <p>Введите количество криптовалюты:</p>
                <input
                  type="number"
                  value={coinValue}
                  onChange={changeHandler}
                  name="coinValue"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => buyCoin(coinValue, priceUsd, name)}>
                Приобрести
              </button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddModal.propTypes = {
  buyCoin: PropTypes.func.isRequired,
  coinInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AddModal;
