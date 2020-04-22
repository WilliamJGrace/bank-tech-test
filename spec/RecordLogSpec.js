describe("RecordLog", () => {
  let recordLog
  let record
  beforeEach(() => {

    record = jasmine.createSpyObj('record', ['create_record'])
    recordLog = new RecordLog()

  })

  describe("createRecord", () => {

    it("can create a record", () => {



      expect(recordLog.create_record(record)).toEqual(record)
    })

  })
})