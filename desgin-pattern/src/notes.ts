/*************************************
 * if we want to use JS libraries within TS we need to indicate the different functions 
 * definitions and annotations to TS, so to do that we make use of "tyep definition files": 
 * which are a sort of intermediate between TS and JS 
 *    -many modules have their Type definition files included 
 *    -others are available in the net (npm install @types/faker)
 *    -others have to be implemented 
 */

 /********************************  Export & default
  * 
  * 1- 
  *  export : if you use export default User
  *  import : don't use curely braces in import: import User from './User' 
  * 
  * 2-
  *  export : if you use export  User (without default)
  *  import : must use curely braces in import: import  { User } from './User' 
  * 
  * in TS community convention : do not use default keyword
  * 
  *****************************************/
