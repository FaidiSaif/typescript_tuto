import axios from "axios"
import { Dispatch } from "react"
import {ActionTypeEnum , ITodo } from './types'



export interface IFetchTodoAction {
  type : ActionTypeEnum.FETCH_ALL; 
  payload: ITodo []; 
}

const url = 'https://jsonplaceholder.typicode.com/todos'; 

// here we return an async function => redux-thunk will call the function => to maintain the dispatch calls we need to manually dispatch the action 
// since redux-thunk all what he do is to call the returned function (he does not dispatch the inner action automatically)
export const fetchTodosAction =  () => {
  return async (dispatch : Dispatch<IFetchTodoAction>): Promise<void> => {
    const response = await axios.get<ITodo[]>(url) ; 
    return  dispatch ({
      type: ActionTypeEnum.FETCH_ALL, 
      payload : response.data
    })
  } 
}