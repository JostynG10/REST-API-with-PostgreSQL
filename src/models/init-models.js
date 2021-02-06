var DataTypes = require("sequelize").DataTypes;
var _messages = require("./messages");
var _users = require("./users");

function initModels(sequelize) {
  var messages = _messages(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  messages.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(messages, { foreignKey: "user_id"});

  return {
    messages,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
