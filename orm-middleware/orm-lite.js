var Sequelize = require('sequelize');

class Table{
  constructor(tableName, connectionString, columns){
    this.tableName = tableName;
    // create db connection
    this.sequelize = this.initiate(connectionString);
    // create table reference
    this.table = this.createTable(columns);
  }
  initiate(conn){
    console.log('Ready to Sequelize!');
    return new Sequelize(conn);
  }
  // create table where columns parameter is an object structured as {columnName: columnType}, where columnType is a Sequelize data type, i.e. {name: STRING} (datatype list reference http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types). We will need to process the values of the column object to be prefixed with Sequelize variable.
  createTable(cols){
    for(var key in cols){
      cols[key] = Sequelize[cols[key]]
    }
    // store the table object in the class properties, where this.table will represent the table instance, i.e. a table named 'hats' will be stored as this.hats
    return this.sequelize.define(this.tableName, cols);
  }
  // insert values in the table, where values is an object {columnName: value}, i.e. {name: 'Antonina'}
  insertIntoTable(values, callback){
    var tableRef = this.table;
    this.table.sync().then(function(){
      tableRef.create(values);
      callback();
    });
  }
  getAll(callback){
    this.table.findAll().then(function(rows) {
       var data = [];
       for(var i = 0; i < rows.length; i++) {
         data.push(rows[i].dataValues);
       }
       return callback(data);
    });
  }
  findById(id, callback){
    this.table.findAll({
      where: {
        id: id
      }
    }).then(function(rows) {
       var data = [];
       for(var i = 0; i < rows.length; i++) {
         data.push(rows[i].dataValues);
       }
       return callback(data);
    });
  }
}

// export Table class
module.exports = Table;
