const Sequelize = require('sequelize');
const db = require('./db');

const Usuario = db.define('Usuario', {
    id_usuario: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true,
    },
    nome_usuario : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    senha : {
        type : Sequelize.STRING,
        allowNull : true
    },
    precisao : {
        type : Sequelize.FLOAT,
        allowNull : true
    },
    total_respondidas : {
        type : Sequelize.INTEGER,
        allowNull : true
    },
    total_certas : {
        type : Sequelize.INTEGER,
        allowNull : true
    },
    total_erradas : {
        type : Sequelize.INTEGER,
        allowNull : true
    }
});

Usuario.sync();

module.exports = Usuario;