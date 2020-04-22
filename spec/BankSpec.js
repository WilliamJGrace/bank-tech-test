describe("Bank", () => {
  let bank
  let account
  beforeEach(() => {
    bank = new Bank()

  })
  // function BankAccountDouble() {
  //
  // }
  //
  // BankAccountDouble.prototype.generate_account_instance = function () {
  //
  // };

  // let bankAccountClass  = {double :BankAccount_class, new: bankacount}

  describe("create", () => {
    beforeEach(() => {
      account = jasmine.createSpyObj('account', ['deposit'])

    })
    it("can create a account", () => {

      expect(bank.create_account(account)).toEqual(account)
    })

    it("adds the instance to the array of account", () => {
      bank.create_account(account)
      expect(bank._accounts[0]).toEqual(account)
    })
  })
})
