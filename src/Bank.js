function Bank () {
  this._accounts = []
}

Bank.prototype.createAccount = function (newAccount = new BankAccount()) {
  const account = newAccount
  this._accounts.push(account)
  return newAccount
}
