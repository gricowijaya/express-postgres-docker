const express = require('express');
const router = express.Router();
const controllers = require('../controllers/');

router.use(express.json());
router.get('/', controllers.index);
router.get('/add-data', controllers.addData);
router.get('/get-data', controllers.showData);

module.exports = router;
