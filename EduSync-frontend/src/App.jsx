import StudentsForm from "./components/StudentsForm";
import { useState } from "react";
import StudentsList from "./components/StudentsList";
function App() {
const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", age: 20, major: "Computer Science" },
    { id: 2, name: "Bob Smith", age: 22, major: "Mathematics" },
    { id: 3, name: "Charlie Brown", age: 21, major: "Physics" },
]);
 const addStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
};  
const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
};
return (
    <div>
        <h1>EduSync</h1>
        <StudentsForm students={students} setStudents={setStudents} />
        <StudentsList students={students} />
    </div>
);
}

export default App;