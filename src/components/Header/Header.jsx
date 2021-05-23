import React from 'react'
import {InfoModal} from "../ModalComponents/InfoModal"
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {

    const change = (Number(props.currentPortfolio) - Number(props.previousPortfolio)).toFixed(2)

    const changePercent = Number(props.previousPortfolio) ? (Number(props.currentPortfolio) / Number(props.previousPortfolio) * 100 - 100).toFixed(2): 0

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${style.navbar_color}`}>
            <div className="container">
                <NavLink className="navbar-brand" to="/home">Home</NavLink>
                <div className="container col-5">
                    <div className="row">
                        {props.topCoin.map((coin,index) => {
                            return <div className="col-4 w-75">
                                {`${index +1}. ${coin.name} - $${Number(coin.priceUsd).toFixed(2)}`}
                            </div>
                        })}
                    </div>
                </div>
                <div className="col-7 container text-center">
                    <div className="row">
                        <div className="col-8 align-self-center w-75">{`You portfolio: $${props.currentPortfolio}, change: $${change} (${changePercent} %)`}</div>
                        <div className="col-2">
                            <button className="btn btn-info btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Info</button>
                            <InfoModal portfolio={props.portfolio} setPortfolio={props.setPortfolio}
                                       updatePortfolioValue={props.updatePortfolioValue}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}