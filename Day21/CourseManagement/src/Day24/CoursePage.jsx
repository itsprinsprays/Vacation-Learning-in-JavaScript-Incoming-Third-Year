import { useState, useEffect} from "react";
import { getCourseById, getAllCourses } from "./CourseService.js";
import CourseDetails from "./CourseDetails.jsx";
import CourseInput from "./CourseInput.jsx";

export default function CoursePage() {
    const [course, setCourse] = useState(null);
    const [courseId, setCourseId] = useState("");
    const [error, setError] = useState("");
    const [allCourses, setAllCourses] = useState([]);


        async function fetchCourseById() {
            try {

                const data = await getCourseById(courseId);
                setCourse(data);

            } catch(error) {
                console.error("Error fetching course data:", error);
                setError(error.message);
            }
        }

        async function fetchAllCourses() {
            try {
                const data = await getAllCourses();
                      setAllCourses(data.content || data);
            } catch(error) {
                console.error("Error fetching all courses:", error);
                setError(error.message);
            }
        }

        useEffect(() => {
            fetchAllCourses();
        }, []);

    return (
        <>
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
            <div>
  <h1>All Courses</h1>

</div>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCourses.map(course => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.courseName}</td>
                                <td>{course.unit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
