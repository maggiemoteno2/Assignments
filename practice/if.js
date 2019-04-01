function testing(time){
  if(time < 9){
    return "good morning";
  }else{
    return "good evening";
  }
}
//console.log(testing(10));

//using the switch statment
function testing(name){ 
  var answer;
switch(name){
  case 1:
  answer="Collen";
  break;
  case 2:
  answer="Maggie";
  break;
  case 3:
  answer="Njabulo";
  break;
  case 4:
  answer="Tebogo";
  break;
  default:
  return "value doesnt match";
}
  return answer;
}
//console.log(testing(5)); =

var balance = 0;
var Cashoption = [100,500,600,900];
function giveUserBalance(value){
  if(value>balance){
    return value + "insufficient funds";
  }else if(value==balance){
    return " withdraw " + value;
  }else{
    return " balance "+ balance;
   
  }
}
//console.log("choose the amount you want to withdraw",Cashoption);
//console.log(giveUserBalance(100));                            


var balance = 0;
console.log("balance",balance);
 function giveUserBalance(value){
  if(balance >= value){
  return value + "withdrawn";
}
else if(balance < value){
  return value + "Insufficient funds";
}else{
  return;
}
 }

console.log(giveUserBalance(0));
var total= balance;
console.log("current balance",total);