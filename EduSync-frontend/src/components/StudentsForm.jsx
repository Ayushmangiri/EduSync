import { useState } from 'react';
function StudentsForm({ addStudent }) {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");

    const handleChange = (e) => {
       if(!name || !course) return;
       addStudent({
        id: Date.now(),

        name, course });
       setName("");
       setCourse("");
    }
    return (
        <div>
            <h2>Add Student</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />
            <button onClick={handleChange}>Add Student</button>
        </div>
    );
}
export default StudentsForm;