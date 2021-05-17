import {coinAPI} from "../api/coin.api";

const SET_COIN_LIST = 'SET_COIN_LIST'
const SET_HISTORY = 'SET_HISTORY'


let initialState = {
    coinList: [],
    pageSize: 10,
    pageCount: 1,
    history: []
}

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COIN_LIST: {
            return {
                ...state,
                coinList: [...action.data]
            }
        }
        case SET_HISTORY: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

const setCoinList = (data) => {
    return {
        type: SET_COIN_LIST,
        data
    }
}
const setHistory = (history) => {
    return {
        type: SET_HISTORY,
        history
    }
}

export const getCoinsList = (currentPage, pageSize) => {
    return (dispatch) => {
        coinAPI.getCoinList(currentPage, pageSize).then(response => {
            console.log(response.data)
            dispatch(setCoinList(response.data))
        })
    }
}
export const getHistory = (name, interval) => {
    return (dispatch) => {
        coinAPI.getHistory(name, interval).then(response => {
            console.log(response.data)
            dispatch(setHistory(response.data))
        })
    }
}
