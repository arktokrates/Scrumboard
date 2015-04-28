var app = app || {};

app.TasksView = Backbone.View.extend({

  views: [],

  el: $('#scrumboard'),

  render: function() {

    $('#scrumboard tbody tr td').droppable({      
      drop: function(event, ui) {
        var taskColumn = $(event.target).attr('id');
        var cardId = $(ui.draggable).attr('id');
        var task = app.tasks.where({id: cardId})[0];
        task.set('column', taskColumn);
        task.save();
      }
    });
  },

  remove : function(model) {
    for(var i = 0; i <= this.views.length; i++) {
      var view = this.views[i];
      if (view.model == model) {
        this.views.splice(i, 1);
        view.remove();
        break;
      }
    }
  },

  addTaskView: function(task) {

    var myTaskView = new app.TaskView({model: task});

    this.views.push(myTaskView);
    var myRenderedElement = $(myTaskView.render().el);
    myRenderedElement.attr('id', task.get('id'));
    myRenderedElement.draggable({containment: '#scrumboard'});

    $('#' + task.get('column')).append(myRenderedElement);
  },

  initialize: function() {

    this.listenTo(app.tasks, 'reset',this.addAll);
    this.listenTo(app.tasks, 'add', this.addTaskView);
    this.listenTo(app.tasks, 'all', this.render);
    this.listenTo(app.tasks, 'remove', this.remove, this);
    this.collection.fetch({reset: true});
  },

  addAll: function() {
    for(var i = 0; i < this.views.length; i++) {
      this.views[i].delete();
    }
    app.tasks.each(this.addTaskView, this); 
  }

});


app.TaskView = Backbone.View.extend({

  events: {
    'click .edit': 'edit',
    'click .save': 'save',
    'click .delete': 'delete'
  },

  template: _.template($('#task-template').html()),

  initialize: function() {
    this.model.fetch({reset: true});
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'edit', this.edit);
    this.listenTo(this.model, 'save', this.save);
    this.listenTo(this.model, 'delete', this.delete);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  // cf. for editing: http://codepen.io/gab/pen/dJmIE

  edit: function() {
    this.$('.edit').hide();
    this.$('.taskCard').addClass('editable');
    this.$('.task_title').attr('contenteditable', 'true').focus();
    this.$('.task_rating').attr('contenteditable', 'true');
    this.$('.task_description').attr('contenteditable', 'true');
    this.$('.task_responsible').attr('contenteditable', 'true');
    this.$('.save').show();
  },

  save: function() {
    this.$('.save').hide();
    this.$('.taskCard').removeClass('editable');
    this.$('.task_title').removeAttr('contenteditable');
    this.$('.task_rating').removeAttr('contenteditable');
    this.$('.task_description').removeAttr('contenteditable');
    this.$('.task_responsible').removeAttr('contenteditable');
    this.model.set({
      title: this.$('.task_title').text(),
      rating: this.$('.task_rating').text(),
      description: this.$('.task_description').text(),
      responsible: this.$('.task_responsible').text()
    })
    this.model.save();
    this.$('.edit').show();
  },

  delete: function() {
    this.model.destroy();
  }

});