import React, {useEffect} from 'react'
import {Home} from "./Home"
import {connect} from "react-redux"
import {getCoinsList, setCurrentPage, setPagePortion, setPortion} from "../../redux/home-reducer"
import {setPortfolio, updatePortfolioValue} from "../../redux/portfolio-reducer";

const HomeContainer = (props) => {

    useEffect(() => {
        props.getCoinsList(props.currentPage, props.pageSize)
    }, [props.pageSize, props.currentPage])

    useEffect(() => {
        props.setPortion(props.currentPage, props.pageSize)
    }, [props.pagePortion])

    const onPageChange = (currentPage) => {
        props.setCurrentPage(currentPage)
    }

    return (
        <Home {...props} onPageChange={onPageChange} setPagePortion={props.setPagePortion}
              updatePortfolioValue={props.updatePortfolioValue}
              setPortfolio={props.setPortfolio}/>
    )
}

const mapStateToProps = (state) => {
    return {
        coinList: state.home.coinList,
        pageSize: state.home.pageSize,
        currentPage: state.home.currentPage,
        totalPageSize: state.home.totalPageSize,
        pagePortion: state.home.pagePortion
    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    getCoinsList,
    setPortion,
    setPagePortion,
    updatePortfolioValue,
    setPortfolio
})(HomeContainer)