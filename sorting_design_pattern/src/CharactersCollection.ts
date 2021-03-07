import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {

  constructor (public collection : string){super();}
  
  get length():number {
    return this.collection.length;
  }
  

  compare(itemIndex1: number  , itemIndex2 : number): boolean {
    return this.collection[itemIndex1].toLocaleLowerCase() > this.collection[itemIndex2].toLocaleLowerCase(); 
  }

  
  swap(itemIndex1: number  , itemIndex2 : number):void{
    let splitedString =  this.collection.split(''); 

    let temp = splitedString[itemIndex1]; 
    splitedString[itemIndex1] = splitedString[itemIndex2];
    splitedString[itemIndex2]= temp;

    this.collection = splitedString.join('');  
  }

} 