const express = require('express');
const router = express.Router();
const Control = require('../Controller/User.js');

router.post('/signup', Control.postSignup);
router.post('/login', Control.postLogin);
router.get('/',Control.getUserInfo);
module.exports = router;
