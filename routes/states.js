const express = require('express');
const router = express.Router();

const { createStates, getStates, getOneState } = require('../controllers/states');

router.route('/').post(createStates);
router.route('/').get(getStates);
router.route('/search-state').post(getOneState);

module.exports = router;