import React from 'react'
import {CoinPage} from "./CoinPage";
import {compose} from "redux";
import {withRouter} from 'react-router-dom'

const CoinPageContainer = (props) => {

    const coinId = props.match.params.coinId

    return (
        <div>
            <CoinPage id={coinId}/>
        </div>
    )
}

export default compose(
    withRouter
)(CoinPageContainer)