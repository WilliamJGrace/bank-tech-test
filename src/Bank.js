function Bank(){
  this._accounts = []
}

Bank.prototype.createAccount = function (newAccount = new BankAccount() ) {
  let account = newAccount
  this._accounts.push(account)
  return newAccount
};
