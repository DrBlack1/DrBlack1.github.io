-- SELECT *
-- FROM employeedb.current_job_detail;
-- 
-- SELECT employee_id, job_title
-- FROM employeedb.current_job_detail;

-- SELECT *
-- FROM employeedb.current_job_detail
-- WHERE employeedb_id = 1000;
-- 
-- SELECT *
-- FROM employeedb.current_job_detail
-- WHERE job_title LIKE ('%evel%');

-- SELECT *
-- FROM employeedb.current_job_detail
-- WHERE job_title LIKE ('P_oduct Lead');
-- 
-- SELECT *
-- FROM employeedb.current_job_detail
-- WHERE job_title IN ('Product Lead', 'Markerting Lead');

-- CREATE TABLE 
-- my_favorite_employees (
-- employee_id int PRIMARY KEY,
-- job_title varchar(64));
-- 
-- SELECT * FROM employeedb.my_favorite_employees;
-- 
-- INSERT INTO employeedb.my_favorite_employees
-- SELECT employee_id,
-- job_title
-- FROM current_job_detail
-- WHERE employee_id in (1001, 1002)
-- 
-- SELECT *
-- FROM current_job_detail
-- INNER JOIN employeedb.employee_detail
-- ON employeedb.current_job_detail.employee_id = employeedb.employee_detail.employee_id

-- SELECT *
-- FROM employeedb.current_job_detail cjd
-- INNER JOIN employeedb.employee_detail ed
-- ON cjd.employee_id = ed.employee_id

-- SELECT cjd.employee_id
-- FROM current_job_detail cjd
-- INNER JOIN employee_detail ed
-- ON cjd.employee_id = ed.employee_id


SELECT job_title, MAX(salary)
FROM em,ployeedb.current_job_detail
GROUP BY job_title;


SELECT MAX(salary)
FROM employeedb.current_job_detail;


SELECT *
FROM employeedb.current_job_detail cjd
INNER JOIN employeedb.jobs_history jh
ON cjd.employee_id = jh.employee_id
AND cjd.job_title != jh.job_title;


SELECT *
FROM employeedb.current_job_detail cjd
INNER JOIN employeedb.jobs_history jh
ON cjd.employee_id = jh.employee_id
WHERE cjd.job_title = 'Developer'
AND jh.job_title != 'Developer'
-- WHERE cjd.job_title = 'Developer'
-- AND jh.job_title = 'Apprentice Developer'
;


SELECT * 
FROM employeedb.current_job_detail cjd
INNER JOIN employeedb.laptop_detail id
ON cjd.laptop_id = id.laptop_id
WHERE os = 'Mac'

