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

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [course, setCourse] = useState("");
    const [show, setShow] = useState(false);

    return (
        <>

        <h1>{count}</h1>
        <h1>Name :{name}</h1>  
        <h1>Age : {age}</h1>    
        <h1>Course : {course}</h1>  


        
        <button onClick={() => {
            if(show === true) {
            const nextCount = count + 1;
            if(nextCount <= students.length) {
                setCount(nextCount)
                setName(students[nextCount - 1].name)
                setAge(students[nextCount - 1].age)
                setCourse(students[nextCount - 1].course)
            } else alert("No Student Ahead!");
        }
        }}> Increase</button>

        <button onClick ={() => {
            setShow(!show);
        }}>
             {show ? "Hide" : "Show"}</button>

    
        </>
    );
}