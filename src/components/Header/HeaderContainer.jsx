import React, {useEffect} from 'react'
import {Header} from "./Header"
import {connect} from "react-redux"
import {getTopCoin} from "../../redux/header-reducer"
import {setPortfolio, updatePortfolioValue} from "../../redux/portfolio-reducer"

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getTopCoin()
    },[])

    return (
        <header>
            <Header {...props}/>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        topCoin: state.header.topCoin,
        currentPortfolio: state.portfolio.currentPortfolio,
        previousPortfolio: state.portfolio.previousPortfolio,
        portfolio: state.portfolio.portfolio
    }
}

export default connect(mapStateToProps, {
    getTopCoin,
    setPortfolio,
    updatePortfolioValue
})(HeaderContainer)