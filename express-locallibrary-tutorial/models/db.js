const {Sequelize} = require('sequelize');


module.exports = new Sequelize(
    "node_test_telega",
    "root_node_",
    'C\!jL\.t2WE\#zYxB\@',
    {
        dialect: "mysql",
        host: "127.0.0.1",
        port:'3306'
    }
);