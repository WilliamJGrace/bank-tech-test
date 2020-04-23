describe("Record", () => {
  let record
  let datedouble
  it("records balance of transaction when balance is passed through", () => {
    record = new Record(25, 0, 0)
    expect(record.recordBalance).toEqual(25)

  })
  it("records debit of transaction when balance is passed through", () => {
    record = new Record(0, 10, 0)
    expect(record.recordDebit).toEqual(10)

  })
  it("records credit of transaction when balance is passed through", () => {
    record = new Record(0, 10, 50)
    expect(record.recordCredit).toEqual(50)

  })
  it("can record the date when record was created", () => {
    datedouble = jasmine.createSpyObj('datedouble', ['getDate', 'getMonth', 'getFullYear'])
    datedouble.getDate.and.callFake(() =>{
      return 22
    })
    datedouble.getMonth.and.callFake(() =>{
      return 3
    })
    datedouble.getFullYear.and.callFake(() =>{
      return 2020
    })
    record = new Record()
    expect(record.recordCurrentDate(datedouble)).toEqual("22/04/2020")


  })
})
