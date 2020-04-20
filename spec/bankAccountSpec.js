describe("bankAccount", () => {
  var bankAccount

  beforeEach(() => {
    bankAccount = new BankAccount();
    bankAccountWithBalance = new BankAccount();
    bankAccountWithBalance.deposit(50)
  });

  it("initialises with balance of 0", () => {
    expect(bankAccount.getBalance()).toEqual(0)
  })

  describe("#deposit", () => {
    it("can deposit and add to balance", () => {
      bankAccount.deposit(20);
      expect(bankAccount.getBalance()).toEqual(20)


    })

    it("records date that money was depsoited and stores it", () => {
      bankAccount.deposit(20);
      console.log(bankAccount.getAccountRecords())
      expect(bankAccount.getAccountRecords()[0].date).toEqual("20/04/2020")
    })

  })

  it("can withdraw and add to balance", () => {
    bankAccountWithBalance.withdraw(5);
    expect(bankAccountWithBalance.getBalance()).toEqual(45)


  })

  it("can print a basic balance on the console", () => {
    expect(bankAccountWithBalance.printStatment()).toEqual(console.log("Balance: 50"))
  })

})
