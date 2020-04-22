describe('bankAccount', () => {
  let recordLog
  let account
  beforeEach(() => {

    recordLog = jasmine.createSpyObj('recordLog', ['create_record'])

  })

  it("initilized with a record log", () => {
    account = new BankAccount(recordLog)
    expect(account.recordLog).toEqual(recordLog)
  })

  it('initialises with balance of 0', () => {
   expect(account.getBalance()).toEqual(0)
 })


})
