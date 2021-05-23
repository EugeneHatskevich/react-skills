import React, {useEffect} from 'react'
import {CoinPage} from "./CoinPage"
import {compose} from "redux"
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {getInfoAndHistory} from "../../redux/coin-reducer"
import {setPortfolio, updatePortfolioValue} from "../../redux/portfolio-reducer";

const CoinPageContainer = (props) => {

    const coinId = props.match.params.coinId

    useEffect(() => {
        props.getInfoAndHistory(coinId)
    }, [coinId])

    return (
        <div>
            <CoinPage id={coinId} {...props} updatePortfolioValue={props.updatePortfolioValue}
                      setPortfolio={props.setPortfolio}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        coinHistory: state.coinInfo.historyData,
        coinInfo: state.coinInfo.infoData
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        getInfoAndHistory,
        updatePortfolioValue,
        setPortfolio
    })
)(CoinPageContainer)