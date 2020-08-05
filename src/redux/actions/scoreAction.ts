import { InferActionsType } from './../store'

export type ScoreActionsType = InferActionsType<typeof scoreActions>

export const scoreActions = {
    setAllScore: () => ({ type: 'SET_ALL_SCORE' } as const),
    subtractScore: () => ({ type: 'SUBTRACT_SCORE' } as const),
    nullifyScore: () => ({ type: 'NULLIFY_SCORE' } as const),
    nullifyAllScore: () => ({ type: 'NULLIFY_ALL_SCORE' } as const)
}