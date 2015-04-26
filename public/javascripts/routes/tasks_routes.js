var app = app || {};

app.Router = Backbone.Router.extend({

  routes : {
   // "" : "scrumboard",
  },

  scrumboard : function() {
    this.loadView(new app.TasksView({ collection: app.tasks }));
  },

  loadView : function(view) {
    this.view && this.view.remove();
    this.view = view;
  }

});
