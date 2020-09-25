import React from "react";
import './Student.css';

const Student = (props) => {
    const studentName = props.studentName;
    const studentCoffees = props.studentCoffees;
    const divStyle = {
    paddingLeft: studentCoffees + 'em',
};


    return (
        <tr>
            <td>
                <div className='student' style = {divStyle}>
                { studentName}
            </div>
            </td>
            <td> { studentCoffees} </td>
        </tr>
    );
};

export default Student;