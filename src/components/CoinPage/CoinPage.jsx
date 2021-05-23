import React from 'react'
import {XAxis, YAxis, Tooltip, Area, AreaChart} from "recharts"
import {AddModal} from "../ModalComponents/AddModal";

export const CoinPage = (props) => {

    console.log(props.coinHistory)

    return (
        <div className="container">
            <div className="row text-center pt-4">
                <div className="col-5"/>
                <div className="col-2"><h1 className="text-capitalize">{props.id}</h1></div>
                <div className="col">
                    <button className="btn btn-primary btn-sm mt-2" data-bs-toggle="modal"
                            data-bs-target={`#Modal${props.id}`}>
                        Приобрести криптовалюту
                    </button>
                </div>
                <AddModal {...props} updatePortfolioValue={props.updatePortfolioValue}
                          setPortfolio={props.setPortfolio}/>
            </div>
            <div className="row">
                <div className="col-4"/>
                <div className="col">
                    <div className="col">График изменение цены за сутки</div>
                </div>
            </div>
                <AreaChart
                    width={1000}
                    height={500}
                    data={props.coinHistory}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="date" scale="auto"/>
                    <YAxis domain={['auto', "auto"]} minTickGap={5}/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="priceUsd" stroke="#8884d8" fill="#8884d8"/>
                </AreaChart>
        </div>
    )
}