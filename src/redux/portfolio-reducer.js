const SET_PORTFOLIO = 'SET_PORTFOLIO'
const UPDATE_PORTFOLIO_VALUE = 'UPDATE_PORTFOLIO_VALUE'


let initialState = {
    portfolio: [
        {id: 1},
        {id: 2},
        {id: 3}
    ],
    currentPortfolio: 0,
    previousPortfolios: 0
}

export const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PORTFOLIO: {
            return {
                ...state,
            }
        }
        case UPDATE_PORTFOLIO_VALUE: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

export const setPortfolio = (data) => {
    return {
        type: SET_PORTFOLIO,
        data
    }
}
export const updatePortfolioValue = (data) => {
    return {
        type: UPDATE_PORTFOLIO_VALUE,
        data
    }
}