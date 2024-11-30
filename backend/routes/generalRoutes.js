const express = require('express');
const router = express.Router();
const {saveTravelAgentData,getTravelAgentData} = require('../controllers/generalController');



router.get('/save-travel-agent-data',getTravelAgentData)  
router.post('/save-travel-agent-data',saveTravelAgentData)


module.exports = router;