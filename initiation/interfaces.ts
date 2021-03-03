const oldCivic = {
  name : "civic", 
  year: 2000, 
  broken : true,
  date: new Date(),
  summary(){
    return `Name = ${this.name}`
  }
}; 


// to create annotation for this function, it's very long  
const printVehicle = (vehicle:{name: string ; year: number ; broken: boolean}): void  => {
  console.log( `Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken :${vehicle.broken}`);
}


//use interface to simplify annotation  
interface Vehicle {
  name      : string; 
  year      : number; 
  broken    : boolean;
  date      : Date;
  summary() : string; 
}

// much simpler annotation
const printVehicle_ =(vehicle : Vehicle): void => {
  console.log( `Name   : ${vehicle.name}`);
  console.log( `Year   : ${vehicle.year}`);
  console.log( `Broken : ${vehicle.broken}`);
  let summ = vehicle.summary(); 
  console.log(summ);
}

printVehicle_(oldCivic);