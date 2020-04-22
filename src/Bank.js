function Bank(){
  this._accounts = []
}

Bank.prototype.create_account = function (newAccount) {
  let account = newAccount || new BankAccount()
  this._accounts.push(account)
  return newAccount
};
