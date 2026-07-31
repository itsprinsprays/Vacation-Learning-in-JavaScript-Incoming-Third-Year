import { useState } from "react";

export default function Day22() {

  const [students, setStudents] = useState([
    { id: 1, name: "Prince", age: 21, course: "BSIT" },
    { id: 2, name: "John", age: 20, course: "BSCS"}
  ]);
  const [currentStudent, setCurrentStudent] = useState(null);

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

  function addStudent(e) {
    e.preventDefault();
    const newStudent = {
      id: students.length + 1,
      name: formData.name,
      age: formData.age,
      course: formData.course
    }

    setStudents([
      ...students,
      newStudent
    ]);

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

            <button onClick={()=> {
                setCurrentStudent(student)
            }}>Select</button>

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

      <form onSubmit={addStudent}>

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

        <button >Submit</button>




      </form>

    </>
  );

 
}