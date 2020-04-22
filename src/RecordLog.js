function RecordLog() {

}

RecordLog.prototype.create_record = function (record) {
  newRecord = record || new Record()
  return newRecord
};
