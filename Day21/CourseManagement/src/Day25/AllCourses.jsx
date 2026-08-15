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
        <div className="m-[10px] ">

        <table className="border-collapse rounded bg-[#EBE1E1] w-full text-center">
            <thead>
                <tr>
                    <th className="border">ID</th>
                    <th className="border">Course Name</th>
                    <th className="border">Unit</th>
                </tr>
            </thead>
            <tbody>
                {fullCourses.map((course) => (
                    <tr key={course.courseId} className="transition-colors duration-300 hover:bg-[gray]">
                        <td className="border ">{course.courseId}</td>
                        <td className="border">{course.courseName}</td>
                        <td className="border">{course.unit}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
           <h2>hello</h2>
           </>
    )

}