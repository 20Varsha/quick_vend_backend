const express = require('express');
const router = express.Router()
const health=require('../route/health')

router.use('/api/health_check', health)

module.exports=router

