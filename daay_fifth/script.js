console.clear();//// yo line bhanda mathi ko sabai lai clear garnu

// nested statements
// netsted if
// nested if else
// netsted if else if else
// let ramAge = Number(prompt("what is your age"));

// if (ramAge > 18) {
//     if (ramAge > 30) {
//         if (ramAge > 50) {
//             console.log("you are getting old")
//         }
//     }
// }
/// age 51 narakhe samma console.log print out gardaina

// nested if else
// let ab = Number(prompt("enter the value of ab"));
// let bc = Number(prompt("enter the value of bc"));
// let cd = Number(prompt("enter the value of cd"));

// console.log(ab, bc, cd);
// // 59 64 89
// // 89 64 59
// // 64 89 59

// if (ab > bc) {  /// true bhayo bhane (ab > cd) ma janchha if false ho bhane (bc > cd) ma janchha
//     if (ab > cd) { // yo true ho bhane console garchha natra else ma janchha
//         console.log("ab is greatest of all");
//     } else {
//         console.log("cd is gretest of all");
//     }
// } else {
//     if (bc > cd) {
//         console.log("bc is greatest of all");
//     } else {
//         console.log("cd is greatest of all");
//     }
// }

// netsted if else if else
// if () {
//     if () {}
//     else if () {}
//     else if () {}
//     else{}
// }
// else if () {
//     if () {}
//     else if () {}
//     else if () {}
//     else{}
// }
// else if () {
//     if () {}
//     else if () {}
//     else if () {}
//     else{}
// }
// else {
//     if () {}
//     else if () {}
//     else if () {}
//     else{}
// }




// function
// about function
// function definition
// function call
// function parameters
// return statements
// arguments

/// function in JavaScript
/// function are the block of codes. that can be used repeadetly given diffrent result according our input
/// function are th ecodes that can be used repeateadly to produce different results according to our input
/// jati choti chahine ho teti nai use garna sakinchha and thari thari ko result out garna sakinchha
/// funcitons are the most important part of any programing language
/// React
/// eutai line fo code use garera diffret result dina sakinchha

function sum(a, b) {
    console.log(a + b);
}

sum(4, 6); ///10  ... function call
sum(5, 6); /// 11
sum(4, 23); // 27
sum(50, 6); //56


// function definition....
// function call .....result chahi kaha ni ra line bhanere bujauchha 

// function parameters ...sub(a ,b) lai function parameters bhaninchha
// arguments ...sub(4,6) lai function argument bhaninchha

/// return statements....console.log(a + b);ko thau ma return a + b le result out garinchha


// function definition....function define garnu lai nai funciton defintaion bhaninchha
function countAvg(Num1, Num2) { ///function parameter
    //return (Num1 + Num2) / 2; /// print out 
    let aVg = (Num1 + Num2) / 2;
    return aVg; //// return statement print out
    /// javaScript print out garnda return aVg garinchha but browser check garna lai console.log(aVg); garnu parchha
}

/// fucntion call
countAvg(12,16); ///  function argument
console.log(countAvg(12,16)); ///24



// types of function
// function declartion
// function expression
// arrow function