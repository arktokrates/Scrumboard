describe("Task Model", function() {

  beforeEach(function() {
    taskModel = new app.Task();
  });

  it("is defined in app namespace", function() {
    expect(app.Task).toBeDefined();
  });


  describe("default attributes", function() {
    it("has an empty id attribute", function() {
      expect(taskModel.get('id')).toBe('');
      taskModel.set('id','1');
      expect(taskModel.get('id')).toBe('1');
    });
    it("has an empty title attribute", function() {
      expect(taskModel.get('title')).toBe('');
    });
    it("has an empty description attribute", function() {
      expect(taskModel.get('description')).toBe('');
    });
    it("has an empty rating attribute", function() {
      expect(taskModel.get('rating')).toBe('');
    });
    it("has an empty responsible attribute", function() {
      expect(taskModel.get('responsible')).toBe('');
    });
    it("has a column attribute with value `todo`", function() {
      expect(taskModel.get('column')).toEqual('todo');
    });
  });

  describe("properties", function() {
    it("has an urlRoot property with value `/tasks`", function() {
      expect(taskModel.urlRoot).toEqual('/tasks');
    });
    it("has an idAttribute property with value `id`", function() {
      expect(taskModel.idAttribute).toEqual('id');
    });
  });
});