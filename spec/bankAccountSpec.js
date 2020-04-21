describe("bankAccount", () => {
  var bankAccount
  var bankAccountWithBalance

  beforeEach(() => {
    bankAccount = new BankAccount();
    bankAccountWithBalance = new BankAccount();
    bankAccountWithBalance.balance = 50
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
      expect(bankAccount.getAccountRecords()[0].date).toEqual("21/04/2020")
    })

    

    it("records the amount deposit and marks it as a credit", () => {
      bankAccount.deposit(20);
      expect(bankAccount.getAccountRecords()[0].credit).toEqual("20.00")
    })

  })

  describe("#withdraw", () => {

    beforeEach(() => {
      bankAccountWithBalance.withdraw(5);
    })

    it("can withdraw and add to balance", () => {
      expect(bankAccountWithBalance.getBalance()).toEqual(45)
    })
    it("records date that money was withdrawn and stores it", () => {
      expect(bankAccountWithBalance.getAccountRecords()[0].date).toEqual("21/04/2020")
    })
    it("records the balance after money was withdrawn and stores it", () => {
      expect(bankAccountWithBalance.getAccountRecords()[0].balance).toEqual("45.00")
    })

    it("records the amount withdrawn and marks it as a debit", () => {
      expect(bankAccountWithBalance.getAccountRecords()[0].debit).toEqual("5.00")

    })

  })




})
