import { useState } from "react";

export default function CreateCourse({ onCreate }) {

    const [course, setCourse] = useState({
        "courseName": "",
        "unit": ""
    });

    function handleSubmit(e) {
        e.preventDefault();

        onCreate(course);

        setCourse({
            "courseName": "",
            "unit": ""
        });
    }

    function handleChange(e) {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter Course Name"
                value={course.courseName}
                name="courseName"
                onChange={handleChange}
            />

            <input 
                type="number"
                placeholder="Enter Course Unit"
                value={course.unit}
                name="unit"
                onChange={handleChange}
            />

        <button type="submit">Submit</button>
        

        </form>
        
        </>
    )
}