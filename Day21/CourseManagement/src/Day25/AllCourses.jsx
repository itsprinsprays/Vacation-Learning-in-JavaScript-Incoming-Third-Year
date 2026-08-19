import { useState, useEffect } from "react";

export default function AllCourses({ onFetchAll }) {

    const [fullCourses, setFullCourses] = useState([]);
    const [size, setSize] = useState(5);
    const [page, setPage] = useState(0);
    const [able, setAble] = useState(true);
    const [openMenuId, setOpenMenuId] = useState(null);

    useEffect(() => {
        async function loadCourses() {
          const data =  await onFetchAll(size, page);
          setFullCourses(data.content || data);

        }
        loadCourses();
    }, [onFetchAll, size, page]);

    return(
        <>
        <div className="m-[10px] p-[100px] relative bg-[#E1EDE1] h-screen">
            <h1 className="text-black absolute top-[40px] text-4xl">Courses</h1>

        <table className="table-fixed border-separate border-spacing-y-1 w-full text-left ">
            <thead>
                <tr>
                    <th className="p-3 font-semibold text-gray-400 text-sm">ID</th>
                    <th className="p-3 font-semibold text-gray-400 text-sm">Course Name</th>
                    <th className="p-3 font-semibold text-gray-400 text-sm">Unit</th>
                </tr>
            </thead>
            <tbody>
                {fullCourses.map((course) => (
                    <tr key={course.courseId} className="transition-colors duration-300 hover:bg-[#6EB582] text-black">
                        <td className="p-3 border border-r-0 border-gray-300 rounded-l-lg">{course.courseId}</td>
                        <td className="p-3 border-y border-gray-300">{course.courseName}</td>
                        <td className="p-3 border-y border-gray-300 ">{course.unit}</td>
                     
<td className="p-3 border-y border-r border-gray-300 rounded-r-lg relative">
    <button
        onClick={() => setOpenMenuId(openMenuId === course.courseId ? null : course.courseId)}
        className="px-2 text-gray-400 hover:text-gray-600"
    >
        ⋯
    </button>

    {openMenuId === course.courseId && (
        <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Edit
            </button>
            <button className="block w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-100">
                Delete
            </button>
        </div>
    )}
</td>
                    </tr>
                ))}
            </tbody>
        </table>

            {fullCourses.length === 0 && <h1>Nothing follows...</h1> }

        <div className="flex justify-end m-[10px]">
        <button disabled={page === 0} className="border rounded bg-[green] text-white p-[10px] m-[10px] transition-colors duration-300 disabled:opacity-40 hover:bg-[#6EB582]" onClick={() => {
         
            const previousPage = page - 1;
            setPage(previousPage);

        }}>Previous</button>
        <button disabled={fullCourses.length === 0}className="border rounded bg-[green] text-white p-[10px] m-[10px] transition-colors duration-300 hover:bg-[#6EB582] px-[23px] disabled:opacity-40"  onClick={() => {
            const nextPage = page + 1;
            setPage(nextPage);

        }}> Next</button>
        </div>

        </div>
           </>
    )

}