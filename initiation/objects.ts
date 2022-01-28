const profile = {
  name : "alex", 
  age: 20, 
  coords : {
    lat:0, 
    lng:15
  },

  setAge(age: number): void {
    this.age = age; 
  }
}


//destructing a property from object with annotation 
const { age } : {age: number} = profile ;  
console.log(age);

// destrunction a nested object with annotation 
const {coords : {lat , lng}} :  {coords : {lat: number , lng : number}} = profile ; 
console.log(lat, lng);

/** CONCLUSION 
 * 
 * const {age}: number = profile , this is wrong ! 
 * it should be => 
 * const {age} : {age: number} = profile
 * 
*/