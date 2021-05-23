import React from 'react'
import {NavLink} from "react-router-dom"

export const PortfolioTable = (props) => {

    const removeCoin = (index) => {
        let previous = localStorage.getItem("current")
        localStorage.setItem("previous", previous)
        let current = Number(previous - props.portfolio[index].value).toFixed(2)
        localStorage.setItem("current", current.toString())
        props.updatePortfolioValue(current, previous)
        const oldList = JSON.parse(localStorage.getItem("list"))
        oldList.splice(index, 1)
        console.log(oldList)
        localStorage.setItem("list", JSON.stringify(oldList))
        props.setPortfolio(oldList)
    }

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
                        <th scope="col">Price</th>
                        <th scope="col">Value</th>
                        <th scope="col">Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.portfolio.map((coin, index) => {
                        return (
                            <tr key={index + 1}>
                                <th scope="row">{index + 1}</th>
                                <td><NavLink className="link-primary" to='/view/1'>{coin.name}</NavLink></td>
                                <td>{coin.count}</td>
                                <td>{coin.price}</td>
                                <td>{coin.value}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" onClick={() => removeCoin(index)}>
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