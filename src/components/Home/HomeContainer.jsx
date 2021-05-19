import React, {useEffect} from 'react'
import {Home} from "./Home"
import {connect} from "react-redux"
import {getCoinsList, setCurrentPage} from "../../redux/home-reducer"

const HomeContainer = (props) => {

    useEffect(() => {
        props.getCoinsList(props.currentPage, props.pageSize)
    }, [props.pageSize, props.currentPage])

    const onPageChange = (currentPage) => {
        props.setCurrentPage(currentPage)
    }

    return (
        <Home coinList={props.coinList} onPageChange={onPageChange}/>
    )
}

const mapStateToProps = (state) => {
    return {
        coinList: state.home.coinList,
        pageSize: state.home.pageSize,
        currentPage: state.home.currentPage
    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    getCoinsList
})(HomeContainer)