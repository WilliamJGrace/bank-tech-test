describe("bankAccount", () => {
  it("initialises with balance of 0", () => {
    bankAccount = new bankAccount()
    expect(bankAccount.balance).toEqual(0)


  })
})
