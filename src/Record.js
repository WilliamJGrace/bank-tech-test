function Record (balance, debit, credit) {
  this.recordBalance = balance
  this.recordDebit = debit
  this.recordCredit = credit
  this.recordDate = this.recordCurrentDate()
}

Record.prototype.recordCurrentDate = function (newDate = new Date()) {
  var today = newDate

  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
  var yyyy = today.getFullYear()

  return dd + '/' + mm + '/' + yyyy
}
