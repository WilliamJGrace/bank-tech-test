function Bank(){
  this._accounts = []
}

Bank.prototype.create_account = function (newAccount = new BankAccount() ) {
  let account = newAccount
  this._accounts.push(account)
  return newAccount
};
