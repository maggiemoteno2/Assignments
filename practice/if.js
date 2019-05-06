// function testing(time) {
//   if (time < 9) {
//     return "good morning";
//   } else {
//     return "good evening";
//   }
// }
// //console.log(testing(10));

// //using the switch statment
// function testing(name) {
//   var answer;
//   switch (name) {
//     case 1:
//       answer = "Collen";
//       break;
//     case 2:
//       answer = "Maggie";
//       break;
//     case 3:
//       answer = "Njabulo";
//       break;
//     case 4:
//       answer = "Tebogo";
//       break;
//     default:
//       return "value doesnt match";
//   }
//   return answer;
// }
// console.log(testing(4));

// var balance = 0;
// function giveUserBalance(value) {
//   if (value > balance) {
//     return value + "insufficient funds";
//   } else if (value == balance) {
//     return " withdraw " + value;
//   } else {
//     return " balance " + balance;
//   }
// }
// //console.log("choose the amount you want to withdraw",Cashoption);
// //console.log(giveUserBalance(100));

// var withdrawalHistory=[];
// var balance = 1000;
// function giveUserBalance() {
//   return balance;
// }
// function withdraw(withdrawalAmount) {
//   if (balance >= withdrawalAmount){
//     balance = balance - withdrawalAmount;
//   } else{
//     return "withdrawal of " + withdrawalAmount + " successful";}
//     {
//     return "insufficient Funds";
//   }
//   //withdrawalHistory.push(withdrawalAmount);
//     //console.log("withdrawal history",withdrawalHistory);
// }
// //console.log("Current Balance " + giveUserBalance());
// //withdraw(20000);
// //console.log("remaining Funds " + balance);
// => function
// () this invokes a function

// function Addname(a) {
//    var obj = { name: "somename" };
//    a(obj);
// }
// const show = function(param) {
//   console.log(param);
// };
// Addname(show);

// function makeMeUnderstand(a) {
//   console.log(a);
// }
// const name = "maggie";
// makeMeUnderstand(name);

var name = a => {};
var name = [{ name: "john" }, { name: "mercy" }];
var namesWithSurnames = name.map(x => {});
//console.log(name);

//console.log(namesWithSurnames);
// var len = name.length; //2
// var counter = 0;
//  for(counter;counter < len ;counter++){

//  }
//var name1 =
//console.log(name);
var names=[{name:"Maggie"},{name:"Collen"},{name:"Njabulo"}]
var namesWithSurnames=