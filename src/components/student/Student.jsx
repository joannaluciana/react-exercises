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
        <tr>
            <td>
                <div className={className}>
                    {studentName}
                </div>
            </td>
            <td> {studentCoffees} </td>
        </tr>
    );
};

export default Student;