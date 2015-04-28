var app = app || {};

app.Tasks = Backbone.Collection.extend({
  model: app.Task,
  url: '/tasks',

  createAndAddNewTask: function(data) {
    var task = new app.Task(data);
    result = task.save(task.attributes, 
    	{
    		url:'/tasks/', type: 'POST',
    		success: function(model, response, options) {
    			app.tasks.add(model);
    		}
    	});
  }

});

app.tasks = new app.Tasks();