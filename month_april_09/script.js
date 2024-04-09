///DOM Munipulatation
/// guess the number project
/// Todo List
/// html ko alternative aru kunai chhaina
/// css ko ni alternative aru chhaina
/// JavaScript ko ni alternative aru kunai chhaina
/// JavaScript kunai pani web page lai responsive banauna lai use garinchha 
/// html bhitra ko kura haru like contents haru lai change garaune lai maniulation garnu ho
/// bidusha dahal, ila
/// dom munapulation garna lai chahi javascript nai chahinchha kina javascript nai use hunchha bhanda web page vadengine le compiler gardinchha
/// java, c# ,c++ma chahi compile garera web page ma running hune gari garnu parchha
/// text content change garnsa saking, remove garna sakinchha
/// bottom add, style change garna sakinchha
/// can do by eventListners and effect

/// document.... html bhitra bhayeko sabai contents harulai bujauchha

// console.log(document);


/// document.querysecletor();
/// document.queryselectorAll();
/// document.getElementById();
/// doument.getElementByClassName();
/// document.getElementByName();.... form post name ko bela ma use garinchha
/// document.getElementByTagName();

/// document.querysecletor();
console.log(document.querySelector("h1"));
//// h1 contents jati dehrai bhaye ni first matra return garchha

/// document.queryselectorAll();
console.log(document.querySelectorAll("h1"));
/// h1 ja ja chha sabai retrun garchha but array ko form ma

console.log((document.querySelectorAll("h1")[1]));
/// h1 dehrai chhan but 1 index ko contect return garchha
/// return....<h1 class="h1name">next generation</h1>



/// document.getElementById();
console.log(document.getElementById("div_box"));
/// id chahi single value bhayeko le euta matra retrun garchha
/// getElement... singular


/// doument.getElementByClassName();
/// class chahi dehrai hune bhayeko le array ko form ma retrun garchha
/// arry
console.log(document.getElementsByClassName("country-list"));
/// single form
//// getElementsBy...s plural form,
console.log((document.getElementsByClassName("country-list")[0]));


/// document.getElementByTagName();
//// tag pani dherai bhayeko le arry ma retrun garchha
console.log(document.getElementsByTagName("li"));
console.log((document.getElementsByTagName("li")[1]));


/// Event Listener
document.addEventListener("click", function(){
    console.log("click event");
})
//// dom ko junsukai thau ma click garda click event retrun garchha

let japan = document.querySelector("li");
japan.addEventListener("click", function(){
    console.log("click event");
});

/// text change
let changTxt = (document.getElementsByClassName("japan")[0]);

changTxt.addEventListener("click", function (){
    changTxt.textContent = "Bidhusha is the tooper of whole Nepal";
});

changTxt.addEventListener("dblclick", function(){
    changTxt.textContent = "Proud of nepal double click";
    changTxt.style.color = "red";
});