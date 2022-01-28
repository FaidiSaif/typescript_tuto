import faker from '@faker-js/faker';
import { Mappable } from './CustomMap'; 

export class User implements Mappable {
  name : string; 
  location : {
    lng:number,
    lat:number
  }; 

  constructor() {
    this.name = faker.name.firstName(); 
    this.location =  {
      lng  : parseFloat(faker.address.longitude()),
      lat  : parseFloat(faker.address.latitude())
    }; 
  }

  getContent(): string {
    return `<h3> Name : ${this.name}</h3>`;
  }
};