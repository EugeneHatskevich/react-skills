import React from 'react'
import {NavLink} from "react-router-dom";
import {AddModal} from "../ModalComponents/AddModal";

export const Home = (props) => {

    return (
        <div className="container">
            <div className="col-2"/>
            <div className="col">
                <table className="table text-center">
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
                    {props.coinList.map((coin) => {
                        return (
                            <tr>
                                <th scope="row">{coin.rank}</th>
                                <td><NavLink className="link-primary" to='/view/1'>{coin.name}</NavLink></td>
                                <td>${Number(coin.priceUsd).toFixed(2)}</td>
                                <td>${(Number(coin.marketCapUsd) / 1000000000).toFixed(2)}b</td>
                                <td>${Number(coin.vwap24Hr).toFixed(2)}</td>
                                <td>{(Number(coin.supply) / 1000000).toFixed(2)}m</td>
                                <td>${(Number(coin.volumeUsd24Hr) / 1000000).toFixed(2)}m</td>
                                <td>{Number(coin.changePercent24Hr).toFixed(2)}%</td>
                                <td><AddModal/></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className="col-2"/>
        </div>
    )
}