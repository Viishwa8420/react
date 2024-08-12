import { useState } from 'react';
import './styles.css';

function EmployeeCard({ employee }) {
    const {
        empid,
        empname,
        empemail,
        empphone,
        empaddress,
        empdeg,
        empsalary,
        empdepartment,
    } = employee;

    return (
        <div className="employee-card">
            <ul>
                <li><h2>{empname}</h2></li>
                <li> <p>ID: {empid}</p></li>
                <li> <p>Email: {empemail}</p></li>
                <li> <p>Phone: {empphone}</p></li>
                <li><p>Address:
                    <p>Country:{empaddress.country}</p>
                    <p>State:{empaddress.state}</p>
                    <p>City:{empaddress.city}</p>
                    <p>Area:{empaddress.area}</p>
                </p>
                </li>
                <li><p>Designation: {empdeg}</p></li>
                <li> <p>Salary: {empsalary}</p></li>
                <li> <p>Department: {empdepartment}</p></li>
            </ul>
        </div>
    );
}

export default EmployeeCard;
