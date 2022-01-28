/**
 * every single value in typescript has a type
 * an interface in type is a definition of a new type
 * 
 * Type Annotation :  Code we add to tell typescript what type of value a variable will refer to 
 * Type inference  :  Typescript tries to figure out what type of value a variable refers to  
 * 
 * |Type Annotation |   <======> |Type Inference|
 *  we tell Ts what     <======>  Ts figure out 
 *      type is                      the type
 * 
 *  
 */

// Examples of type annotations for variables  (all of these annotations are not needed since typescript
// inference can guess it automatically)
let apples  : number    =  5 ; 
let speed   : string    = 'fast'; 
let hasName : boolean   = true; 
let nothing : undefined = undefined; 
let nullObj : null      = null; 
// built-in object : 
const date : Date = new Date(); 
// array
let colors  : string[]  =  ['red','yellow','blue'];
let numbers : number[]  = [1,2,3]
//classes 
class Car {}; 
let car : Car = new Car();
// Object literal
let point : { x:number ; y:number } = { //this is the annotation : { x:number ; y:number }
  x:10,
  y:20
}; 
//Function 
let logNumber : (i : number) => void = (i: number) => {
  console.log(i); 
};


/**  we rely on type inference whenever we can (we let typescript figure out the type without using annotations)
 *   we rely on type annotation : 
 *        1- we declare a variable in one line and initilize it later(inference can't do naything here), example: 
 *          let apple ; ==> should be let apple : number; 
 *          apple = 5 ; 
 *        2- when we want a varaible to have a type that can not be inferred correctly 
 *        3- when a function returns the 'any' type and we need to clarify the value (see  example below "coordinates")
 */

 //2)) when we want a varaible to have a type that can not be inferred correctly
 // a variable that can be a number or a boolean based on a condition 
 let mynumbers = [-10 , 1, 23]; 
 let numberAboveZero : boolean | number = false ;
 for (let i =0 ; i < mynumbers.length; i++) {
   if (mynumbers[i] > 0 ) {
     numberAboveZero =  mynumbers[i] //if there is no type annotation on numberAboveZero , TS detects a type error 
   }
 }

 //3)) the any return type of functions 
const json = '{x:"10" , y:"20"}'; 
const coordinates =  JSON.parse(json); // when hover the mouse typescript tells us :  const coordinates:any 
// the annotation is any means TS dosen't know the return type of the parse function  
// in this case TS can't do any error check example : coordinates.blablabla is ok (at compile time)

/** to fix the any type in this case:  */
 const coordinates_ : {x:number , y:number} = JSON.parse(json); 
 // now coordinates_.blablabla return a compile time check error 


