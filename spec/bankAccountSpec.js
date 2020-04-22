describe('bankAccount', () => {
  let recordLog
  let account
  beforeEach(() => {

    recordLog = jasmine.createSpyObj('recordLog', ['createRecord'])
    account = new BankAccount(recordLog)


  })

  it("initilized with a record log", () => {
    expect(account.recordLog).toEqual(recordLog)
  })

  it('initialises with balance of 0', () => {
   expect(account.getBalance()).toEqual(0)
 })

 describe('#deposit', () => {
    beforeEach(() => {
      account.deposit(20)
    })

    it('can deposit and add to balance', () => {
      expect(account.getBalance()).toEqual(20)
    })

    it("deposit .deposit", () => {
      // recordLog.createRecord.and.callFake(function () {
      //   return {}
      // });
      expect(recordLog.createRecord).toHaveBeenCalled()

    // it('can create a record', () => {
    //   expect(account.deposit(20)).toHaveBeenCalledWith(recordLog)
    // })
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
    })

})
