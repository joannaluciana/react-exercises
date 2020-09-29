import React from "react";
import './Student.css';



const Student = (props) => {
    const studentName = props.studentName;
    const studentCoffees = props.studentCoffees;


    function LimitRange (x, min, max ) {
      return Math.min(Math.max(Math.round(x),min), max);
    }


    function getCoffeeClassName(coffees) {
      coffees = LimitRange(coffees, 0, 10);
      return 'coffee'+coffees;

    }

    const className = 'student'+' '+ getCoffeeClassName(studentCoffees);


    return (
        <tr className='student-row'>
            <td className='student-cell student-cell-padding'>
                <div className={className}>
                    {studentName}
                </div>
            </td>
            <td className='student-cell student-cell-padding student-cell-center'> {studentCoffees} </td>
        </tr>
    );
};

export default Student;