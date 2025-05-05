const Sequelize = require('sequelize')
const sequelize = new Sequelize('node', 'alexandre', 'Alexa10!', {
    dialect: 'mysql',
    host: 'localhost' 
})

module.exports = sequelize