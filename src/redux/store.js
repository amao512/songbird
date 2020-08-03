import { combineReducers, createStore } from "redux";
import { questionsReducer } from "./reducers/questionsReducer";
import { scoreReducer } from "./reducers/scoreReducer";

const reducers = combineReducers({
    questions: questionsReducer,
    score: scoreReducer
})

export const store = createStore(reducers)