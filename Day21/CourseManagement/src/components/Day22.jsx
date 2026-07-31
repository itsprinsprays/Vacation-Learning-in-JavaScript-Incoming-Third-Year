import { useState } from "react";

export default function Day22() {

  const [students, setStudents] = useState([
    { id: 1, name: "Prince", age: 21, course: "BSIT" },
    { id: 2, name: "John", age: 20, course: "BSCS"}
  ]);
  const [currentStudent, setCurrentStudent] = useState(null);

  const [formData, setFormData] = useState({
       id: "",
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
      id: formData.id,
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
       id: "",
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
          placeholder="Enter Id"
          name="id"
          value={formData.id}
          onChange={handleChanges}
        />

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