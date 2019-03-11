const Sql = require('./queries');

const sql = new Sql(); 

sql.connect();
sql.select("Name, date_of_birth, gender", "employee_detail");
sql.update("Name", "employee_detail", "Warren")
sql.end();