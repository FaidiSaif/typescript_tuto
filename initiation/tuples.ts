/** Tuples are similar to arrays but with mixed data types  which represents a single object & with a significant order (can not be changed)*/
// with this annotation below we are giving a specific order and number of elements to the array which makes it a tuple  
const drinkTuple : [string , boolean , number] = ["red", true , 40];

// another way to create a tuple in TS : define a new type: array of 3 elements with specifs types : 
type Drink =  [string , boolean , number] ;
const coca  : Drink = ["black" , true , 85];
const fanta : Drink = ["orange" , false , 14]; 

// why we are not going to use tuples so much ? 
const carSpecs : [number , number] = [1254 ,158]; // understandable ? NO :( 
const carStates = {
  weight :1254, 
  horsePower : 158
} // understandable ? Yes :) because with keywrods "keys" it gives more information about the
//variables meaning  