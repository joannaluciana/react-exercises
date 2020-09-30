import React from 'react';
import StudentList from "./components/student-list/StudentList";
import './App.css';
import StudentListRandomizeButton from "./components/student-list-button/StudentListRandomizeButton";
import StudentListSortButton from "./components/student-list-button/StudentListSortButton";

// const divStyle = {
//     color: 'white',
// };
function App() {
    return (
        <div className="app" >
          <div className= 'd-flex'>

            <div>
            <h3>List of students:</h3>

          <div className="d-flex student-lists-container">

            <StudentList/>
            <StudentList/>
            </div>
            </div>
            <div className='student-actions'>
          <h3>
              Actions to perform:
              </h3>
            <div className='d-flex student-list-buttons'>


              <StudentListRandomizeButton/>
              <StudentListSortButton/>
              </div>

            </div>

            </div>
  </div>

    );
}

export default App;

