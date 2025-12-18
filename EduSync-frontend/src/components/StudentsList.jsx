function StudentsList(){

    const students = [
        { id: 1, name: "Alice Johnson", age: 20, major: "Computer Science" },
        { id: 2, name: "Bob Smith", age: 22, major: "Mathematics" },
        { id: 3, name: "Charlie Brown", age: 21, major: "Physics" },
    ];

    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                    {student.name} -  {student.major}
                    <button onClick={() => deleteStudent(student.id)}>
                        Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentsList;