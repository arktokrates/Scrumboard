var app = app || {};

app.Tasks = Backbone.Collection.extend({
  model: app.Task,
  url: '/tasks',

  createAndAddNewTask: function(data) {
    var task = new app.Task(data);
    //console.log(task.attributes);
    task.save(task.attributes, {url:'/tasks/', type: 'POST'})
    //console.log(app.tasks);
    app.tasks.add(task);
    //console.log(task);
    //console.log(app.tasks);
    //app.tasks.sync("create", task);
    //console.log(task.get("id"));
    //task.save();
    //task.set(task.attributes);
  }

});

app.tasks = new app.Tasks();