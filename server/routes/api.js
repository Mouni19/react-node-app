const express = require('express')
const {ListUser, AddUser, DeleteUser} = require("../controller/user-controller");
const router = express.Router();

router.get('/users', ListUser)
router.post('/adduser', AddUser)
router.post('/deleteuser', DeleteUser)

module.exports = router;
