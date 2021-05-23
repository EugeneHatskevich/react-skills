import {coinAPI} from "../api/coin.api";

const SET_TOP_COIN = 'SET_TOP_COIN'

let initialState = {
    topCoin: [],
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_COIN: {
            return {
                ...state,
                topCoin: [...action.topCoin]
            }
        }
        default:
            return state
    }
}

export const setTopCoin = (topCoin) => {
    return {
        type: SET_TOP_COIN,
        topCoin
    }
}

export const getTopCoin = () => {
    return (dispatch) => {
        coinAPI.getTopList().then(response => {
            console.log(response.data)
            dispatch(setTopCoin(response.data))
        })
    }
}
