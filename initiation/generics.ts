

class ArrayOf<T>{
  constructor(public collection : T[]) { }
  get(index:number): T {
    return this.collection[index] ; 
  }
}


let arr2 = new ArrayOf<string>(['saif' , 'faidi' , 'other']); 
console.log(arr2.get(2))

// as you can see TS can infere the type automatically, no need to use the <string> to specify the type
let arr4 = new ArrayOf(['saif' , 'faidi' , 'other']); 
console.log(arr4.get(2))



//regular function
function print<T>( collection : T[]) : void  {
  for(let item of collection){
    console.log(item); 
  }
}
print<string>(['saif','faidi','hey']); //<string> is not mandatory since TS can infere the type automatically

//arrow function
const func = <T>(collection : T[]): void => {
  for (let el of collection) {
    console.log(el); 
  }
}
func<string>(['<string>', 'is' , 'not mandartory']); 


/************************ Generic constraints  *******************************/
// if a generic class/function uses an object 'myObject' of type T, and then calls the "myObject.print()" ==> the class/object needs a constraint on that type 
//ensuring that it has a method called print(), how to do that ? , make < T extends Iprintable >, the T must have print method since it extends the interfave IPrintable , see example below

interface IPrintable {
  print(): void 
}

class House implements IPrintable {
  print = ():void => console.log('I m a House'); 
}

class Car implements IPrintable {
  print():void {console.log('I m a Car')}
}

const printHousesOrCars  = <T extends IPrintable > ( collection : T[] ) : void =>  {
 for (let item of collection) {
   item.print(); 
 } 
}

printHousesOrCars<House>([new House(), new House()]); 
printHousesOrCars<Car>([new Car(), new Car(), new Car()]); 