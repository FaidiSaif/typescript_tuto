import { ActionTypeEnum } from "./types"


export interface IDeleteTodoAction {
  type : ActionTypeEnum.DELETE ;
  payload: number; //provide only the id of the todo to delete to the reducer
} 

// the id here i get from the component
export const deleteTodoAction  = (id: number) => {
  return {
    type: ActionTypeEnum.DELETE,
    payload : id 
  }
}