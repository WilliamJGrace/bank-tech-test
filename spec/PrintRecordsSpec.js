describe('PrintRecords', () => {
  let record
  let records
  let printRecords
  record = jasmine.createSpyObj('record', ['recordBalance', 'recordDebit', 'recordCredit', 'recordDate'])
  record.recordBalance = 10
  record.recordDebit = 20
  record.recordCredit = 30
  record.recordDate = '01/01/2020'

  records = [record, record, record]

  printRecords = new PrintRecords(records)

  it('converts array of instances into an array of objects', () => {
    expect(printRecords.convertToObjects()).toEqual([{ date: '01/01/2020', balance: '10.00', debit: '20.00', credit: '30.00' }, { date: '01/01/2020', balance: '10.00', debit: '20.00', credit: '30.00' }, { date: '01/01/2020', balance: '10.00', debit: '20.00', credit: '30.00' }])
  })
})
