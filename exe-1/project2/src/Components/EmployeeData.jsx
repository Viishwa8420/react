import { useState } from 'react';
import './styles.css';
import EmployeeCard from './EmployeeCard'; 

const employeeData = [
    {
        empid : 1,
        empname : "Jack",
        empemail : "jack@gmail.com",
        empphone : 12345,
        empaddress : {
            country : "india",
            state : "gujarat",
            city : "surat",
            area : "motavarachha"
        },
        empdeg : "junior",
        empsalary : 23000,
        empdepartment : "ui/ux"
    },
    {
        empid : 2,
        empname : "Jacob",
        empemail : "jacob@gmail.com",
        empphone : 2121,
        empaddress : {
            country : "india",
            state : "rajasthan",
            city : "jaypur",
            area : "jaypurabc"
        },
        empdeg : "junior",
        empsalary : 21000,
        empdepartment : "web design"
    },
    {
        empid : 3,
        empname : "Leo",
        empemail : "leo@gmail.com",
        empphone : 2212,
        empaddress : {
            country : "india",
            state : "maharashtra",
            city : "pune",
            area : "abcpune"
        },
        empdeg : "seniour",
        empsalary : 65000,
        empdepartment : "backend developer"
    },
    {
        empid : 4,
        empname : "Caleb",
        empemail : "caleb@gmail.com",
        empphone : 212112,
        empaddress : {
            country : "india",
            state : "karnatak",
            city : "bengaluru",
            area : "kgf"
        },
        empdeg : "tl",
        empsalary : 150000,
        empdepartment : "frontend developer"
    }
];

function EmployeeData() {
  return (
    <div className="employee-data-container">
      {employeeData.map((employee) => (
        <EmployeeCard key={employee.empid} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeData;
