function RecordLog() {
  this.records = []
}

RecordLog.prototype.createRecord = function (balance, debit, credit) {
  newRecord = new Record(balance, debit, credit)
  this.records.push(newRecord)
  return newRecord
};

RecordLog.prototype.printRecords = function () {
  let printRecords = new PrintRecords(this.records)

  return printRecords.printStatement()

};
