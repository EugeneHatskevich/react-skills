import React from 'react'
import {LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip} from "recharts"
import {AddModal} from "../ModalComponents/AddModal"

export const CoinPage = (props) => {

    const data = [{name: 'Time 1', value: 400},
        {name: 'Time 2', value: 200},
        {name: 'Time 3', value: 300},]

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
                <AddModal id={props.id}/>
            </div>
            <div className="row">
                <div className="col-8"/>
                <div className="col-4">Info</div>
            </div>
            <div className="row">
                <div className="col">
                    <LineChart width={1000} height={400} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </div>
            </div>
        </div>
    )
}