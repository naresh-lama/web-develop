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
 console.log(typeof tryArOne.toString());
 
 
 /// objects... one of the data type in Js
 /// object are alaways in key value pair
 /// we can store multiple datas inside an object ... that data may be of data type like, number, string,boolean
 /// inside object we can make function and make also object
 /**
  let objectName = {
     key: "pair",
     key: 1,
     key: true,
  };
  */
 
 let profession = {
     name: "Nikesh",
     age: 23,
     place: "Japan",
     married: false,
     favDrinks: ["juice", "rakshi", "ochya"],
     sum: (a,b) => {
         return a + b;
     },
     detailID: {
         role: "Web Dev",
         exp: 2,
         job: true,
         techno: ["JS", "React", "Node", "Express"],
     },
 };

 /// data type change
console.log(profession);
profession.name = "Naresh";/// key value change edit Nikesh→Naresh

console.log(profession.name);/// print out is Naresh

console.log(profession.detailID);
profession.detailID.techno[3] = "Pytheon";

console.log(profession.detailID["techno"]);

 ///fetching data from objects
 console.log(profession);
 console.log(profession.name);///return object key value
 console.log(profession["name"]);///return object key value
 console.log(profession["place"]);///return object key value
 console.log(profession.favDrinks);
 console.log(profession.favDrinks[1]);// index 1 print out rakshi
 console.log(profession.sum(3,4));/// return value is 7
 console.log(profession.detailID);/// object bhitrako object print out
 console.log(profession.detailID.exp);
 console.log(profession.detailID["techno"]);
 console.log(profession["detailID"].role);
 console.log(profession.detailID["techno"][0]);///index of array print is JS

/// array of object....in this object all the object inclueded

let objValue = [
    {
        name: "Nikesh",
        country: "Nepal",
        age: 22,
    },
    {
        name: "Ritesh",
        country: "Japana",
        age: 32,
    },
    {
        name: "Rakesh",
        country: "brazil",
        age: 54,
    },
    {
        name: "Bikash",
        country: "Jarmany",
        age: 58,
    },
];

console.log(objValue);

console.log(objValue[2].name);///index 2 ko name print out garchha
console.log(objValue[3].country);
