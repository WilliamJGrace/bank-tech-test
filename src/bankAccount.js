function BankAccount() {
  this.balance = 0
}

BankAccount.prototype.getBalance = function () {
  return this.balance
};

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount

};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount
};
