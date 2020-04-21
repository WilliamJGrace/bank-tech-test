describe("User can print a basic balance", () => {

  var bankAccountWithBalance
  var bankAccount


  beforeEach(() => {
    bankAccount = new BankAccount();

    bankAccountWithBalance = new BankAccount();
    bankAccountWithBalance.balance = 50
  });

  // it("can print a basic record on the console", () => {
  //   bankAccount.deposit(60)
  //   bankAccount.printStatment()
  //   expect(bankAccount.printStatment()).toEqual(console.log("  date   || credit || debit || balance \n 21/04/2020 || 60.00 ||  || 60.00"))
  // });

  it("can print a few records on the console", () => {
    bankAccount.deposit(60)
    bankAccount.deposit(20)
    bankAccount.withdraw(10)

    bankAccount.printStatment()
    expect(bankAccount.printStatment()).toEqual(console.log("  date   || credit || debit || balance \n 21/04/2020 || 60.00 ||  || 60.00 \n 21/04/2020 || 20.00 ||  || 80.00 \n 21/04/2020 ||  || 10.00 || 70.00"))
  });
});
