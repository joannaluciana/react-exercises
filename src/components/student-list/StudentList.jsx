import React from "react";
import codeBrainersStudents from "../models/Students";
import Student from "./Student";

const StudentList = () => {
    debugger;

    return (
        <ul>
            {
                codeBrainersStudents.map((student, index) =>
                    <Student
                    key = { index }
                    studentName = {student.name}
                    studentCoffees = {student.coffees}
                    />
                )
            }
        </ul>
    );
};

export default StudentList;




