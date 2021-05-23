const SET_PORTFOLIO = 'SET_PORTFOLIO'
const UPDATE_PORTFOLIO_VALUE = 'UPDATE_PORTFOLIO_VALUE'


let initialState = {
    portfolio: JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : [],
    currentPortfolio: localStorage.getItem("current") ? localStorage.getItem("current") : 0,
    previousPortfolio: localStorage.getItem("previous")
}

export const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PORTFOLIO: {
            return {
                ...state,
                portfolio: [...action.data]
            }
        }
        case UPDATE_PORTFOLIO_VALUE: {
            return {
                ...state,
                currentPortfolio: action.current,
                previousPortfolio: action.previous
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
export const updatePortfolioValue = (current, previous) => {
    return {
        type: UPDATE_PORTFOLIO_VALUE,
        current,
        previous
    }
}