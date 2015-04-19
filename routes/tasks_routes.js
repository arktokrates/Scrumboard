const
  express = require('express'),
  router = express.Router(),
  task = require('../models/task_model');


router.param('task_id', function(req, res, next, id) {
    req.task_item = task.find(id);
    next();
});


router.route('/').
    get(function(req, res, next) {
      res.render('index', { title: 'Scrum Board' });
      var all_tasks = task.getAllEntries();
      //res.setHeader('Content-Type', 'application/json');
		  res.end(JSON.stringify(all_tasks));
    }).

   post(function(req, res, next) {
      var newTask = task.create(req.body);
      console.log(newTask);
      //res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(req.task_item));
      //console.log(task_item);
  }).

    put(function(req, res, next) {
      task.create(req.body);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(req.task_item));
    });

router.route('/:task_id').
  get(function(req, res, next) {
    res.send( req.card_item);
  }).
  
  put(function(req, res, next) {
    task.update(req.params.task_id, req.body);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.task_item));
  }).

  delete(function(req, res, next) {
    task.remove(req.task_item.id);
    res.send();
  });

module.exports = router;