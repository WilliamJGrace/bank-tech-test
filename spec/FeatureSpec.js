describe("User can print a basic balance", () => {

  var bankAccountWithBalance

  beforeEach(() => {
    bankAccountWithBalance = new BankAccount();
    bankAccountWithBalance.balance = 50
  });

  it("can print a basic balance on the console", () => {
  expect(bankAccountWithBalance.printStatment()).toEqual(console.log("Balance: 50.00"))
  });
});
