describe("Tasks Collection", function() {
  it("is defined in app namespace", function() {
    expect(app.Tasks).toBeDefined();
  });
  it("has an instance in app namespace", function() {
    expect(app.tasks).toBeDefined();
    expect(app.tasks instanceof app.Tasks).toBe(true)
  });

  it("is a collection of Task models", function() {
    expect(new app.Tasks().create({}) instanceof app.Task).toBe(true)
  });

  describe("properties", function() {
    
    beforeEach(function() {
      tasks = new app.Tasks();
    });

    it("has a model property corresponding to `app.Task`", function() {
      expect(tasks.model).toBe(app.Task);
    });
    it("has an url property with value `/tasks`", function() {
      expect(tasks.url).toEqual('/tasks');
    });
  });
});