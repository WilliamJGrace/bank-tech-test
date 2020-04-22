describe("Record", () => {
  let record
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
})
