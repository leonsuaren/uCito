const express = require('express');
const router = express.Router();

const { createStates, getStates, getStateCities } = require('../controllers/states');

router.route('/').post(createStates);
router.route('/').get(getStates);
router.route('/search-state').post(getStateCities);

module.exports = router;