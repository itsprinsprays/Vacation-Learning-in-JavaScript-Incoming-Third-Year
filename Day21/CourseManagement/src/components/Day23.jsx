import { useState, useEffect } from "react";

export default function Day23() {

    const [course, setCourse] = useState(null);

    useEffect(() => {
        async function getCourse() {
            try {
                const response = await fetch("http://localhost:8080/course/2");
                const data = await response.json();
                setCourse(data);
            } catch (error) {
                console.error("Error fetching course data:", error)
            }
        }
        getCourse();
    }, []);

    return (
        <>
    <h1>Course: {course.courseName}</h1>
    <h1>Unit: {course.unit}</h1>
    </>
    )

}