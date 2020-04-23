describe('User can print a basic balance', () => {
  var bank
  var bankAccount

  beforeEach(() => {
    // BankAccount.prototype.recordCurrentDate = function () {
    //   return '21/04/2020'
    // }
    bank = new Bank()
    bankAccount = bank.createAccount()
  })
  //
  //     bankAccount = new BankAccount()
  //
  //     bankAccountWithBalance = new BankAccount()
  //     bankAccountWithBalance.balance = 50
  //   })
  //
  //   // it("can print a basic record on the console", () => {
  //   //   bankAccount.deposit(60)
  //   //   bankAccount.printStatment()
  //   // });
  //
  it('can print a few records on the console', () => {
    bankAccount.deposit(60)
    bankAccount.deposit(20)
    bankAccount.withdraw(10)

    expect(bankAccount.printRecords()).toEqual('  date   || credit || debit || balance \n23/04/2020 || 60.00 ||  || 60.00 \n23/04/2020 || 20.00 ||  || 80.00 \n23/04/2020 ||  || 10.00 || 70.00 \n')
  })
})
