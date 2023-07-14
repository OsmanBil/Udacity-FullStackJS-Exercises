exports.up = function(db, callback) {
  const tableName = 'my_table';
  const sql = `
    CREATE TABLE ${tableName} (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      age INT
    );

    INSERT INTO ${tableName} (name, age) VALUES ('John Doe', 25);
    INSERT INTO ${tableName} (name, age) VALUES ('Jane Smith', 30);
  `;
  db.runSql(sql, callback);
};

exports.down = function(db, callback) {
  db.dropTable('my_table', callback);
};
