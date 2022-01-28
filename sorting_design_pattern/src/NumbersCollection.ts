import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  

  constructor (public collection : number[]) { super(); }
  
  get length():number {
    return this.collection.length;
  }

  /**
   * @param itemIndex1 
   * @param itemIndex2 
   * @returns True if the collection[itemIndex1]  >  collection[itemIndex2] 
   */
  compare(itemIndex1: number  , itemIndex2 : number): boolean {
    return this.collection[itemIndex1] > this.collection[itemIndex2]
  }
  swap(itemIndex1: number  , itemIndex2 : number):void{
    let temp = this.collection[itemIndex1]; 
    this.collection[itemIndex1] = this.collection[itemIndex2];
    this.collection[itemIndex2]= temp;
  }

} 