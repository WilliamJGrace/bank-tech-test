function PrintRecords(records){
 this.records = records
}

PrintRecords.prototype.printStatement = function () {
  var arr = []
  for(var i=0;i<this.records.length;i++){
    console.log(this.records)
    console.log(this.records[i])

    arr.push({"balance": this.records[i].recordBalance(), "debit": this.records[i].recordDebit(), "credit": this.records[i].recordCredit()})
  }
  return arr
};
