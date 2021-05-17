import React, {useEffect} from 'react'
import {Home} from "./Home";
import {connect} from "react-redux";
import {getCoinsList} from "../../redux/coin-reducer";

const HomeContainer = (props) => {

    useEffect(() => {
        props.getCoinsList(props.currentPage, props.pageSize)
    }, [props.pageSize, props.currentPage])

    return (
        <div>
            <Home coinList={props.coinList}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        coinList: state.coinInfo.coinList,
        pageSize: state.coinInfo.pageSize,
        currentPage: state.coinInfo.pageCount
    }
}

export default connect(mapStateToProps,{
    getCoinsList})(HomeContainer)