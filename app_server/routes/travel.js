const express = require('express');
const router = express.Router();

const controler = require('../controller/travel');

/* GET travel page. */

router.get('/',controller);

module.exports = router;