function bankAccount() {
  this.balance = 0
}

bankAccount.prototype.getBalance = function () {
  return this.balance
};
