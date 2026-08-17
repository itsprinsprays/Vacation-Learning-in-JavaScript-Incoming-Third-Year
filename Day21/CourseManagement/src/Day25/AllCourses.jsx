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
        <div className="m-[10px]">

        <table className="w-full text-left bg-white">
            <thead>
                <tr>
                    <th className="border-b-2 p-3 font-semibold">ID</th>
                    <th className="border-r border-t">Course Name</th>
                    <th className="border-r border-t p-3 font-semibold">Unit</th>
                </tr>
            </thead>
            <tbody>
                {fullCourses.map((course) => (
                    <tr key={course.courseId} className="transition-colors duration-300 hover:bg-[gray]">
                        <td className="border-b p-3 rounded">{course.courseId}</td>
                        <td className="">{course.courseName}</td>
                        <td className="">{course.unit}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="flex justify-end m-[10px]">
        <button className="border rounded bg-[green] text-white p-[10px] m-[10px] transition-colors duration-300 hover:bg-[#6EB582]">Previous</button>
        <button className="border rounded bg-[green] text-white p-[10px] m-[10px] px-[23px]">Next</button>
        </div>
        </div>
           </>
    )

}