
var Scrumboard = {

  tasks: [
    {
      id: '0',
      title: 'Test entry 2',
      description: 'This is a test description.',
      rating: '3',
      responsible: 'Andrew',
		  column: 'todo'
    },
    {
      id: '1',
      title: 'Test entry 1',
      description: 'This is another test description.',
      rating: '2',
      responsible: 'Mike',
      column: 'inProgress'
    }
  ],
  last_id: 1,

  getNextId: function() {
    this.last_id += 1;
    return this.last_id;
  },

  clone: function(data) {
    // JavaScript doesn't have a real clone function
    // This is good enough for simple, data-only objects
    return JSON.parse(JSON.stringify(data));
  },

  add: function(data) {
    var data = this.clone(data);
    var id = this.getNextId();
    data.id = id.toString();
    this.tasks.push(data);
    return data;
  },

  find: function(id) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
    return void 0;
  },

  remove: function(id) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        var p = this.tasks[i];
        this.tasks.splice(i, 1);
        return p;
      }

    }
    return void 0;
  },

  allTasks: function() {
    return this.tasks;
  },  
  
  clearAllEntries: function() {
    this.tasks = [];
    this.last_id = 0;
  },

  update: function(id, data) {
    for (var attr in data) {
      this.tasks[id][attr] = data[attr];
    }
    return this.tasks[id];
    }
};


exports.tasks = Scrumboard;

exports.getAllEntries = function() {
  return Scrumboard.allTasks();
};

exports.clearAllEntries = function() {
  return Scrumboard.clearAllEntries();
};

exports.create = function(data) {
  return Scrumboard.add(data);
};

exports.update = function(id, data){
  return Scrumboard.update(id,data);
};

exports.find = function(id) {
  return Scrumboard.find(id);
};

exports.remove = function(id) {
  return Scrumboard.remove(id);
}
