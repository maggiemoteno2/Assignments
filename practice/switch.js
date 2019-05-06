var withdrawalHistory = [];
var balance = 1000;
function giveUserBalance() {
  return balance;
}
function withdraw(withdrawalAmount) {
  switch (withdrawalAmount) {
    case withdrawalAmount <= balance:
      balance = balance - withdrawalAmount;
      withdrawalHistory.push(withdrawalAmount);
      return withdrawn;
    case balance < withdrawalAmount:
    return "insufficient";

  }

  if (balance >= withdrawalAmount) {
    balance = balance - withdrawalAmount;
    withdrawalHistory.push(withdrawalAmount);
    console.log("withdrawal history", withdrawalHistory);
    console.log("withdrawal of " + withdrawalAmount + " successful");
    console.log("remaining Funds " + balance);
  } else {
    console.log("insufficient Funds");
  }
}
console.log("Current Balance " + giveUserBalance());
withdraw(2458);
withdraw(100);
withdraw(25);
