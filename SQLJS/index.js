const Sql = require('./queries');
const sql = new Sql();

sql.connect();
sql.jobTitleMaxSalary('current_job_detail');
sql.disconnect();