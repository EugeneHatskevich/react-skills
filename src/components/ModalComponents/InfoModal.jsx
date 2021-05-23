import React from 'react'
import {PortfolioTable} from "../Home/PortfolioTable"

export const InfoModal = (props) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Portfolio</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        <PortfolioTable portfolio={props.portfolio} setPortfolio={props.setPortfolio}
                                        updatePortfolioValue={props.updatePortfolioValue}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        {/*<button type="button" className="btn btn-primary">Сохранить</button>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}