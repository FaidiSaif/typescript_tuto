/** in TS if we want ot put differnet types of values we need to use a specific type of annotation */


const carMakers   = ["Ford" , "Audi" , "BMW"]; // no need for annotation , inference is sufficient 
const UnknowType  = [] ; // should add annotation , by default it's "any" 
const carsByMake : string[][]  = []; // this array will contain an array for each car make, it should be annotated  

/** benifits of TS when using arrays */
// 1- Help with inference when extracting values 
const carMaker       =  carMakers[0];  // no need to annotate carMaker , by iference it's a string
const otherCarMaker  =  carMakers.pop() //same 

// 2- Prevent incompatible types in array 
//carMakers.push(100) // error : Argument of type 'number' is not assignable to parameter of type 'string'

// 3- Help with functions like map, foreach & reduce , helps like functions suggestions based on types
// for example if it's an array of strings , string helpers popup on variables while coding 
carMakers.map((car: string): string => {
  return car.toLowerCase(); // toLowerCase popup automatically 
}); 

/** How we can still use arrays with different types? : Flexible Types*/
// use the or statement on the annotation : myArray : (type1 | type2 | .. | typeN)[] = []

const importantTypes : (Date | string)[] = [ new Date() , "23-01-2021"]; 
