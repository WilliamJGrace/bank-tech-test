describe('bankAccount', () => {
  let recordLog
  let account
  beforeEach(() => {

    recordLog = jasmine.createSpyObj('recordLog', ['create_record'])
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
  })



})
