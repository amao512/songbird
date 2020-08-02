import birdsData from '../../data'
import { GET_BIRDS_QUESTIONS, SET_RANDOM_QUESTION, SET_IS_ANSWER, GET_NEXT_QUESTIONS, SET_CURRENT_INDEX } from '../constants'

const initialState = {
    birdsData: birdsData,
    currentIndex: 0,
    birdsQuestions: [],
    randomQuestionIndex: Math.floor(Math.random() * Math.floor(5)),
    randomQuestion: {},
    isAnswer: false
}

export const questionsAction = (state = initialState, action) => {
    switch(action.type){
        case GET_BIRDS_QUESTIONS:
            return {
                ...state,
                birdsQuestions: state.birdsData[state.currentIndex]
            }
        case GET_NEXT_QUESTIONS:
            return {
                ...state,
                currentIndex: state.currentIndex + 1
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
                currentIndex: action.payload
            }
        default:
            return state
    }
}