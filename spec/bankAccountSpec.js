describe('bankAccount', () => {
  var bankAccount
  var bankAccountWithBalance

  describe("getCurrentDate", () => {
    beforeEach(() => {
      bankAccount = new BankAccount()



      function DateDouble() {

      };

      DateDouble.prototype.getDate = function() {
        return 22
      }
      DateDouble.prototype.getMonth = function () {
        return 3
      }
      DateDouble.prototype.getFullYear = function () {
        return 2020
      }
      BankAccount.prototype.getTodaysDate = function () {
        return new DateDouble()
      }
      bankAccount = new BankAccount()

    })
      it("returns a string of the current date", () => {
        console.log(bankAccount.getTodaysDate().getDate())
        console.log(bankAccount.recordCurrentDate())
        expect(bankAccount.recordCurrentDate()).toEqual("22/04/2020")
      })
  })

  beforeEach(() => {
    BankAccount.prototype.recordCurrentDate = function () {
      return '21/04/2020'
    }
    bankAccount = new BankAccount()
    bankAccountWithBalance = new BankAccount()
    bankAccountWithBalance.balance = 50
  //   bankAccount.recordCurrentDate() = () => {
  //     return "21/04/2020"
  //   }
  //   bankAccountWithBalance.recordCurrentDate() = () => {
  //     return "21/04/2020"
  //   }
  })

  it('initialises with balance of 0', () => {
    expect(bankAccount.getBalance()).toEqual(0)
  })

  describe('#deposit', () => {
    beforeEach(() => {
      bankAccount.deposit(20)
    })

    it('can deposit and add to balance', () => {
      expect(bankAccount.getBalance()).toEqual(20)
    })

    it('records date that money was depsoited and stores it', () => {
      expect(bankAccount.getAccountRecords()[0].date).toEqual('21/04/2020')
    })

    it('records the balance after money was deposited and stores it', () => {
      expect(bankAccount.getAccountRecords()[0].balance).toEqual('20.00')
    })

    it('records the amount deposit and marks it as a credit', () => {
      bankAccount.deposit(20)
      expect(bankAccount.getAccountRecords()[0].credit).toEqual('20.00')
    })

    it('raises an error when a user tried to deposit and enters text', () => {
      expect(() => { bankAccount.deposit('string') }).toThrowError('Please enter a number between 0 and 10000')
    })

    it('raises an error when a user tried to deposit over 10,000 and enters text', () => {
      expect(() => { bankAccount.deposit(10500) }).toThrowError('Please enter a number between 0 and 10000')
    })
  })

  describe('#withdraw', () => {
    beforeEach(() => {
      bankAccountWithBalance.withdraw(5)
    })

    it('can withdraw and add to balance', () => {
      expect(bankAccountWithBalance.getBalance()).toEqual(45)
    })
    it('records date that money was withdrawn and stores it', () => {
      expect(bankAccountWithBalance.getAccountRecords()[0].date).toEqual('21/04/2020')
    })
    it('records the balance after money was withdrawn and stores it', () => {
      expect(bankAccountWithBalance.getAccountRecords()[0].balance).toEqual('45.00')
    })

    it('records the amount withdrawn and marks it as a debit', () => {
      expect(bankAccountWithBalance.getAccountRecords()[0].debit).toEqual('5.00')
    })

    it('raises an error when a user tried to withdraw and enters text', () => {
      expect(() => { bankAccount.withdraw('string') }).toThrowError('Please enter a number between 0 and 10000')
    })

    it('raises an error when a user withdraws an amount to take them below 0', () => {
      expect(() => { bankAccountWithBalance.withdraw(200) }).toThrowError('Withdrawel denied, amount exceeds your current balance')
    })
  })
})
