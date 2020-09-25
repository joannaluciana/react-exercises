import React from 'react';
import StudentList from "./components/student-list/StudentList";
import './App.css';

// const divStyle = {
//     color: 'white',
// };
function App() {
    return (
        <div className="app" >
            <h1>Hello world!</h1>
            <h1 className='small'>Hello world!</h1>
            <StudentList/>
        </div>
    );
}

export default App;

