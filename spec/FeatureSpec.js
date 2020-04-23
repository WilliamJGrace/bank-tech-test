describe('User can print a basic balance', () => {
  var bank
  var bankAccount

  beforeEach(() => {
    bank = new Bank()
    bankAccount = bank.createAccount()
  })

  it('can print a few records on the console', () => {
    bankAccount.deposit(60)
    bankAccount.deposit(20)
    bankAccount.withdraw(10)
    //overiding date function for records
    for(var i=0;i<bankAccount.recordLog.records.length;i++){
      bankAccount.recordLog.records[i].recordDate = "23/04/2020"
    }

    expect(bankAccount.printRecords()).toEqual('  date   || credit || debit || balance \n23/04/2020 || 60.00 ||  || 60.00 \n23/04/2020 || 20.00 ||  || 80.00 \n23/04/2020 ||  || 10.00 || 70.00 \n')
  })
})
