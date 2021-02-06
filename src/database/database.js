const Sequelize = require('sequelize');

// Connection to the database
const sequelize = new Sequelize('postgres', 'postgres', '1007944103',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database :', err);
    });

module.exports = sequelize;