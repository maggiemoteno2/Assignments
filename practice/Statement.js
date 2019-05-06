var isThisTrue = 10 > 50;
//console.log("nunu",isThisTrue);

var name = "Maggie";

var surname = "Moteno";

//onsole.log("My name is", name, surname);

var bananas = 20;
var apples = 10;
var nunu = 5;
var totalCosts = bananas + apples + nunu;
//console.log("The totalcost of the fruits is",totalCosts);

var place = "Diepsloot";
var Ext = 10;
//console.log("i live at",place,Ext);
var isThisTrue = 15 > 10;
//console.log("is 15 greater than 10?",isThisTrue);
//mixing a name,number and Boolean
function test2(name, number, Boolean) {
  //console.log(name,number,Boolean);
}
test2("Maggie", 12, 50 > 10);
//using argumented multipulcation
var number = 87;
number *= 5;
//console.log(number);

//using splice to remove fruits
var fruits = ['bananas', 'Apple', 'Orange', 'Lemon'];
fruits.splice(2, 1);
console.log(fruits);
//e.g of slice
var names = ["Mags","Aggie","Shy","Mat"];
names.slice(3,1);
//console.log(names);
var NumbersAndNames=[12,"Maggie",13,"Mags",10 > 1];
NumbersAndNames.slice(3,2);
//console.log(NumbersAndNames);

//if statement
function myName(num){
if( num < 10){
  return num + " its lesser than 10";
}else{
  return num + " its greater than 10"
  ;
}

  //console.log(myName(11));
//console.log("balance",balance);
//console.log("value",value);
}
//console.log(GiveUserBalance(100));