const express =require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route     GET api/tills
// @desc      Test route
// @access    Public
router.get('/tills', (req, res) => res.send('tills route'));

module.exports = router;