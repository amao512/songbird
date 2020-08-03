import { SET_ALL_SCORE, SUBTRACT_SCORE, NULLIFY_SCORE, NULLIFY_ALL_SCORE } from "../constants";

export const setAllScore = () => ({ type: SET_ALL_SCORE })
export const subtractScore = () => ({ type: SUBTRACT_SCORE })
export const nullifyScore = () => ({ type: NULLIFY_SCORE })
export const nullifyAllScore = () => ({ type: NULLIFY_ALL_SCORE })