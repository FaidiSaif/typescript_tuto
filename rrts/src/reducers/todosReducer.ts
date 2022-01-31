import { ITodo, IAction, ActionTypeEnum } from "../actions";

//if you don't give a default value "[]" for the state, ste has a value of undefined 
//in the index.ts, the combineReducer<StateProps> get types conflict between : 
//1-the IStoreState when the tods = ITodo[]
//2-the combineReeducer object todos : todosReducers where the todos = ITodo[] | undefined 

// in this specific reducer the state is the sub-state (related to the entire app) that will be stored in the store State later 
// every reducer return a sub-state to create the store state at the end 
export const todosReducer = (state : ITodo[] = [] , action : IAction)=> {
  switch(action.type){
    case ActionTypeEnum.FETCH_ALL : 
      return action.payload;
    case ActionTypeEnum.DELETE :
      return state.filter((todo:ITodo) => todo.id!== action.payload);  
    default: 
      return state; 
  }
}