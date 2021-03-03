

/*********************************************************
 *  By default in TS the modifier used is public
 * 
 * when overiding a method we can not change it's modifier 
 * 
 ********************************************************/

class Vehicle {
  public drive() : void {
    console.log('driving ...'); 
  }

  public honk() : void {
    console.log("Beep  !");
  }
}


class Car extends Vehicle {

  // overriding the drive method
  public drive():void {
    console.log("Vroom...");
  }
}


const vehicle  = new Car() ; 
vehicle.drive()
vehicle.honk();

/**************************************************************
 * 
 * to set field of a class we can use 2 equivalent methods: 
 * 
 *************************************************************/

 // 1- define class and fields seperatily 
 class T {
  color : string;
  constructor(color:string){
  this.color = color 
  }
 }

 //2- use the following shortcut 
 // adding the modifier in the constructor argument creates a new field 
 // so don't use the modifier wehn refering to a base class argument 
 class T_ {
   constructor(public color : string) { // defines a field color and sets it 

   }
 }


 /*************************************************************
  * Example of using base class argumetns with new field 
  * definition using the shortcut syntax
  * 
  *************************************************************/
class Drink {
  // type can be water or juce
  constructor(public type: string) {} // used modifier since it's a new field 
}

class Lemon extends Drink {
  constructor(public sugar : number , type:string)// notice here type is without modifier else a new field willbe created which is wrong ! 
  {
    super(type);
  }
}