//"use strict";

/*Question 1. What will be the output of the following code snippet?
 */

function isTwoPassed() {
  var args = Array.prototype.slice.call(arguments);
  return args.indexOf(2) != -1;
}
console.log(isTwoPassed(1, 4));

console.log(isTwoPassed(5, 3, 1, 2));
/*
OUTPUT:
false
true
*/

/*Explanation:
here by using indexOf(element) method we can get the index of elemenent present in array/object.
so in 
1. isTwoPassed(1, 4) 2 is not present in the argument array so if element is not present then 
indexOf() returns -1 value.(-1 != -1)is false.so it returns false as output.
2. isTwoPassed(5, 3, 1, 2) here 2 present in the argument array and its index is 3.so (3 != -1) is true.
   so it returns true as output.
*/

//Question 2. Which value of a will be logged?

var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
/*OUTPUT: 
1
Explanation:
it prints 1 because a=10 is having local/function scope which is limited until end of function.
but that console.log(a); is outside the function so it takes value of top level/global value of variable 'a'
i.e 1
 */

//3 multiplication function

const multiplication = function (num1) {
  return function (num2) {
    return function (num3) {
      return num1 * num2 * num3;
    };
  };
};
//here we return function inside function.it is also called as function returning function.
console.log(multiplication(2)(3)(4));
console.log(multiplication(5)(10)(5));

/*OUTPUT:
24
250
Explanation:here we return function inside function.it is also called as function returning function.
in that we write function inside function anonymously.
*/

/*Question 4. How to empty an array in JavaScript?
var arrayList =  ['a','b','c','d','e','f'];
*/
var arrayList = ["a", "b", "c", "d", "e", "f"];

console.log(arrayList);
console.log(arrayList.length);
arrayList.splice(0, arrayList.length);
//splice(position in array,from that position how many elements have to delete);
console.log(arrayList);
console.log(arrayList.length);

/*OUTPUT
Array(6) [ "a", "b", "c", "d", "e", "f" ]
6 
Array []
0
*/

//Question 5:

var output = (function (x) {
  delete x;
  return x;
})(0);
console.log(output);
/*
OUTPUT:
0

*/

//Question 6. Write code for merge two JavaScript Object dynamically.

const objectData1 = {
  firstName: "Saina",
  lastName: "Nehwal",
  game: "Badminton",
};

const objectData2 = {
  country: "India",
  active_years: "10 years",
};
const mergeObjectData = { ...objectData1, ...objectData2 };
//here we use spread operator for merge all data between two object into new single object
console.log(mergeObjectData);

/*Output:
   Object { firstName: "Saina", lastName: "Nehwal", game: "Badminton", country: "India", active_years: "10 years" }
  */

//Question 7.Find output of the following.

var strA = "hi there";
var strB = strA;
strB = "bye there!";
console.log(strB);
/*OUTPUT:
bye there!

*/

//Question 8.How to empty an array in javascript

var technologies = ["C++", "Java", "Python", "Asp.net", "Javascript"];
//using splice() method
console.log(technologies);
console.log(`Array length:${technologies.length}`);
technologies.splice(0, technologies.length); //splice(position in array,from that position how many elements have to delete);
console.log(technologies);
console.log(`Array length:${technologies.length}`);

console.log("*******************************");
//second way: using pop() method
var arrayList = ["a", "b", "c", "d", "e", "f"];

console.log(arrayList);
console.log(`Array length:${arrayList.length}`);
while (arrayList.length > 0) {
  arrayList.pop();
}
console.log(arrayList);
console.log(`Array length:${arrayList.length}`);

/*OUTPUT:
Array(5) [ "C++", "Java", "Python", "Asp.net", "Javascript" ]
Array length:5
Array []
Array length:0
*******************************
Array(6) [ "a", "b", "c", "d", "e", "f" ]
Array length:6
Array []
Array length:0
*/

//Question 9. Calculate the length of an object by iterating through the object

const Restaurant = {
  name: "Hotel TAJ",
  owner: "Ratan Tata",
  establish_year: 1995,
  main_menu: ["Chinese", "italian", "mexican", "indian", "beverages"],
  type: "5 star",
  location: "Mumbai",
};

const objectLength = Object.values(Restaurant).length;
//we use any of object method like Object.keys(),Object.values(),Object.entries()
console.log(Object.values(Restaurant));
console.log(objectLength);

/*OUTPUT:
Array(6) [ "Hotel TAJ", "Ratan Tata", 1995, (5) […], "5 star", "Mumbai" ]
6
*/

//Question 10. Write an example of promise.

function watchSession() {
  return new Promise((resolve, reject) => {
    const msg = true;
    if (!msg) {
      console.log("User has been left.Not watching session now.");
      reject();
    } else if (msg) {
      console.log("User is watching session now.");
      resolve();
    }
  });
}

watchSession()
  .then(function () {
    console.log("Thank you for watching...Please subscribe our channel...");
  })
  .catch(function () {
    console.log("User left without subscribing channel...");
  });

/*OUTPUT:
  User is watching session now.
  Thank you for watching...Please subscribe our channel...
  */
/*Explanation: if the code inside promise() function is suceeded then the promise get resolved and 
if promise failed then it goes to reject() method.
When promise is fulfilled/reolved only then the code inside .then()method is go to run.
and when promise gets rejected then it goes to catch()method for handling errors.
*/
