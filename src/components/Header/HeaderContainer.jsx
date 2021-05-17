import React, {useEffect} from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {getTopCoin} from "../../redux/header-reducer";

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getTopCoin()
    },[])

    return (
        <div>
            <Header {...props}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        topCoin: state.header.topCoin
    }
}

export default connect(mapStateToProps, {
    getTopCoin
})(HeaderContainer)