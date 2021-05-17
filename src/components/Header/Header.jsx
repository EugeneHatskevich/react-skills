import React from 'react'
import {NavLink} from "react-router-dom";
import {InfoModal} from "../ModalComponents/InfoModal";

export const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <InfoModal/>
                            </li>
                        </ul>
                    </div>
                        {props.topCoin.map(coin => {
                            return <div>{`${coin.name}|change: ${Number(coin.changePercent24Hr).toFixed(2)}---`}</div>
                        })}</div>
            </nav>
        </div>
    )
}