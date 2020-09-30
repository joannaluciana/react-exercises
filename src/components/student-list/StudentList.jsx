import React from "react";
import codeBrainersStudents from "../models/Students";
import Student from "../student/Student";
import './StudentList.css';


const StudentList = () => {


    return (


        <table className='student-list-table'>
            <thead>
            <tr >
                <th className='student-header student-cell-padding'> Student </th>
                <th className='student-header student-cell-padding'> Coffees </th>
            </tr>

            </thead>
          <tbody>
            {
                codeBrainersStudents.map(student =>
                    <Student
                    key = { student.id }
                    studentName = {student.name}
                    />
                )
            }
            </tbody>
        </table>
    );
};

export default StudentList;




