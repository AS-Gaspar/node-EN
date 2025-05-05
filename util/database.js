const Sequelize = require('sequelize')
const sequelize = new Sequelize('node', 'alexandre', 'Alexa10!', {
    dialect: 'mariadb',
    host: 'localhost' 
})

module.exports = sequelize