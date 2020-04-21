"use strict";

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
  if (!Number.isInteger(amount)) {
    throw new Error("Please enter a number between 0 and 10000")
  }
  this.balance += amount
  this.accountRecords.push({"balance": `${Number(this.getBalance()).toFixed(2)}`, "date": this.recordCurrentDate(), "credit": `${Number(amount).toFixed(2)}`})

};

BankAccount.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount)) {
    throw new Error("Please enter a number between 0 and 10000")
  }
  if (this.balance - amount < 0) {
    throw new Error("Withdrawel denied, amount exceeds your current balance")
  }
  this.balance -= amount
  this.accountRecords.push({"date": this.recordCurrentDate(), "balance": `${Number(this.getBalance()).toFixed(2)}`, "debit": `${Number(amount).toFixed(2)}`} )

};

BankAccount.prototype.printStatment = function () {
  var statement =  "  date   || credit || debit || balance \n"
  for (var i=0;i<this.getAccountRecords().length;i++){
    if (this.getAccountRecords()[i].debit ){
      statement = statement.concat(`${this.getAccountRecords()[i].date} ||  || ${this.getAccountRecords()[i].debit} || ${this.getAccountRecords()[i].balance} \n`)

    }
    else{
      statement = statement.concat(`${this.getAccountRecords()[i].date} || ${this.getAccountRecords()[i].credit} ||  || ${this.getAccountRecords()[i].balance} \n`)

    }
  }
  return statement
};
