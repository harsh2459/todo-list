var task = require('../model/task')

exports.add_task = async (req, res) => {
    var data = await task.create(req.body)
    res.status(200).json({
        status: "task Created..!",
        data
    })
}

exports.get_task = async (req, res) => {
    var data = await task.find();
    res.status(200).json({
        status: "task Find ..!",
        data
    })
}
