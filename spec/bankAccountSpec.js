describe('bankAccount', () => {
  it("initilized with a record log", () => {
    var account = new BankAccount()
    expect(account.recordLog).toBeInstanceOf(RecordLog)
  })


})
