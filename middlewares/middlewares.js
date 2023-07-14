const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/login', controller.login);
router.get('/authication', controller.authication);
router.get('/token', controller.token);
router.get('/status', controller.status);
router.get('/search', controller.search);

module.exports = router;