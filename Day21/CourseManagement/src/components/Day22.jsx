import { useState } from "react";

export default function Day22() {

  const [students, setStudents] = useState([
    { id: 1, name: "Prince", age: 21, course: "BSIT" },
    { id: 2, name: "John", age: 20, course: "BSCS"}
  ]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
       name: "",
       age: "",
       course: ""
  });

  function handleChanges(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newStudent = {
      id: students.length + 1,
      name: formData.name,
      age: formData.age,
      course: formData.course
    }

    if (editingId === null) {

    setStudents([
      ...students,
      newStudent
    ]);

  } else {
    setStudents(students.map(student => {
      if (student.id === editingId) {
        return { ...student, ...formData };
      }
      return student;
    }));
  }

    alert("Added Succesfully");
    setFormData({
       name: "",
       age: "",
       course: ""
    })
  }



  return(
    <>
      {students.map(student => (
        <div key={student.id}>
            <h2>Name: {student.name}</h2>
            <h2>Age: {student.age}</h2>
            <h2>Course: {student.course}</h2>

            <button onClick={()=> {
                setCurrentStudent(student)
            }}>Select</button>

            <button onClick={() => {
                setEditingId(student.id);
                setFormData({
                  name: student.name,
                  age: student.age,
                  course: student.course
                });
            }}>Edit</button>

            <button onClick={() => {
          
                setStudents(students.filter(s => s.id !== student.id));
            }}>Delete</button>

    
        </div>  
      )
      
      )}

        {currentStudent && (
                  <>
        <h1>
          You Selected: {currentStudent.name} ({currentStudent.age}, {currentStudent.course})
        </h1>
             <button onClick={() => {
              setCurrentStudent(null);
            }}>Unselect</button>
            </>
      )

      
      }

      <form onSubmit={handleSubmit}>

        <input 
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChanges}
        />

        <input
           placeholder="Enter Age"
           name="age"
           value={formData.age}
           onChange={handleChanges}
        />

        <input
          placeholder="Enter Course"
          name="course"
          value={formData.course}
          onChange={handleChanges}
        />

        <button >
          {editingId ? "Update" : "Add"} Student
        </button>




      </form>

    </>
  );

 
}