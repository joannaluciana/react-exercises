import React from "react";
import './Student.css';

const Student = (props) => {
    const studentName = props.studentName;
    const studentCoffees = props.studentCoffees;

    function getBackgroundColor(studentCoffees) {
      const g = 100;
      const b = 200;
      const r = studentCoffees * 25.5;

      const backgroundColor = 'rgb ($ {r}, $ {g}, $ {b})';
      return backgroundColor;

    }

    const divStyle = {
        paddingLeft: studentCoffees + 'em',
        backgroundColor: getBackgroundColor(studentCoffees),
    };


    return (
        <tr>
            <td>
                <div className='student' style={divStyle}>
                    {studentName}
                </div>
            </td>
            <td> {studentCoffees} </td>
        </tr>
    );
};

export default Student;