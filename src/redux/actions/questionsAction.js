import { GET_BIRDS_QUESTIONS, SET_RANDOM_QUESTION, SET_IS_ANSWER, GET_NEXT_QUESTIONS, SET_CURRENT_INDEX } from "../constants";

export const getBirdsQuestions = () => ({ type: GET_BIRDS_QUESTIONS })
export const setRandomQuestion = () => ({ type: SET_RANDOM_QUESTION })
export const setIsAnswer = () => ({ type: SET_IS_ANSWER })
export const getNextQuestion = () => ({ type: GET_NEXT_QUESTIONS })
export const setCurrentIndex = (index = 0) => ({ type: SET_CURRENT_INDEX, payload: index })