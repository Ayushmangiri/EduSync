import { useState } from 'react';
function StudentsForm({ addStudent }) {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
}

    const handleChange = (e) => {
       if(!name || !course) return;
       e.preventDefault();
       addStudent({ name, course });
       setName("");
       setCourse("");
    }
    return (
        <form onSubmit={handleChange}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Course:</label>
                <input
                    type="text"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
            </div>
            <button type="submit">Add Student</button>
        </form>
    );      
export default StudentsForm;