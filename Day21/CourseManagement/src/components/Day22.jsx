import { useState } from "react";

export default function Day22() {

  const students = [
    { id: 1, name: "Prince", age: 21, course: "BSIT" },
    { id: 2, name: "John", age: 20, course: "BSCS"}
  ];

  const [currentStudent, setCurrentStudent] = useState(null);

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

    </>
  );

 
}