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

        <table className="table-auto border-separate border-spacing-y-2 w-full text-left bg-white">
            <thead>
                <tr>
                    <th className="p-3 font-semibold text-gray-400 text-sm">ID</th>
                    <th className="p-3 font-semibold text-gray-400 text-sm">Course Name</th>
                    <th className="p-3 font-semibold text-gray-400 text-sm">Unit</th>
                </tr>
            </thead>
            <tbody>
                {fullCourses.map((course) => (
                    <tr key={course.courseId} className="transition-colors duration-300 hover:bg-[#6EB582] border border-gray-300 border-[0.5px] rounded-md">
                        <td className="p-3 border border-r-0 border-gray-200 rounded-l-lg">{course.courseId}</td>
                        <td className="p-3 border-y border-gray-200">{course.courseName}</td>
                        <td className="p-3 border-y border-r border-gray-200 rounded-r-lg">{course.unit}</td>
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