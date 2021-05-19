import React from 'react'
import {NavLink} from "react-router-dom"
import {AddModal} from "../ModalComponents/AddModal"

export const Home = (props) => {

    let pages = []

    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return (
        <div className="container">
            <div className="col">
                <table
                    className="table align-middle text-center table-bordered table-hover table-striped table-sm border-top mt-4">
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
                                <td><NavLink className="link-primary" to={`/view/${coin.id}`}>{coin.name}</NavLink></td>
                                <td>${Number(coin.priceUsd).toFixed(2)}</td>
                                <td>${(Number(coin.marketCapUsd) / 1000000000).toFixed(2)}b</td>
                                <td>${Number(coin.vwap24Hr).toFixed(2)}</td>
                                <td>{(Number(coin.supply) / 1000000).toFixed(2)}m</td>
                                <td>${(Number(coin.volumeUsd24Hr) / 1000000).toFixed(2)}m</td>
                                <td>{Number(coin.changePercent24Hr).toFixed(2)}%</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal"
                                            data-bs-target={`#Modal${coin.id}`}>
                                        +
                                    </button>
                                    <AddModal {...coin} />
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                    <tfoot>
                    <td colSpan={9}>
                        <nav>
                            <ul className="pagination justify-content-center mb-2 mt-2">
                                {pages.map(page => {
                                    return <li className="page-item">
                                        <button className="page-link">{page}</button>
                                    </li>
                                })}
                            </ul>
                        </nav>
                    </td>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}