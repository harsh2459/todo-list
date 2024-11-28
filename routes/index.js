var express = require('express');
var router = express.Router();
var data = require('../controller/admin_login')
var user = require('../controller/user_add')
var task = require('../controller/task');

// admin Login
router.post('/admin_create', data.admin_create)
router.post('/admin_login', data.admin_login)
router.get('/admin_find', data.get_admin)
router.get('/admin_logout', data.admin_logout)

//  user login
router.post('/user_create', user.add_user)
router.post('/user_login', user.login_user)

// user find
router.get('/user_find', user.find_user)

// user task add only by admin
router.post('/add_task', task.add_task)
router.get('/find_task', task.get_task)

// user task status update
router.post('/task_status', user.update_status)

    
module.exports = router;
