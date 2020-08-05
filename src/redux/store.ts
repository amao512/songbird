import { combineReducers, createStore } from "redux";
import { questionsReducer } from "./reducers/questionsReducer";
import { scoreReducer } from "./reducers/scoreReducer";

const reducers = combineReducers({
    questions: questionsReducer,
    score: scoreReducer
})

export type RootState = ReturnType<typeof reducers>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export const store = createStore(reducers)