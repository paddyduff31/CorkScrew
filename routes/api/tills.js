const express =require('express');
const router = express.Router();

// @route     GET api/tills
// @desc      Test route
// @access    Public
router.get('/', (req, res) => res.send('tills route'));

module.exports = router;