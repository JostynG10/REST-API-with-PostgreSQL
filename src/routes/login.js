const { Router } = require('express');
const router = Router();

// Importing the function
const { login } = require('@controllers/loginC');

// Method and its function
router.post('/', login);

module.exports = router;