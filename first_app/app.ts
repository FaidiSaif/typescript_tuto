

import axios from 'axios'
const url =  'https://jsonplaceholder.typicode.com/todos/1'

/* step1- compile the code  tsc index.ts
          a new file index.js is generated 
   step2- run the generatd file :  node index.js
   
   #### to combine te 2 commands above 
   run : ts-node index.ts 
*/



/* some typescript here : define an interface, where an interface is a type definition 
   to mention which type of informations we are expected to get 
*/
interface Todo {
  id: number, 
  title : string, 
  completed : boolean
}

axios.get(url).then(response => {
  const todo = response.data as Todo; //the as keyword isa atype assertion in TS : which tells the compiler to consider the object as another type than the type the compiler infers the object to be
  LogTodo(todo.id , todo.title , todo.completed); 
}); 

// using annotations alows to avoid calling errors 
const LogTodo = (id: number , title: string , completed: boolean) => {
  console.log(
    `The Todo ID : ${id}\n
     The Todo Title : ${title}\n
     The Todo Status : ${completed}\n`);  
};

