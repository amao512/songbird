import { SUBTRACT_SCORE, SET_ALL_SCORE, NULLIFY_SCORE, NULLIFY_ALL_SCORE } from "../constants"

const initialState = {
    allScore: 0,
    score: 5
}

export const scoreReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ALL_SCORE:
            return {
                ...state,
                allScore: state.allScore + state.score,
                score: 5
            }
        case SUBTRACT_SCORE:
            return {
                ...state,
                score: state.score - 1
            }
        case NULLIFY_SCORE:
            return {
                ...state,
                score: 0
            }
        case NULLIFY_ALL_SCORE:
            return {
                ...state,
                allScore: 0,
                score: 5
            }
        default:
            return state
    }
}