import { IFetchTodoAction } from './fetchTodos'; 
import {IDeleteTodoAction} from './deleteTodo' ; 

export enum ActionTypeEnum {
  FETCH_ALL,
  DELETE
};

export interface ITodo {
  id:number,
  title : string
}

// more cleaner in the reducer action type
export type IAction = IFetchTodoAction | IDeleteTodoAction ;  