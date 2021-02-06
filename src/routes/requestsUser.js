const { Router } = require('express');
const router = Router();

// Importing token
const { verifyToken } = require('@token/verifyToken');

// Importing the functions
const { getUser, updateUser, deleteUser } = require('@controllers/requestsUserC');

// Method and its functions
router.get('/get_user', verifyToken, getUser);
router.put('/udpate_user', verifyToken, updateUser);
router.delete('/delete_user', verifyToken, deleteUser);

module.exports = router;