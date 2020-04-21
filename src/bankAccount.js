function BankAccount() {
  this.balance = 0
  this.accountRecords = []
}

BankAccount.prototype.getBalance = function () {
  return this.balance
};

BankAccount.prototype.getAccountRecords = function () {
  return this.accountRecords
};

BankAccount.prototype.recordCurrentDate = function () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return dd + '/' + mm + '/' + yyyy;

};

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount
  this.accountRecords.push({"balance": `${Number(this.getBalance()).toFixed(2)}`, "date": this.recordCurrentDate(), "credit": `${Number(amount).toFixed(2)}`})

};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount
  this.accountRecords.push({"date": this.recordCurrentDate(), "balance": `${Number(this.getBalance()).toFixed(2)}`, "debit": `${Number(amount).toFixed(2)}`} )

};

BankAccount.prototype.printStatment = function () {
  // console.log(`Balance: ${Number(this.getBalance()).toFixed(2)}`)
  console.log("  date   || credit || debit || balance \n")
  for (i=0;i<this.getAccountRecords.length;i++){
    console.log( getAccountRecords[i].date || getAccountRecords[i].credit || getAccountRecords[i].debit || getAccountRecords[i].balance)
  }
};
