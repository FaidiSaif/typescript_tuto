/*************************************
 * if we want to use JS libraries within TS we need to indicate the different functions 
 * definitions and annotations to TS, so to do that we make use of "type definition files": 
 * which are a sort of intermediate between TS and JS 
 *    -many modules have their Type definition files included 
 *    -others are available in the net (npm install @types/faker)
 *    -others have to be implemented 
 */

 /********************************  Export & default
  * 
  * 1- 
  *  export : if you use export default User // default export 
  *  import : don't use curely braces in import: import User from './User' 
  * 
  * 2-
  *  export : if you use export  User (without default) : named export 
  *  import : must use curely braces in import: import  { User } from './User' 
  * 
  * in TS community convention : do not use default keyword
  * 
  *****************************************/


/********* note on OR statement for function signature 
 * 
 *    function (Type1 | Type2 ) {
 *    // here we can access to only the common properties of Type1 and Type2
 *    }
 */


  /*********** using the or statement or interface ?  
   * 
   * 1- if using or statemet :
   *  DOWNSIDES :
   *  A- huge function signature
   *     addMarker(Type1 | Type2 | Type3 | Type4 | Type5 | Type6  )
   *  B- strong coupling with the TypeX classes : 
   *     each time a new type added a new import is required (modification => high cost so it's not scalable)
   *      - import { Type1 } from './Type1 ' 
   *      - import { Type2 } from './Type2 ' 
   *      - import { Type3 } from './Type3 ' 
   *      - import { Type4 } from './Type4 ' 
   *      - import { Type5 } from './Type5 ' 
   *      - import { Type6 } from './Type6 ' 
   *      .
   *      .
   *      .
   *  ==> Best Approach is to use interfaces (dependency inversion by depending only on the interface and not the concrete classes)
   * 
  */



  /*** Is "Implements" required to implement Interface ? 
   * 
   *  1 implements is not required in order to implement an interface but 
   *  adding impements makes TS giving more hints about the properties to implement in order
   *  to satisfy that interface 
   * 
   * 
   */