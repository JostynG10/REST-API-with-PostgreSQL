const sequelize = require('@database/database');
const initModels = require('@models/init-models');
const models = initModels(sequelize);
const jwt = require('jsonwebtoken');
const config = require('@token/config');

// api/login
const login = async (req, res) => {
    const { email } = req.body;
    const user = await models.users.findOne({ 
        attributes: [ 'id', 'name', 'email' ], 
        where: { email } 
    });
    if (!user) {
        res.status(404).json({
            message: "Invalid email"
        });
    };
    const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 60 * 60 * 24
    });
    res.json({
        message: "Login successfully",
        user,
        token
    });
};

module.exports = {
    login
};