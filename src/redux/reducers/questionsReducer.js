import birdsData from '../../data'
import { GET_BIRDS_QUESTIONS, SET_RANDOM_QUESTION, SET_IS_ANSWER, GET_NEXT_QUESTIONS, SET_CURRENT_INDEX, SELECT_BIRD } from '../constants'

const initialState = {
    birdsData: birdsData,
    currentIndex: 0,
    birdsQuestions: [],
    randomQuestionIndex: Math.floor(Math.random() * Math.floor(5)),
    randomQuestion: {},
    isAnswer: false,
    selectedBird: null
}

export const questionsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BIRDS_QUESTIONS:
            return {
                ...state,
                birdsQuestions: state.birdsData[state.currentIndex]
            }
        case GET_NEXT_QUESTIONS:
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
                selectedBird: null
            }
        case SET_RANDOM_QUESTION:
            return {
                ...state,
                randomQuestionIndex: Math.floor(Math.random() * Math.floor(5)),
                randomQuestion: state.birdsQuestions[state.randomQuestionIndex]
            }
        case SET_IS_ANSWER:
            return {
                ...state,
                isAnswer: !state.isAnswer
            }
        case SET_CURRENT_INDEX:
            return {
                ...state,
                currentIndex: action.payload,
                selectedBird: null
            }
        case SELECT_BIRD:
            return {
                ...state,
                selectedBird: action.payload
            }
        default:
            return state
    }
}