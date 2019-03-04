const mysql = require('mysql');

class SQL {
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'doggy101',
            database : 'employeedb'
        });
    }

    select(table) {
        this.connection.query(`SELECT * FROM ${table}`, (error, results) => {
            if (error) throw error;
            // connected!
            console.log(results);
          });
    }

    jobTitleMaxSalary(table) {
        this.connection.query(
            `SELECT job_title, 
                    MAX(salary) 
                FROM ${table}
                GROUP BY job_title`, (error, results) => {
                if (error) throw error;
                console.log(results);
            })
    }

    getOS(table) {
        this.connection.query(`SELECT os FROM ${table}`, (error, results) => {
            if(error) throw error;
            console.log(results);
        });
    }

    connect() {
        this.connection.connect();
    }

    disconnect() {
        this.connection.end();
    }
}

module.exports = SQL;