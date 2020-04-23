describe("PrintRecords", () => {
  let record
  let records
  let printRecords
  record = jasmine.createSpyObj('record', ['recordBalance', 'recordDebit', 'recordCredit'])
  record.recordBalance = 10
  record.recordDebit = 20
  record.recordCredit = 30
  records = [record, record, record]

  printRecords = new PrintRecords(records)




  it("converts array of instances into an array of objects", () => {
    expect(printRecords.convertToObjects()).toEqual([{"balance": "10.00", "debit":"20.00", "credit": "30.00"}, {"balance": "10.00", "debit":"20.00", "credit": "30.00"}, {"balance": "10.00", "debit":"20.00", "credit": "30.00"}])


  })
})
