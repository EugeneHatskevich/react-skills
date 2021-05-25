import React from 'react';
import {
  XAxis, YAxis, Tooltip, Area, AreaChart,
} from 'recharts';
import PropTypes from 'prop-types';
import AddModal from '../ModalComponents/AddModal';

const CoinPage = (props) => {
  const {
    id, coinHistory, coinInfo, buyCoin,
  } = props;
  return (
    <div className="container">
      <div className="row text-center pt-4">
        <div className="col-5" />
        <div className="col-2"><h1 className="text-capitalize">{id}</h1></div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary btn-sm mt-2"
            data-bs-toggle="modal"
            data-bs-target={`#Modal${id}`}
          >
            Приобрести криптовалюту
          </button>
        </div>
        <AddModal
          coinInfo={coinInfo}
          buyCoin={buyCoin}
        />
      </div>
      <div className="row">
        <div className="col-4" />
        <div className="col">
          <div className="col">График изменение цены за сутки</div>
        </div>
      </div>
      <AreaChart
        width={1000}
        height={500}
        data={coinHistory}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="date" scale="auto" />
        <YAxis domain={['auto', 'auto']} minTickGap={5} />
        <Tooltip />
        <Area type="monotone" dataKey="priceUsd" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

CoinPage.propTypes = {
  id: PropTypes.string.isRequired,
  buyCoin: PropTypes.func.isRequired,
  coinHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
  coinInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoinPage;
