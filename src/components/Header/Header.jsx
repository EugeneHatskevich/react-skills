import React from 'react'
import {InfoModal} from "../ModalComponents/InfoModal"
import style from './Header.module.css'

export const Header = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${style.navbar_color}`}>
            <div className="container">
                <div className="container col-9">
                    <div className="row">
                        <div className="col">1. Bitcoin - 4564464$</div>
                        <div className="col">2. Ethereum - 4564$</div>
                        <div className="col">3. Binance Coin - 456$</div>
                    </div>
                </div>
                <div className="col-4 container text-center">
                    <div className="row">
                        <div className="col-8 align-self-center">You portfolio: 134,32 USD +2,38 (1,80 %)</div>
                        <div className="col-2">
                            <button className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Info</button>
                            <InfoModal/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}