import { Sorter } from './Sorter'; 

class NodeItem {
  next : NodeItem | null  =  null; 
  constructor(public data : number) {}
}

export class LinkedList extends Sorter {

 constructor(){super();} // defining a construcor is not required, the super method will be called automatically 

 head :  NodeItem | null  = null;   

 add(data: number): void {
   let nodeItem = new NodeItem(data); 
   if (this.head == null){
     this.head  =  nodeItem; 
     return; 
   }
   let nodeCurrent = this.head; 
   while (nodeCurrent.next){
      nodeCurrent = nodeCurrent.next;
   }
   nodeCurrent.next =  nodeItem; 
  }



 get length(): number {
   let length = 0; 
   if(!this.head) return length;
   let tail : NodeItem | null =  this.head ; 
    
   while(tail){
    length++; 
    tail =  tail.next ;
   }
   return length;  
  }


 at(index: number): NodeItem {
   if ( (index <  0) || (index >= this.length)){
     throw new Error('Index out of bounds');
   }
   let tail : NodeItem | null = this.head;
   let curr = 0 ; 
   while(tail) {
     if (curr === index) {
       return tail; 
     }
     curr ++; 
     tail = tail.next;
   }
  throw new Error('Index out of bounds');
 }

 compare(leftIndex: number, rightIndex: number): boolean{
   if (! this.head){
     throw new Error('List is empty');
   }
    if (this.at(leftIndex).data > this.at(rightIndex).data ){
      return true
    }
    return false;
  }

 swap(leftIndex: number, rightIndex: number): void {
      if (! this.head){
     throw new Error('List is empty');
   }

  let leftNode  = this.at(leftIndex); 
  let rightNode = this.at(rightIndex);
  
  let temp = leftNode.data; 
  leftNode.data  = rightNode.data;
  rightNode.data = temp;
 }

 print(): void {
   if (!this.head){
     console.log("No items in the list");
     return;
   }
   let tail : NodeItem | null =  this.head ; 
   let str = '|--->';
   while(tail)
   {
     str += `Node(${tail.data})--->`; 
     tail = tail.next;
   }
   str+='Null'
   console.log(str);
 }

}


 
