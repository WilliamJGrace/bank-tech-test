describe("User can print a basic balance", () => {

  var bankAccountWithBalance
  var bankAccount


  beforeEach(() => {
    bankAccount = new BankAccount();

    bankAccountWithBalance = new BankAccount();
    bankAccountWithBalance.balance = 50
  });

  it("can print a basic record on the console", () => {
    bankAccount.deposit(60)
    bankAccount.printStatment()
    expect(bankAccount.printStatment()).toEqual(console.log("  date   || credit || debit || balance \n 21/04/2020 || 60.00 ||  || 60.00"))
  });
});
