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

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert("Name : " + name + "\nCourse: " + course);
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
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            
            />

            <input
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                />

            <button>Submit</button>

            <h1>Name : {name}</h1>
            <h1>Course: {course}</h1>
        </form>
        
        </>
    );
}