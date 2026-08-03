import { useState, useEffect} from "react";
import { getCourseById } from "./CourseService.js";
import CourseDetails from "./CourseDetails.jsx";
import CourseInput from "./CourseInput.jsx";

export default function CoursePage() {
    const [course, setCourse] = useState(null);
    const [courseId, setCourseId] = useState("");
    const [error, setError] = useState("");


        async function fetchCourseById() {
            try {

                const data = await getCourseById(courseId);
                setCourse(data);

            } catch(error) {
                console.error("Error fetching course data:", error);
                setError(error.message);
            }
        }



    return (
         <div>
            <h1>Course Page</h1>
            <CourseInput
                courseId={courseId}
                setCourseId={setCourseId}
                onFetch={fetchCourseById}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}
            {course ? <CourseDetails course={course} /> : <p>No course loaded yet</p>}
        </div>
    );
}
