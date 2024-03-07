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


console.clear();
// types of function



// function declartion:euta completely fucntion create garera print garnu lai function decleration bhaninchha
function product1(x,y) {
    let prdct1 = x * y;
    return prdct1;
}

console.log(product1(2,5));//10

// function expression
let product2 = function(a, b) {
    let prdct2 = a * b;
    return prdct2;
}

console.log(product2(4,7));//28

// arrow function:. fuction, =>lai fucntion bhaninchha

let product3 = (a, b) => {
    let prdct3 = a * b;
    return prdct3;
}

console.log(product3(5,8));//40


/// fucntion declaration..:can be call before funtion declaration
/// fucntion expression..:can not be call before funtion declaration
/// fucntion arrow..:can not be call before funtion declaration


/// Recursion in Js: kunai pani kura afu bhitrai use garnu to use the same function inside itself is known as recurtion
//// recursion....recurring...re occur... feri feri aunu
/// factorial /// 6!.... 6*5*4*3*2*1 ....6bhanada tala ko number sabai multiply garnu
/// 1!=1...0!=1

function factorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n -1);
    }
}

console.log(factorial(5));

/// jaba samma ending of the print out hudaina eutai function feri feri call gari print gari last ma resutl nikalnu lai recursion bhaninchha


//5*factorial(5-1);///5-1n=5
//5*factorial(4);///5-1n=5
//5*4*factorial(3);//4-1
//5*4*3*factorial(2);
//5**4*3*2*factorial(1);




/**
    Array
    //introduction // about
 */
