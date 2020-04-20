describe("bankAccount", () => {
  var bankAccount

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  it("initialises with balance of 0", () => {
    expect(bankAccount.getBalance()).toEqual(0)
  })

  it("can deposit and add to balance", () => {
    bankAccount.deposit(20);
    expect(bankAccount.getBalance()).toEqual(20)


  })
  it("can withdraw and add to balance", () => {
    bankAccount.deposit(20);
    bankAccount.withdraw(5);
    expect(bankAccount.getBalance()).toEqual(15)


  })
})
