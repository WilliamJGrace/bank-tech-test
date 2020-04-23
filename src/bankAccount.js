'use strict'

function BankAccount (recordLog = new RecordLog()) {
  this.balance = 0
  this.recordLog = recordLog
}

BankAccount.prototype.getBalance = function () {
  return this.balance

};


BankAccount.prototype.deposit = function (amount) {
  this.balance += amount
  return this.recordLog.createRecord(this.balance, null, amount )

};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount
  return this.recordLog.createRecord(this.balance, amount, null )

};

BankAccount.prototype.printRecords = function () {
  console.log(this.recordLog)
  this.recordLog.printRecords()

};
