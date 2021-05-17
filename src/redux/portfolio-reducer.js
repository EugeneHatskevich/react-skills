const SET_PORTFOLIO = 'SET_PORTFOLIO'


let initialState = {
    portfolio: {},
    currentPortfolio: 0,
    previousPortfolios: 0
}

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PORTFOLIO: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

const setPortfolio = (data) => {
    return {
        type: SET_PORTFOLIO,
        data
    }
}