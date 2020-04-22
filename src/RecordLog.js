function RecordLog() {
  this.records = []
}

RecordLog.prototype.createRecord = function (record) {
  newRecord = record || new Record()
  this.records.push(newRecord)
  return newRecord
};

RecordLog.prototype.PrintRecords = function () {
  let printRecords = new PrintRecords(this.records)
  printRecords.printStatement()
  
};
