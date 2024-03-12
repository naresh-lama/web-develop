//"use strict" /// error find out garna usefull hunchh. JavaScript kunai pani condition ma error lai ni print out gardinchha
/// function declaration nagarikanai print out garchha
country = "Nepal"; /// var let const use gareko chhaina
console.log(country);

/// mathiko conditon ma use stict use garema error throw garchha

/// strict mode.... error haru kam garna usefull hunchha this a latest mode in JavaScirpt
/// helps to tackle with errors by throwing error message



/// looping
// Entry control loop...for, while
/// Exit control loop... do while

/// 1. for looop .... kunai pani repeatation lai simple tarika le print out garna lai use garna sakinchha

/// syntax  for(variable declaration; condition; increament/decreament) {
    //logic
//}

for (let i = 0; i < 5; i++) {
    console.log("I love my country");
}

///multiply
let a = 2;
for (let i = 1; i <= 10; i++) {
    console.log(a + " x " + i + " = " + i*a);
}

/// i = 0, 0 < 5, 1....print 1
/// i = 1, 1 < 5, 2....print 2
/// i = 2, 2 < 5, 3....print 3
/// i = 3, 3 < 5, 4....print 4
/// i = 4, 4 < 5, 5....print 5
/// i = 5, 5 < 5, false ....


///while loop
///syntax
/**
 while(condition) {
    logic:
    increamnet/decreamnet
 }
 */
///variable chahi while ko mathi declare garne
/// condtion () bhitra rakhne
/// logic: ma chahi console.log
/// increamnet/decreament : i++


let y = 10;
while(y < 20) {
    console.log("I love my country");
    y++;
}

// entry controle loop... surumai condtion check bhayera print out hune bhayekole entry control loop bhaninchha

/// Do while loop ... exit control loop this loop will run atleast once a time
/// condition true or false bhayepani ekpatak lai print out hunchha
// syntax
/**
 do {
    logic:
 } while(condition);
 */

 let z = 30;
 do {
    console.log("I love my Country Nepal ... do while loop");
    z++;
 } while(z < 40);


 /// arrays
 /// arrays methods
 /// objects
 /// objects methods

 /// arrays... array is a one of the data type
 /// group of datas that may be of same or diffrent data types, but is mostly of same data types denoted by big bracket

let ages = [12, 34, 33, 49, 44];
let names = ["Naresh", "Shushma", "Sunima"];

let mix = ["Naresh", 12, "Shushma", 23, false, null, undefined];///array of different data types


console.log(ages);
console.log(names);
console.log(mix);
console.log("lenth of array " + ages.length);/// 5 lenth of array 
console.log(ages[0]);//12
console.log(ages[2]);//33
console.log(ages[ages.length - 1]);// 44 last ko print out 

/// other one
let arr2 = new Array("Naresh", 22, "Shushma", 12);///another way of creating an array
console.log(arr2);


/// array  are alaways 0 indexed 

/// array methods:
/// unshift, shift, push ,pop, join, concat, indexof, includes, lastIndexOf, slice, splice, toString

/// unshift...array ko agadi given elements thapne kam garchha

names.unshift("Parbati");
console.log(names);///[Parbati, Naresh, Shushma, Sunima]


///shift... array ko agadi bata value elements garna use garinchha
ages.shift();
console.log(ages);///34,33,49,44


/// push ... array ko paxadi elements add garne kam garchha index value last one ko hunchha
names.push("Sapana Lama");
console.log("push array " + names);


///pop...array ko index paxadi bata euta elemets hatai dinchha 

names.pop();
console.log("pop bata last ko name hataune " + names);


//// join ...join function ko parametre use garera array ko elements lai join garchha ra srring banauchha
/// let ages = [12, 34, 33, 49, 44];
console.log(ages.join());///12, 34, 33, 49, 44
console.log(ages.join(""));///
console.log(ages.join(" "));///
console.log(ages.join(" and "));///34 and 33 and 49 and 44

///concat...kunai pani 2 ta vanda badhi array lai jodera euta array banauxa
console.log(ages.concat(names));
console.log(ages.concat(names).concat(arr2));

let ar4 = ages.concat(names).concat(arr2);
console.log("ar4 " + ar4);


//// indexOf... array ko elements deyera katiindex ma xa vanne kura tha pauchha
//let arr2 = new Array("Naresh", 22, "Shushma", 12);///another way of creating an array
console.log(arr2.indexOf(22));//1


///includes...elements vaneko array ma xa ki xaina vanera check garxa it will be print out boolean true or false
//let ages = [12, 34, 33, 49, 44];
console.log(ages.includes(55));/// false
console.log(ages.includes(33));/// true


///lastInedxOf.... given elements ko last index return garxa
let tryAr = [2,3,45,4,33,44,33,4,5,3,4];
console.log(tryAr.indexOf(3));///1 repeatation of index ko first ko lai lyauchha
console.log(tryAr.lastIndexOf(3));///9 repeatation of index ko last ko lai lyauchha


///slice... array bhitra ko kunai pani elements lai matra print out garna lai use garinxa
/// 1st prammetre tya bata suru garera 2nd paramenter -1 samma print garxa
//let tryAr = [2,3,45,4,33,44,33,4,5,3,4];
console.log(tryAr.slice(1,5));///[3,45,4,33]
//slice(1,5)
//1=3
//5=45,4,33

///splice.... 1st parameter ra 2nd parameter ko anka jati chha teti print out garne
//let tryAr = [2,3,45,4,33,44,33,4,5,3,4];
console.log(tryAr.splice(2,5));///[45,4,33,44,33]

///toString...
let tryArOne = ["abc", "xyx", "nepal", "japan"];
console.log(tryArOne);
console.log(typeof tryArOne);
console.log(tryArOne.toString());
console.log(typeof tryArOne.toString);