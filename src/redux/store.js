import { combineReducers, createStore } from "redux";
import { questionsAction } from "./reducers/questionsReducer";

const reducers = combineReducers({
    questions: questionsAction
})

export const store = createStore(reducers)