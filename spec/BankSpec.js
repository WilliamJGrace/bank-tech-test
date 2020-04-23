describe('Bank', () => {
  let bank
  let account
  beforeEach(() => {
    bank = new Bank()
  })


  describe('create', () => {
    beforeEach(() => {
      account = jasmine.createSpyObj('account', ['deposit'])
    })
    it('can create a account', () => {
      expect(bank.createAccount(account)).toEqual(account)
    })

    it('adds the instance to the array of account', () => {
      bank.createAccount(account)
      expect(bank._accounts[0]).toEqual(account)
    })
  })
})
