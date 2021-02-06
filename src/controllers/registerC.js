const sequelize = require('@database/database');
const initModels = require('@models/init-models');
const models = initModels(sequelize);
const jwt = require('jsonwebtoken');
const config = require('@token/config');
const moment = require('moment');

// api/register
const register = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await models.users.create({
            name,
            email,
            created_at: moment().format('YYYY/MM/DD')
        }, {
            fields: ['name', 'email', 'created_at']
        });
        const token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 60 * 60 * 24
        });
        res.json({
            message: 'Successfully registered user',
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

module.exports = {
    register
};