var user = require("../model/add_user");
var user_task = require("../model/task")

var username
exports.add_user = async (req, res) => {
    var data = await user.create(req.body)
    res.status(200).json({
        status: "User Created..!",
        data
    })
}

exports.login_user = async (req, res) => {
    var data = await user.find({ email: req.body.email });
    if (data.length == 1) {
        if (data[0].password == req.body.password) {
            username = data[0].name;
            var tasks = await user_task.find({ name: username });
            res.status(200).json({
                status: "User Login..!",
                username,
                tasks
            })
        }
        else {
            res.status(200).json({
                status: "Check Your Email And Password..!{1}"
            })
        }
    } else {
        res.status(200).json({
            status: "Check Your Email And Password..!{2}"
        })
    }
}

exports.find_user = async (req, res) => {
    var data = await user.find();
    res.status(200).json({
        status: "User Found..!",
        data: data
    })
}

// change task status by user 

exports.update_status = async (req, res) => {
    const taskId = req.body.id;
    const newStatus = req.body.status;
    const username = req.body.name;

    const task = await user_task.findById(taskId);
    if (!task) {
        res.status(200).json({
            status: "Task not found."
        });
        return;
    }

    if (task.name !== username) {
        res.status(200).json({
            status: "You are not authorized to update this task."
        });
        return;
    }

    task.status = newStatus;
    await task.save();

    res.status(200).json({
        status: "Task status updated successfully.",
        task
    });
}