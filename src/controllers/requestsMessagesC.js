const Sequelize = require('sequelize')
const sequelize = require('@database/database');
const initModels = require('@models/init-models');
const models = initModels(sequelize);
const moment = require('moment');

// api/requests/messages/get_a_message
const getMessageById = async (req, res) => {
    const { id } = req.body
    try {
        const message = await models.messages.findOne({
            attributes: ['id', 'text', 'created_at', 'updated_at'],
            where: { id, user_id: decoded.id }
        });
        res.json({
            data: message
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

// api/requests/messages/get_random_message
const getRandomMessage = async (req, res) => {
    try {
        const messages = await models.messages.findOne({ 
            where: { user_id: decoded.id },
            order: [Sequelize.literal('random()')]
        });
        res.json({
            data: messages
        });
    } catch (error) {
        console.log(e);
    }
};

// api/requests/messages/get_messages
const getMessages = async (req, res) => {
    const messages = await models.messages.findAll({
        attributes: ['id', 'text', 'created_at', 'updated_at'],
        where: { user_id: decoded.id }
    });
    if (messages.length === 0) {
        res.status(404).json({
            message: "No messages"
        });
    } else {
        res.json({
            data: messages
        });
    };
};

// api/requests/messages/create_message
const createMessage = async (req, res) => {
    const { text } = req.body;
    try {
        const message = await models.messages.create({
            user_id: decoded.id,
            text,
            created_at: moment().format('YYYY/MM/DD')
        }, {
            fields: ['user_id', 'text', 'created_at']
        });
        res.json({
            message: 'Message created successfully',
            data: message
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong'
        });
    };
};

// api/requests/messages/update_message
const updateMessage = async (req, res) => {
    const { id, text } = req.body;
    const message = await models.messages.findOne({
        attributes: ['id', 'user_id', 'text', 'created_at', 'updated_at'],
        where: { id }
    });
    if ((message) && (message.user_id === decoded.id)) {
        await models.messages.update({
            text,
            updated_at: moment().format('YYYY/MM/DD')
        }, {
            where: { id, user_id: decoded.id }
        });
        res.json({
            message: 'Message update successfully',
        });
    } else {
        res.status(400).json({
            message: 'Wrong id'
        });
    }
};

// api/requests/messages/delete_message
const deleteMessage = async (req, res) => {
    const { id } = req.body;
    const message = await models.messages.findOne({
        attributes: ['id', 'user_id', 'text', 'created_at', 'updated_at'],
        where: { id }
    });
    if ((message) && (message.user_id === decoded.id)) {
        await models.messages.destroy({
            where: { id, user_id: decoded.id }
        });
        res.json({
            message: 'Message deleted successfully',
        });
    } else {
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

module.exports = {
    getMessageById,
    getRandomMessage,
    getMessages,
    createMessage,
    updateMessage,
    deleteMessage
};