import { NumbersCollection } from  './NumbersCollection' ;
import { CharactersCollection } from  './CharactersCollection' ;
import { LinkedList} from  './LinkedList';




/** Numebrs   */
let numberCollection      = new NumbersCollection([1,3,2,10,7,6]);
numberCollection.sort();
console.log(numberCollection.collection);

/** Characters   */
let charactersCollection  = new CharactersCollection("Xsaif"); 
charactersCollection.sort(); 
console.log(charactersCollection.collection);

/** Linked List */
let linkeList = new LinkedList();
linkeList.add(1);
linkeList.add(0);
linkeList.add(3);
linkeList.add(2);

linkeList.sort(); 
linkeList.print(); 



