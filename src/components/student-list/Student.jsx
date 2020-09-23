import React from "react";

const Student = (props) => {
    const studentName = props.studentName;
    const studentCoffees = props.studentCoffees;


    return (
        <tr>
            <td> { studentName} </td>
            <td> { studentCoffees} </td>
        </tr>
    );
};

export default Student;