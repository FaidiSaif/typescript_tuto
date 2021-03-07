class Sorter {

  constructor(public collections :number[]) {}
  sort(): void { 
    for(let i = 0 ; i< this.collections.length ; i ++) {
      for(let j = 0 ;  j < this.collections.length-i-1 ; j ++){
        if(this.collections[j] > this.collections[j+1]){
          this.swap(this.collections,j,j+1);
        }
      }
      //console.log(`iteration ${i} , this.collections = ${this.collections}`);
    }
  }

  swap(array:number[] , index1: number , index2: number): void {
    let temp      = array[index1];
    array[index1] = array[index2];
    array[index2] = temp ;
    //console.log("swaping : " , array[index1] ,array[index2]);
  }
  __repr__(): void {
    console.log(this.collections);
  }
}


let sorter  = new Sorter([1,5,3,6,0,7]);
sorter.sort();
sorter.__repr__(); 

