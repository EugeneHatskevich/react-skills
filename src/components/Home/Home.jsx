import React from 'react'
import {NavLink} from "react-router-dom";
import {AddModal} from "../ModalComponents/AddModal";

export const Home = () => {
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
                        <th scope="col">VWAP (24Hr)	</th>
                        <th scope="col">Supply</th>
                        <th scope="col">Volume (24Hr)</th>
                        <th scope="col">Change (24Hr)</th>
                        <th scope="col">Add</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><NavLink className="link-primary" to='/view/1'>test</NavLink></td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td><AddModal/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-2"/>
        </div>
    )
}