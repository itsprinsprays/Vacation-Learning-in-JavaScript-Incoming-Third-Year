import { useState, useEffect} from "react";
import { getCourseById, getAllCourses, createCourse, updateCourse, deleteCourse } from "./CourseService.js";
import CourseDetails from "./CourseDetails.jsx";
import CourseInput from "./CourseInput.jsx";
import CreateCourseForm from "./CreateCourseForm.jsx"
import UpdateCourseForm from "./UpdateCourseForm.jsx";

export default function CoursePage() {
    const [course, setCourse] = useState(null);
    const [courseId, setCourseId] = useState("");
    const [error, setError] = useState("");
    const [allCourses, setAllCourses] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(2);
    const [editId, setEditId] = useState(0);


    async function handleCreateCourse(formData) {
        try {
            await createCourse(formData);
            fetchAllCourses(page);
        } catch(error) {
            console.error("Error creating course:", error);
            setError(error.message);
        }
    }

    async function handleUpdateCourse(formData) {
        try {
            await updateCourse(editId, formData);
            fetchAllCourses(page);
        } catch(error) {
            console.error("Error updating course:", error);
            setError(error.message);
        }
    }

    async function handleDeleteCourse(id) {
        try {
            await deleteCourse(id);
            fetchAllCourses(page);
        } catch(error) {
            console.error("Error Deleting Course", error);
            setError(error.message);
        }
    }

        async function fetchCourseById() {
            try {

                const data = await getCourseById(courseId);
                setCourse(data);

            } catch(error) {
                console.error("Error fetching course data:", error);
                setError(error.message);
            }
        }

        async function fetchAllCourses(pageNum) {
            try {
                const data = await getAllCourses(size, pageNum);
                      setAllCourses(data.content || data);
            } catch(error) {
                console.error("Error fetching all courses:", error);
                setError(error.message);
            }
        }

        useEffect(() => {
            fetchAllCourses(page);
        }, [page]);

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
                            <th colSpan={2}>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCourses.map(course => (
                            <tr key={course.courseId}>
                                <td>{course.courseId}</td>
                                <td>{course.courseName}</td>
                                <td>{course.unit}</td>
                                <td>
                                    <button onClick={() => {
                                        setEditId(course.courseId);
                                    }}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        handleDeleteCourse(course.courseId);
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                        

            </div>

                        <button
                onClick={() => {
                    const newPage = page - 1;
                    setPage(newPage);
                    fetchAllCourses(newPage);
                }}
                disabled={page === 0}
            >
                Previous
            </button>

            <button
                onClick={() => {
                    const newPage = page + 1;
                    setPage(newPage);
                    fetchAllCourses(newPage);
                }}
            >
                Next
            </button>

            <CreateCourseForm onCreate={handleCreateCourse} />
            <UpdateCourseForm course={course} onUpdate={handleUpdateCourse} />
                  
                    </>
                );
}
