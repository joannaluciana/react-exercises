import React from "react";

const Student = (props) => {
    const studentName = props.studentName;
    const studentCoffees = props.studentCoffees;
    return (
        <li>
            { studentName}
            { studentCoffees}
        </li>
    );
};

export default Student;