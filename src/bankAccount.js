'use strict'

function BankAccount (recordLog = new RecordLog()) {
  this.balance = 0
  this.recordLog = recordLog
}

BankAccount.prototype.getBalance = function () {
  return this.balance

};


BankAccount.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount) || amount > 10000) {
   throw new Error('Please enter a number between 0 and 10000')
 }

  this.balance += amount
  return this.recordLog.createRecord(this.balance, null, amount )

};

BankAccount.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount) || amount > 10000) {
   throw new Error('Please enter a number between 0 and 10000')
 }
 if (this.balance - amount < 0) {
    throw new Error('Withdrawel denied, amount exceeds your current balance')
  }
  this.balance -= amount
  return this.recordLog.createRecord(this.balance, amount, null )

};

BankAccount.prototype.printRecords = function () {
  return this.recordLog.printRecords()

};
