"use strict";
/** The Union operator shallowing functions APIS :
 *  Since typescript uses the intersection between 2 types to get the common functionalities between
 *  them , a non common functionality can not be used, so to avoid that we can use the type Guards to restore this functionalities:
 *  Example:
 */
var TSorter = /** @class */ (function () {
    function TSorter(collections) {
        this.collections = collections;
    }
    // can not acces a non common function for this.collection
    //this.collections.push() this will not work here sicnce push is not common function between stirng and Array
    // use typeGurad to restore the function "push" for number [] for example
    TSorter.prototype.sort = function () {
        if (this.collections instanceof Array) {
            this.collections.push(3);
        }
        // since string is a primitive type we should use the typeof method to typeGurad the variable 
        if (typeof this.collections === "string") {
            this.collections.substr(1); // slice from the second position 
        }
    };
    return TSorter;
}());
/** How to type Guard
 * 1- for primitive type :
 *  typeof -> number , string, boolean , symbol
 * 2- every other type :
 *  instanceof
 */
/**  How to put a getter in an interface :
 *  just use a property to reflet a getter
 *  interface Sortable {
 *  length : number
 *  swap(in1 : number , in2 : number) : void;
 *  compare(in1 : number , in2 : number) : boolean;
 * }
 *
 * class Collection implements Sortable {
 * constructor(....)
 * get length() : number  { return this.collection.length}
 * ..
 * }
 */ 
