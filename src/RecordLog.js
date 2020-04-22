function RecordLog() {

}

RecordLog.prototype.createRecord = function (record) {
  newRecord = record || new Record()
  return newRecord
};
