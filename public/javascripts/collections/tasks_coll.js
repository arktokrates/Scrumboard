var app = app || {};

app.Tasks = Backbone.Collection.extend({
  model: app.Task,
  url: '/tasks',

  createAndAddNewTask: function(data) {
    var task = new app.Task(data);
    task.save(task.attributes, {url:'/tasks/', type: 'POST'})
    app.tasks.add(task);
    //app.tasks.sync("create", task);
    //console.log(task.get("id"));
  }

});

app.tasks = new app.Tasks();