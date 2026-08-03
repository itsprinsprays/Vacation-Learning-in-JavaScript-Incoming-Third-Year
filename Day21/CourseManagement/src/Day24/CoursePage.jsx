import { useState, useEffect} from "react";
import { getCourseById } from "./CourseService.js";
import CourseDetails from "./CourseDetails.jsx";

export default function CoursePage() {
    const [course, setCourse] = useState(null);

    useEffect(() => {
        async function fetchCourseById() {
            try {

                const data = await getCourseById(3);
                setCourse(data);

            } catch(error) {
                console.error("Error fetching course data:", error);
            }
        }
        fetchCourseById();
    }, []);

    if(!course) {
        return <h1>Loading...</h1>
    }

    return <CourseDetails course={course} />
}
