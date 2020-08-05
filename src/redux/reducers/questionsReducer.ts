import birdsData from '../../data'
import { QuestionsActionsType } from '../actions/questionsAction'

export type BirdDataType = {
    id: number
    name: string
    species: string
    description: string
    image: string
    audio: string
}

const initialState = {
    birdsData: birdsData as any,
    currentIndex: 0 as number,
    birdsQuestions: [] as Array<any>,
    randomQuestionIndex: Math.floor(Math.random() * Math.floor(5)) as number,
    randomQuestion: {} as BirdDataType,
    isAnswer: false as boolean,
    selectedBird: null as null | BirdDataType
}

export type QuestionsReducerType = typeof initialState

export const questionsReducer = (state = initialState, action: QuestionsActionsType): QuestionsReducerType => {
    switch(action.type){
        case 'GET_BIRDS_QUESTIONS':
            return {
                ...state,
                birdsQuestions: state.birdsData[state.currentIndex]
            }
        case 'GET_NEXT_QUESTIONS':
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
                selectedBird: null
            }
        case 'SET_RANDOM_QUESTION':
            return {
                ...state,
                randomQuestionIndex: Math.floor(Math.random() * Math.floor(5)),
                randomQuestion: state.birdsQuestions[state.randomQuestionIndex]
            }
        case 'SET_IS_ANSWER':
            return {
                ...state,
                isAnswer: !state.isAnswer
            }
        case 'SET_CURRENT_INDEX':
            return {
                ...state,
                currentIndex: action.payload,
                selectedBird: null
            }
        case 'SELECT_BIRD':
            return {
                ...state,
                selectedBird: action.payload
            }
        default:
            return state
    }
}