import {coinAPI} from "../api/coin.api";

const SET_COIN_LIST = 'SET_COIN_LIST'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    coinList: [],
    pageSize: 10,
    currentPage: 1,
    totalPageSize: 0
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COIN_LIST: {
            return {
                ...state,
                coinList: [...action.data]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
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
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
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

