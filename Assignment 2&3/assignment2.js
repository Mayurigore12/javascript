"use strict";

//Question 1.1.	Declare a variable hello. Assign a function to it returning 'Hello world!'

let hello;
//function expression using arrow function
const helloFunction = (str) => str;

hello = helloFunction("Hello world!!!");

console.log(hello);
//OUTPUT: Hello world!!!

/*Question 1.2.	Write a Javascript program which takes n as input and consoles the addition of the 
even and odd numbers from 1 to n as ‘Even Sum’ and ‘Odd Sum’. Do not use more than one loop.
 For Example if n=5
Output:
Even Sum: 6 (2 + 4)
Odd Sum: 9 ( 1 +3 +5) */

const evenNumber = new Array();
const oddNumber = new Array();
let esum = 0,
  osum = 0;

const calcSum = function (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      evenNumber.push(i);
      esum = esum + i;
    } else {
      oddNumber.push(i);
      osum += i;
    }
  }

  console.log(`Even Sum: ${esum} (${evenNumber.join("+")})`);
  console.log(`Odd Sum: ${osum} (${oddNumber.join("+")})`);
  esum = 0;
  osum = 0;
  while (oddNumber.length > 0) oddNumber.pop();

  while (evenNumber.length > 0) evenNumber.pop();
};
calcSum(5);
calcSum(10);

/* OUTPUT:
Even Sum: 6 (2+4) 
Odd Sum: 9 (1+3+5)
Even Sum: 30 (2+4+6+8+10)
Odd Sum: 25 (1+3+5+7+9)
*/

//2.Types and Conversion

/*Question 2.1	Write a function equals that checks two values for strict equality. 
If the two values are equal, the string 'EQUAL' should be returned. 
If they are unequal, you should get 'UNEQUAL'. 
The call equals(1, 1) should return 'EQUAL', the call equals(1, ‘1’) should return 'UNEQUAL'. */

const equals = function (a, b) {
  if (a === b) return console.log("EQUAL");
  else return console.log("UNEQUAL");
};

equals(1, 1);
equals(1, "1");

/*OUTPUT:
EQUAL
UNEQUAL 
*/

/*
Question 2.2.  Write a JavaScript program to create a new string from a given input changing the type to string 
and changing the position of first and last characters. 
The string length must be greater than or equal to 1."
*/

const changePosition = function (str) {
  const newStr = String(str);
  let len = newStr.length;

  if (len > 1) {
    let str1, str2, str3;
    str1 = newStr.slice(0, 1);
    //console.log(str1);
    str2 = newStr.slice(1, len - 1);
    //console.log(str2);
    str3 = newStr.slice(-1);
    //console.log(str3);
    console.log(str3.concat(str2).concat(str1));
  } else if (len <= 1) console.log(newStr);
};

changePosition(1234567);
changePosition("mayuri");
changePosition("B");
/*OUTPUT:
7234561
iayurm
B
*/

//Assignment No.3

//3.1 Write a program that asks the user for two numbers and the operation to be performed.
//Based on the input operation performs the mathematical operation on the two numbers.
// For Example:
// Perform(1,2,’SUM’) Returns 3
// Perform(5,3,’DIFF’) Returns 2

const Perform = (a, b, operations) => {
  if (operations === "SUM") return a + b;
  else if (operations === "DIFF") return a - b;
};

const ans = Perform(1, 2, "SUM");
console.log(ans);
console.log(Perform(5, 3, "DIFF"));
/*OUTPUT:
3
2 
*/

//other way using prompt

const Perform1 = function (x, y, operation) {
  x = Number(x);
  y = Number(y);
  console.log(`(${x}, ${y}, ${operation})`);
  if (operation === "SUM") return x + y;
  else if (operation === "DIFF") return x - y;
};

const result = Perform1(
  prompt("Enter first number"),
  prompt("Enter second number"),
  prompt("Enter operation type")
);

console.log(result);
/*OUTPUT 
(12, 5, DIFF)
7
*/

//3.2  Write an optimized function to return the sorted list for an array of numbers"

const number = [20, 88, 5, 14, 1, 9, 56];

number.sort(function (num1, num2) {
  if (num1 > num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    return num1, num2;
  }
});
console.log(number);

/*
OUTPUT:
Array(7) [ 1, 5, 9, 14, 20, 56, 88 ]

explanation:here we use optimized function for sorting number array.We use compare function where we comapare 
two consecutive array elements and if num1>num2 the perform swapping operation on it.
*/
