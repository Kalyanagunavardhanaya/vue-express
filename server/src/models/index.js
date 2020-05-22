const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db={}


const database = config.db.database;
const user = config.db.user;
const password = config.db.password;
const options = config.db.options;
const dialect = process.env.DIALECT || 'sqlite'

const sequelize = new Sequelize({
    database,
    user,
    password,
    dialect,
    options
})

fs
.readdirSync(__dirname)
.filter((file)=>{
    return file !== 'index.js'
})
.forEach((file)=>{
    const model = sequelize.import(path.join(__dirname,file))
    db[model.name]=model
    
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db