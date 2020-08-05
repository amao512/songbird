import { ScoreActionsType } from './../actions/scoreAction'

const initialState = {
    allScore: 0 as number,
    score: 5 as number
}

type ScoreReducerType = typeof initialState

export const scoreReducer = (state = initialState, action: ScoreActionsType): ScoreReducerType => {
    switch(action.type){
        case 'SET_ALL_SCORE':
            return {
                ...state,
                allScore: state.allScore + state.score,
                score: 5
            }
        case 'SUBTRACT_SCORE':
            return {
                ...state,
                score: state.score - 1
            }
        case 'NULLIFY_SCORE':
            return {
                ...state,
                score: 0
            }
        case 'NULLIFY_ALL_SCORE':
            return {
                ...state,
                allScore: 0,
                score: 5
            }
        default:
            return state
    }
}