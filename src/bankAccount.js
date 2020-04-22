'use strict'

function BankAccount (recordLog) {
  this.balance = 0
  this.recordLog = recordLog || new RecordLog()
}

BankAccount.prototype.getBalance = function () {
  return this.balance

};


BankAccount.prototype.deposit = function (amount) {
  this.balance += amount
  this.recordLog.createRecord(this.balance)

};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount

};
