import { InferActionsType } from './../store'
import { BirdDataType } from '../reducers/questionsReducer'

export type QuestionsActionsType = InferActionsType<typeof questionsActions>

export const questionsActions = {
    getBirdsQuestions: () => ({ type: 'GET_BIRDS_QUESTIONS' } as const),
    setRandomQuestion: () => ({ type: 'SET_RANDOM_QUESTION' } as const),
    setIsAnswer: () => ({ type: 'SET_IS_ANSWER' } as const),
    getNextQuestion: () => ({ type: 'GET_NEXT_QUESTIONS' } as const),
    setCurrentIndex: (index = 0) => ({ type: 'SET_CURRENT_INDEX', payload: index } as const),
    selectBird: (bird: BirdDataType) => ({ type: 'SELECT_BIRD', payload: bird } as const)
}