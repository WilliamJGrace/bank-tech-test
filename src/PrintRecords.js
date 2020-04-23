function PrintRecords(records){
 this.records = records
}

PrintRecords.prototype.convertToObjects = function () {
  var arr = []
  for(var i=0;i<this.records.length;i++){


    arr.push({"balance": `${Number(this.records[i].recordBalance).toFixed(2)}`, "debit": `${Number(this.records[i].recordDebit).toFixed(2)}`, "credit": `${Number(this.records[i].recordCredit).toFixed(2)}`})
  }
  return arr
};

PrintRecords.prototype.printStatement = function () {
  var arr = this.convertToObjects()

  var statement = '  date   || credit || debit || balance \n'
  for (var i = 0; i < arr.length; i++) {


    if (arr[i].debit != "0.00") {
      statement = statement.concat(`${arr[i].date} ||  || ${arr[i].debit} || ${arr[i].balance} \n`)
    } else {
      statement = statement.concat(`${arr[i].date} || ${arr[i].credit} ||  || ${arr[i].balance} \n`)
    }
  }
  return statement
}
