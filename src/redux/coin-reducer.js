import {coinAPI} from "../api/coin.api";
import dateformat from 'dateformat'

const SET_HISTORY = 'SET_HISTORY'
const SET_INFO = 'SET_INFO'

let initialState = {
    historyData: [],
    infoData: {}
}

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORY: {
            const newList = action.historyData.map(elem => {
                return {date: dateformat(new Date(elem.time), "hh TT"), priceUsd: elem.priceUsd}
            })
            return {
                ...state,
                historyData: newList,
            }
        }
        case SET_INFO: {
            return {
                ...state,
                infoData: {...action.infoData}
            }
        }
        default:
            return state
    }
}

const setHistory = (historyData) => {
    return {
        type: SET_HISTORY,
        historyData
    }
}
const setInfo = (infoData) => {
    return {
        type: SET_INFO,
        infoData
    }
}

export const getInfoAndHistory = (id) => {
    return (dispatch) => {
        coinAPI.getHistory(id).then(response => {
            dispatch(setHistory(response.data))
            coinAPI.getInfo(id).then(response => {
                dispatch(setInfo(response.data))
            })
        })
    }
}