/**
2024-02-28 3rd day
 */

// operators in js
// statements and expression .... theoritical part bujnu matra parne

// 1.Arirthemetic Operator
// 2. Assignment Operatotr
// 3. Comparision Operator
// 4. Logical Operator
// 5. Ternary Operattor
// 6. Bitwise Operator... sytanx matra herne



/// statements and expression
// kunai pari variable lai declair garna ya statement garna lai statement bhaninchha

// let name = "naresh"; // code lai defined garnu lai statement
//const sum = 5 * 6; // 5 * 6 experession bhaneko kunai pani statement lai operator garnu lai bhaninchha
/// 7>3
/// 8=3

/// Operator in js
// 1. Arithmetic operator .... +,*,-,/,%

let sum = 4 + 5;
let subs = 9 - 5;
let multi = 8 * 5;
let div = 84/4;
let rmd = 100 % 3;

// string lai ni join garne kam garchha 
// string concatination

let count1 = "Nepal";
let count2 = "Australia";

console.log("my permanent country is " + count1 + " now i am living in Australia" + count2);


/// 2. Assignment operator
// value assignment garna use garne operator
// assignment operators ... +=,-=,*=,/=,%=

let a = 2;
console.log(a);

a += 3; // a=a+3;
console.log(a); // 5

a -= 2; // a=a-2
console.log(a); //3

/// 3. Comparision Operatior  < = > <= >= == ===
/// it alaways return value in boolean --- true false
console.log(5 < 9);
console.log(5 > 9);
console.log(5 >=5);
console.log(5 == 5);
/// == equals nbut may not be of same data type
///value matra check garchha data type check gardaina
console.log(5 == "5"); true ///"5"string bhaye pani data type check nagarekole
console.log(5 === 5);
///=== equals and of the same data type value and data type are check if there exact value will assign
console.log("5" === 5); /// false

/// operator precedence and associativity 
console.log(5 + 6 - (4 * 2) / 4) /// BADMAS


/// Logical operator
// AND OR NOT
/// AND &&.... if both of the caseses are true true is returned in AND opeator
// OR || ... if one of the cases is true true is retruned in OR operator
// NOT ! ... if true return false  and vice versa

console.log("&&");
console.log(true && true);
console.log(true && false);


console.log("||");
console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log("!");
console.log(!true);//false
console.log(!false);///true

// 5. Ternary operator
// condition ? statement1 : statement2;

let age = 18;
console.log(age <= 20 ? "you can not drive" : "you can drive");
let result = age <= 20 ? "you can not drive" : "you can drive";
console.log(result);



