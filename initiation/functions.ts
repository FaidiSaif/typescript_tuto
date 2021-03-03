// this is a long form annotation showing function signature (this is unecessary)
const add_ :(a: number , b:number) => void  = (a:number , b: number) => {
  return a +b; 
}
// mre conscise annotation : 

/** annotations with functions and objects */
const add  = (a : number ,b: number) : number  => {
  return a + b ; 
};

// annotation for normal functions : 
function divide(a : number , b : number) : number {
  return a/b; 
}

// annotation for anonymous functions 
let multiply =  function (a: number  , b: number):  number {
  return a * b ; 
}

// function returning void can return either null or undefined
const logger  = (message : string) : void  => {
  console.log(message); 
  return null ; // ok
  //return undefined //ok
}

// function never reaching the end (throwing errors) , use the "never" keyword 
const throwError = (message : string): never  =>  {
  throw new Error(message); 
}

// what if a function CAN throw an error but not sure ? ,==> do not annotate it with never
let maybeThrowError = (message: string) : string => {
  if ( !message){
    throw new Error(message); 
  }
  return message; 
} 


// destruction with TS : let's start by remembering the destruction format 
// a function sytax with destructuring : 
let weatherObject  = {
  date: new Date(),
  weather: "hot"
}; 

let funcDesWeather = ({date, weather}) => {
  console.log(date, weather); 
}

funcDesWeather(weatherObject);
// add annotation with typescript : 
let funcDesWeather_TS = ({date, weather} : {date:Date , weather : string}): void  => {
  console.log(date, weather); 
}

