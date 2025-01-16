const express = require('express');
const router = express.Router();
const {saveTravelAgentData,verifyTIN} = require('../controllers/generalController');



router.post('/verificationTIN',verifyTIN)  
router.post('/save-travel-agent-data',saveTravelAgentData)


module.exports = router;