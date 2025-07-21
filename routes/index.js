var express = require('express');
var router = express.Router();

const todos = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {todos});
});


/* Add Button */

router.post('/add', function(req, res) {
  const newTodo = req.body.todo;
  if(newTodo){
    todos.push(newTodo);
  }
  res.redirect('/');
}); 

module.exports = router;
