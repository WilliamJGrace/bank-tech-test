describe('RecordLog', () => {
  let recordLog
  let record
  beforeEach(() => {
    record = jasmine.createSpyObj('record', ['create_record'])
    recordLog = new RecordLog()
  })
  // Cant think how to create this test
  // describe("createRecord", () => {
  //
  //   it("can create a record", () => {
  //
  //
  //
  //     expect(recordLog.createRecord(record)).toEqual(record)
  //   })
  //
  // })
})
