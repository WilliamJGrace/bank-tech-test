describe('bankAccount', () => {
  let recordLog
  let account
  beforeEach(() => {

    recordLog = jasmine.createSpyObj('recordLog', ['createRecord', 'printRecords'])
    account = new BankAccount(recordLog)


  })

  it("initilized with a record log", () => {
    expect(account.recordLog).toEqual(recordLog)
  })

  it('initialises with balance of 0', () => {
   expect(account.getBalance()).toEqual(0)
 })

 describe("#printRecords", () => {
   it("calls record logs print record function", () => {
     account.printRecords()
     expect(recordLog.printRecords).toHaveBeenCalled()
   })
 })

 describe('#deposit', () => {
    beforeEach(() => {
      account.deposit(20)
    })

    it('can deposit and add to balance', () => {
      expect(account.getBalance()).toEqual(20)
    })

    it("depositing creates a new record", () => {

      expect(recordLog.createRecord).toHaveBeenCalled()

    })
    //edge cases
    it('raises an error when a user tried to deposit and enters text', () => {
     expect(() => { account.deposit('string') }).toThrowError('Please enter a number between 0 and 10000')
   })

   it('raises an error when a user tried to deposit over 10,000', () => {
     expect(() => { account.deposit(10500) }).toThrowError('Please enter a number between 0 and 10000')
   })
})

  describe('#withdraw', () => {
      beforeEach(() => {
        account.balance = 50
        account.withdraw(5)
      })

      it('can withdraw and add to balance', () => {
        expect(account.getBalance()).toEqual(45)
      })
      it("withdrawing creates a new record", () => {

        expect(recordLog.createRecord).toHaveBeenCalled()

    })
    //edge cases

    it('raises an error when a user tried to withdraw and enters text', () => {
     expect(() => { account.withdraw('string') }).toThrowError('Please enter a number between 0 and 10000')
    })
    it('raises an error when a user tried to withdraw over 10,000', () => {
      expect(() => { account.withdraw(10500) }).toThrowError('Please enter a number between 0 and 10000')
    })

   it('raises an error when a user withdraws an amount to take them below 0', () => {
     expect(() => { account.withdraw(200) }).toThrowError('Withdrawel denied, amount exceeds your current balance')
   })
    })

})
