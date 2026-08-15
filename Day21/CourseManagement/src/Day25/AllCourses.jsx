import { useState, useEffect } from "react";

export default function AllCourses({ onFetchAll }) {

    const [fullCourses, setFullCourses] = useState([]);
    const [size, setSize] = useState(2);
    const [page, setPage] = useState(0);

    useEffect(() => {
        async function loadCourses() {
          const data =  await onFetchAll(size, page);
          setFullCourses(data.content || data);
        }
        loadCourses();
    }, [onFetchAll]);

    return(
        <>

        <table className="border">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Course Name</th>
                    <th>Unit</th>
                </tr>
            </thead>
            <tbody>
                {fullCourses.map((course) => (
                    <tr key={course.courseId}>
                        <td>{course.courseId}</td>
                        <td>{course.courseName}</td>
                        <td>{course.unit}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        </>
    )

}