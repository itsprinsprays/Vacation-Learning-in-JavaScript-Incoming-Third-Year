import { useState } from "react";

export default function Counter() {

    const students = [
        {
            name: "Prince", age: 21, course: "BSIT"
        },
        {
            name: "John", age: 20, course: "BSCS"
        },
        {
            name: "Maria", age: 22, course: "BSIS"
        }
    ];

    const colors = ["Red","Blue", "Green", "Yellow", "Purple"
];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [color, setColor] = useState("")

    const currentStudent = students[currentIndex];

    const [formData, setFormData] = useState({
        name: "",
        course: "",
        age: "",
        email: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        alert (`Name: ${formData.name} \nCourse: ${formData.course} \nAge: ${formData.age} \nEmail: ${formData.email}`);

               setFormData({
                    name: "",
                    course: "",
                    age: "",
                    email: ""
                });
    }

    function handleChanges(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }




    return (
        <>
        
        <h1>{currentIndex}</h1>
        <h1>Name: {currentStudent.name}</h1>
        <h1>Age: {currentStudent.age}</h1>
        <h1>Course: {currentStudent.course}</h1>


        
        <button onClick={() => {
            if(show) {
            const nextCount = currentIndex + 1;
                if(nextCount < students.length) {
                    setCurrentIndex(nextCount)
                    setColor(colors[nextCount])
                } else {
                    alert("No Student Ahead!");
                }
        }
        }}> Increase</button>

        <button onClick ={() => {
            setShow(!show);
        }}>
             {show ? "Hide" : "Show"}</button>

        <form onSubmit={handleSubmit}>
            
            <input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => 
                    setFormData({
                        ...formData,
                        name: e.target.value
                    })
                }
            />

            <input 
                placeholder="Course"
                value={formData.course}
                onChange={(e) => 
                    setFormData({
                        ...formData,
                        course: e.target.value
                    })
                }
                />

            <input
                placeholder="Age"
                name="age"
                value={formData.age}
                onChange={handleChanges}
            />

            <input 
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChanges}
            />

                <button>Submit</button>

                <h2>{formData.name}</h2>
                <h2>{formData.course}</h2>
                <h2>{formData.age}</h2>
                <h2>{formData.email}</h2>
        </form>
        
        </>
    );
}