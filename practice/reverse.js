const tellerMachine = {
  listOfUsers: [],

  addUser(users) {
    console.log(this.listOfUsers);

    this.listOfUsers.push(); // append (add) a default balance of 0.00 to every user object and append it to the the listOfusers.
var balance= users.map(v=> console.log(v)

);
    this.listOfUsers["balance 0.00"];
    return this.listOfUsers;
    
  },

  depositIntoUserAccount({ pin, amount }) {
    console.log(" amount has been to deposited to my account",this.listOfUsers);
  },

  withDrawFromUserAccount({ pin, amount }) {
    console.log("amount withdrawn",this.listOfUsers);
  }
};
//for testing
tellerMachine.addUser([
  { name: "Sam", pin: "1234"},

  { name: "Mary", pin: "0000"},

  { name: "Stephen", pin: "1223"},

  { name: "Lindiwe", pin: "0001"}
]);

tellerMachine.depositIntoUserAccount({ amount: 1233, pin: 1234 });

tellerMachine.withDrawFromUserAccount({ amount: 1283, pin: 1234 });
