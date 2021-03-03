import *  as faker from 'faker';
import { Mappable } from './CustomMap'; 

export class Company implements Mappable{
  
  companyName:  string; 
  catchPhrase: string
  location : {
    lng:number,
    lat:number
  }; 

  constructor(){
    this.companyName =  faker.company.companyName(); 
    this.catchPhrase =  faker.company.catchPhrase(); 
    this.location = {
      lng : parseFloat(faker.address.longitude()), 
      lat : parseFloat(faker.address.latitude()) 
    }
  };

  getContent(): string {
    return  `
     <h1>Name : ${this.companyName}</h1>
     <h3>catchPhrase : ${this.catchPhrase}</h3>
    `;
  }


};