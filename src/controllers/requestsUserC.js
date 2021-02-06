const sequelize = require('@database/database');
const initModels = require('@models/init-models');
const models = initModels(sequelize);
const moment = require('moment');

// api/requests/user/get_user
const getUser = async (req, res) => {
    try {
        const user = await models.users.findOne({
            attributes: ['id', 'name', 'email', 'created_at', 'updated_at'],
            where: { id: decoded.id }
        });
        res.json({
            data: user
        });
    } catch (e) {
        console.log(e);
    }
};

// api/requests/user/update_user
const updateUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        await models.users.update({
            name,
            email,
            updated_at: moment().format('YYYY/MM/DD')
        }, {
            where: { id: decoded.id }
        });
        res.json({
            message: 'User update successfully',
        });
    } catch (error) {
        res.status(400).json({
            message: 'Something goes wrong'
        });
    };
};

// api/requests/user/delete_user
const deleteUser = async (req, res) => {
    try {
        await models.users.destroy({
            where: { id: decoded.id }
        });
        res.json({
            message: 'User deleted successfully',
        });
    } catch (error) {
        res.status(400).json({
            message: 'Wrong id'
        });
    };
};

module.exports = {
    getUser,
    updateUser,
    deleteUser
};