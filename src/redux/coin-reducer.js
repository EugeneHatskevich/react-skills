import {coinAPI} from "../api/coin.api";

const SET_HISTORY = 'SET_HISTORY'
const SET_INFO = 'SET_INFO'

let initialState = {
    historyData: [],
    infoData: {}
}

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORY: {
            return {
                ...state,
                historyData: [...action.historyData]
            }
        }
        case SET_INFO: {
            return {
                ...state,
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

export const getInfoAndHistory = (id, interval) => {
    return (dispatch) => {
        coinAPI.getHistory(id, interval).then(response => {
            dispatch(setHistory(response.data))
            coinAPI.getInfo(id).then(response => {
                dispatch(setInfo(response.data))
            })
        })
    }
}