export abstract class  Sorter {

  /**
   * The collection Length
   */
  abstract length : number ;

    /**
   * @param itemIndex1 
   * @param itemIndex2 
   * @returns True if the collection[itemIndex1]  >  collection[itemIndex2] 
   */ 
  abstract compare(indexItem1: number , indexItem2 : number): boolean ;

  /**
   * 
   * @param indexItem1 
   * @param indexItem2 
   * Swap 2 items in the collection 
   */
  abstract swap(indexItem1: number , indexItem2 : number) : void ; 

  /**
   * Generic method for sorting
   */
  sort(): void { 
    for(let i = 0 ; i< this.length ; i ++) {
      for(let j = 0 ;  j < this.length-i-1 ; j ++){
        if(this.compare(j,j+1)){ // swap if collection[j]> collection[j+1]
          this.swap(j,j+1);
        }
      }
    }
  }
  
}