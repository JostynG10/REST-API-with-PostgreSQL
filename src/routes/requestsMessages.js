const { Router } = require('express');
const router = Router();

// Importing token
const { verifyToken } = require('@token/verifyToken');

// Importing the functions
const { getMessageById, getRandomMessage, getMessages, createMessage, updateMessage, deleteMessage } = require('@controllers/requestsMessagesC');

// Method and its functions
router.get('/get_a_message', verifyToken, getMessageById);
router.get('/get_messages', verifyToken, getMessages);
router.post('/create_message', verifyToken, createMessage);
router.put('/update_message', verifyToken, updateMessage);
router.delete('/delete_message', verifyToken, deleteMessage);
router.get('/get_random_message', verifyToken, getRandomMessage);


module.exports = router;