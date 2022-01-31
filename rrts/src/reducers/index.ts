// because we don't use jsx here the file name will be index.ts instead of index.tsx

import { combineReducers } from "redux";
import { ITodo } from "../actions";
import { todosReducer } from './todosReducer'  ; 


//the state is an object
export interface IStoreState {
  todos: ITodo[] ;
}

export const reducers = combineReducers<IStoreState>({
  todos: todosReducer
});
