import React from 'react'
import {NavLink} from "react-router-dom"

export const PortfolioTable = () => {

    const portfolioCoinList = [
        {id: 1, name: "Bitcoin", value: 15, count: 1.52},
        {id: 2, name: "Ethereum", value: 53, count: 11.5}
    ]

    return (
        <div className="container">
            <div className="col">
                <table
                    className={`table align-middle text-center table-bordered table-hover table-striped table-sm border-top`}>
                    <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Name</th>
                        <th scope="col">Count</th>
                        <th scope="col">Value</th>
                        <th scope="col">Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {portfolioCoinList.map((coin) => {
                        return (
                            <tr>
                                <th scope="row">{coin.id}</th>
                                <td><NavLink className="link-primary" to='/view/1'>{coin.name}</NavLink></td>
                                <td>{coin.count}</td>
                                <td>${Number(coin.value).toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal"
                                            data-bs-target={`#Modal${coin.id}`}>
                                        x
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}