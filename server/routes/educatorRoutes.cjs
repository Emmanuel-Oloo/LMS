const express = require('express')

const educatorController = require('../controllers/educatorContoller.cjs');

const educatorRouter = express.Router()

// Add Educator Role
educatorRouter.get('/update-role', educatorController.updateRoleToEducator)

module.exports = educatorRouter