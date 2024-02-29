// 6. Bitwise operator ... SKIPED

// template literals
// statements
// 1. if statment
// 2. if else statement
// 3. if else if else statement
// 4. switch case


/// 1. template literals ....string banaune method
let middleName = "Kumar";
let givenName = "my name is Naresh " + middleName + " Lama";
console.log(givenName);

/// strings in template literals
let givenName1 = `my name is Naresh ${middleName} Lama`; /// template literal ko lagi chhadke inverted coma use garne
/// yesma chahi string lai eutai coma bhitrai use garna sakinchha jasko lagi ${} bhitra variable name rakhne ${middleName}
console.log(givenName1);


/// Statement
/// 1. if .... syntax is if(){}...if(condition){result}
/// promt ....entry garne window kholchha  jahile pani string form ma retrun garchha

//let age = prompt("what is your age");
//let age = Number(prompt("what is your age")); /// number data return hunchha 
// let name = prompt("what is your name");
// console.log(age, typeof(age));

// if (age < 19) {
//     console.log("you are a child");
// }

// 2. if else ... syntax if(){}else{}
/// if(){} ... condition hunchha but else{}ma condition hudaina

// if (age <= 20) {
//     console.log("you can not drive");
// }else {
//     console.log("you can drive");
// }


/// 3. if else if else ....if(){}else if(){}else{}
// if(){} ....if values result is true bellow condition will omit but if result is 
/// 
// else if(){}
// else{}

// if (age <= 0) {
//     console.log("please enter valied data");
// } else if (age <= 15) {
//     console.log("you are a child");
// } else if (age <= 40) {
//     console.log("you are a adult");
// } else if (age <= 100) {
//     console.log("you are a senior citizen");
// } else {
//     console.log("you are the alien");
// }

// console.log("the statemnet has been terminated");

// console.log(age <= 20 ? "you are a child": "you are an adult");


/// switch statement
/// switch() {
    //case a:
    //console.log();
    //break;
//}
// let day = console.log("what is your today?";
let day = prompt("what is your today?");

switch (day) {
    case "saturday":
        console.log("おやすみ");
        break;
    case "sunday":
        console.log("楽しい日");
        break;
    case "friday":
        console.log("our date day");
        break;
    case "tuseday":
        consolel.log("office day");
        break;
    default:
        console.log("its nothing");

}