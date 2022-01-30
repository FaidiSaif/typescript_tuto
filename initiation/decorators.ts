//to use decorators you need to enabe that in tsconfig.json file 
/**
 * 1-generate the tsconfig.json file 
 * 2-enbale the 
 *  "experimentalDecorators": true, 
 *  "emitDecoratorMetadata": true,
 */

console.log('/**** ***************************** CLASS METHOD decorator ************************************** */')

class Boat {

  color :string  = 'red'
  @logErrorMessage('Hey there')
  someFunction(){}

  // this decorator is executed when the class is created and not when an object is created or a method called, it's static 
  @testDecorator
  @logError
  pilot() : void {
    throw Error(); 
    console.log('swish'); 
  }
  //the above decoration is equivalent to: 
  //testDecorator(Boat.prototype, 'pilot', pilot.descriptor), the property descriptor is used to change the property of the function 
  // like : writable, readable, ... 
  // pilot  = testDecorator(pilot) //where the testDecorator just modifies the function body, properties..
}


// the target is the class prototype, the key is the method/attribute decorated 
function testDecorator(target:any , key: string, desc: PropertyDescriptor) : void {
  console.log('Target: ', target); 
  console.log('Key: ', key); 
}

//this decorator is used to override the logerror message by override thedecorated method:  
function logError (target: any , key:string,  desc: PropertyDescriptor): void {
  const method = desc.value //get the method body
  desc.value = function() {
    try {
      method()
    }catch(e){
      console.error('This boat is sunk..')
    }
  }
} 

/// you can pass args to the decorator @logError("the boat is sunk") , using a decorator factory, which is just a function wrapper that returns the inner decorator 
function logErrorMessage(message: string) {
  return function (target:any, key: string , desc : PropertyDescriptor): void {
    //some modification on the function , for example printing an additional message
    const method  = desc.value;  
    desc.value = function(){
      method(); 
      console.log('This is the inner modification of the decorator');
      console.log('This is the decorator message retrieved form the decorator factory', message); 
    }
  }
}
/* what happens here : 
@logErrorMessage('Message')
someFunction(){...}
decorator = logErrorMessage(decorator, param) // adding the message
someFunction = decorator(someFunction)        // modify the function ..

*/

//test decorator
//let boat = new Boat(); 
//test decorator descriptor
//boat.pilot(); 
//test decorator factort
//boat.someFunction() ; 

console.log('/**** ***************************** CLASS PROPERTY decorator ************************************** */')
// what if i decorate a class Property : 
class TestPropertyDec {
  @myPropDecorator
  color:string =  'red';  

  @myPropDecorator
  get myColor(): string { return this.color }
}

function myPropDecorator(target:any, key:string ): void {
  //target is the class Prototype: that means it only contains the methods, no instance attributes (because instance attributes are stored in the constructor)
  //so doing target.color => undefined because in our example color is an attribute, not available in the prototype
  //same for target[key]=> undefined ,key= 'color', it's an instance that's not available in the prototype 

  // what you can do is to use the decorator on the accessor to access the key name: 
  console.log('I m a decorator your color key is : ', key); 
 }


 let testPropDec  = new TestPropertyDec()
 testPropDec.myColor;


 console.log('/********************************* function/method PARAMETER decorator ************************************** */')
class G {
  exampleFunction (
    @paramterDecorator param1 : string, 
    @paramterDecorator param2 : string
  ):void {
  
  }
}
function paramterDecorator(target:any, key: string , index:number): void {
   console.log('key = ',key, ', index = ', index)
 }

 console.log('/**** ***************************** CLASS decorator ************************************** */')
@classDecorator
class TClass {}
function classDecorator(constructor: typeof TClass){ // constructor:typeof TClass is equivalent to constructor:Function, 
  console.log(constructor); 
}

