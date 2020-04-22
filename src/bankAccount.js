'use strict'

function BankAccount (recordLog) {
  this.balance = 0
  this.recordLog = recordLog || new RecordLog()
}
