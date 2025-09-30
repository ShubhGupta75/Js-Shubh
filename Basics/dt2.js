/* datatypes are basically divided into  2 types, primitive and
non-primitive which is based upon the storage of data and accessibility 
of data.  */

// PRIMITIVE
// 7 types = String,Number,Boolean,null,undefined,Symbol,BigInt

// NON-PRIMITIVE
// Arrays,Objects,Functions

/* JavaScript is dynamically typed language, which means that
 the type of a variable is determined at runtime based on 
 the value it holds, and variables can change types during 
 the execution of a program    */

 /* Symbol DT = it provides a unique value to an object so that the
 same values doesn't collide.  */ 

 /* Typeof	  Result
Undefined	 "undefined"
Null	     "object" 
Boolean	   "boolean"
Number	   "number"
BigInt	   "bigint"
String	   "string"
Symbol	   "symbol"
Function   "object (function object)" 
Any other
object     "object"   */


//  *******  MEMORY  *******

//  Stack(Primitive) and Heap(Non-Primitive)

let myYtName = "shubhguptadotcom"
let secondYtName = myYtName

secondYtName = "coffeeaurcode"
// myytname will still remain intact because the change has occured in the
// copy of myytname in the stack memory and not in the original value.

console.log(myYtName);
console.log(secondYtName);

let user1 = {
   email: "user@google.com",
   upi: "user@ybl"
}

let user2 = user1

user2.email = "shubh@google.com"

console.log(user1);
console.log(user2);

// changes will occur in both users as arryas are 
// non primitie datatype and any changes made further are 
// occured in the original value.