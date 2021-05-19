import React, {useEffect} from 'react'
import {CoinPage} from "./CoinPage"
import {compose} from "redux"
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {getInfoAndHistory} from "../../redux/coin-reducer"

const CoinPageContainer = (props) => {

    const coinId = props.match.params.coinId

    // useEffect(() => {
    //     props.getInfoAndHistory(coinId, "d1")
    // },[coinId])

    return (
        <div>
            <CoinPage id={coinId}/>
        </div>
    )
}

export default compose(
    withRouter,
    connect(null, {
        getInfoAndHistory
    })
)(CoinPageContainer)