import React from "react";
import codeBrainersStudents from "../models/Students";
import Student from "./Student";

const StudentList = () => {
    console.log(codeBrainersStudents);

    return (


        <table>
            <thead>
            <tr>
                <td> Student </td>
                <td> Coffees </td>
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




