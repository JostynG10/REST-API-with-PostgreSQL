const { Router } = require('express');
const router = Router();

// Importing the function
const { register } = require('@controllers/registerC');

// Method and its function
router.post('/', register);

module.exports = router;