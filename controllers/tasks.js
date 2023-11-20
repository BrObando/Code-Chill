const Task = require('../models/task');

module.exports = {
    create,
    new: newTask, 
    index, 
    show

}

// function create(req,res) {
//     console.log(req.body);

//     res.redirect('/tasks');
// }

async function create(req,res) {
    try {
        await Task.create(req.body);
        res.redirect('/tasks');
    } catch (err) {
        console.log(err);
        res.render('Tasks/new', { title: "New Tasks", errorMsg: err.message});
    }
}

function newTask(req, res) {
    res.render('tasks/new', { title: 'New Task' });
  }

  async function index(req,res) {
    try{
        const allTasks= await Task.find()
        res.render('tasks/index', { title: "All Tasks", tasks: allTasks})
    } catch (err) {
        console.log(err)
    }
}

async function show(req,res) {
    try {
    const Task = await Task.findById(req.params.id);
    res.render('tasks/show', { title: "Tasks Details", task});
    } catch (err) {
        console.log(err);
    }
}