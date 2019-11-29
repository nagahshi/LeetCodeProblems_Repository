# Write your MySQL query statement below
select MAX(Salary) as "SecondHighestSalary" from Employee WHERE Salary < (select MAX(Salary) from Employee); 