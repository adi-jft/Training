module.exports=(sequelize,Sequelize)=>{
    var table=sequelize.define("emp_table", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        job: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.INTEGER
        }
    });
    return table;
};