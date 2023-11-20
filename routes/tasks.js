var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const tasksCtrl = require("../controllers/tasks")

router.post('/', tasksCtrl.create);
router.get('/new', tasksCtrl.new);
router.get('/:id', tasksCtrl.show);
router.get('/', tasksCtrl.index);


module.exports = router;
