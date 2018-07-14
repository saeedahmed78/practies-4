let costOfApple = 10;
let costOfmango = 15;
let costOfBanana = 8;
let numberOfApple;
let numberOfMango;
let numberOfBanana;

function totalCost(){

 numberOfApple = parseInt(document.querySelector("#apples").value);
 numberOfMango = parseInt(document.querySelector("#mangoes").value);
 numberOfBanana = parseInt(document.querySelector("#bananas").value);

 console.log("The Total Amount of your shopping is " + (numberOfApple*costOfApple + numberOfBanana*costOfBanana + numberOfMango*costOfmango ))

}