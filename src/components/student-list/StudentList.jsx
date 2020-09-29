import React from "react";
import codeBrainersStudents from "../models/Students";
import Student from "../student/Student";
import './StudentList.css';


const StudentList = () => {
    console.log(codeBrainersStudents);

    return (


        <table className='student-list-table'>
            <thead>
            <tr>
                <th className='student-header'> Student </th>
                <th className='name-header'> Coffees </th>
            </tr>

            </thead>
            {
                codeBrainersStudents.map((student, index) =>
                    <Student
                    key = { index }
                    studentName = {student.name}
                    studentCoffees = {student.coffees}
                    />
                )
            }
        </table>
    );
};

export default StudentList;




