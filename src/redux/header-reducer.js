import {coinAPI} from "../api/coin.api";

const SET_TOP_COIN = 'SET_TOP_COIN'
const SET_CURRENT_VALUE = 'SET_CURRENT_VALUE'
const SET_PREVIOUS_VALUE = 'SET_PREVIOUS_VALUE'

let initialState = {
    topCoin: [],
    currentValue: 0,
    previousValue: 0
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_COIN: {
            return {
                ...state,
                topCoin: [...action.topCoin]
            }
        }
        case SET_CURRENT_VALUE: {
            return {
                ...state
            }
        }
        case SET_PREVIOUS_VALUE: {
            return {
                ...state
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
export const setCurrentValue = (currentValue) => {
    return {
        type: SET_CURRENT_VALUE,
        currentValue
    }
}
export const setPreviousValue = (previousValue) => {
    return {
        type: SET_PREVIOUS_VALUE,
        previousValue
    }
}

export const getTopCoin = (currentPage, pageSize) => {
    return (dispatch) => {
        coinAPI.getTopList().then(response => {
            console.log(response.data)
            dispatch(setTopCoin(response.data))
        })
    }
}
