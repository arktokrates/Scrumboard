// Scrum board task model

var app = app || {};

app.Task = Backbone.Model.extend({

  urlRoot: "/tasks",
  idAttribute: "id",

  defaults: {
    id: '',
    title: '',
    description: '',
    rating: '',
    responsible: '',
		column: 'todo'
  },

});