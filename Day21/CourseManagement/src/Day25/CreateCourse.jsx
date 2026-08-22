import { useState } from "react";

export default function CreateCourse({ onCreate }) {

    const [course, setCourse] = useState({
        courseName: "",
        unit: ""
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        setSubmitting(true);
        try {
            await onCreate(course);
            setCourse({
                courseName: "",
                unit: ""
            });
            setErrors({});
        } catch (error) {
            setErrors({ form: error.message });
        } finally {
            setSubmitting(false);
        }
    }

    function handleChange(e) {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="bg-[#F2EEED] w-[400px] flex flex-col justify-center items-center p-6 border rounded m-[10px] shadow-2xl">
            <h1 className="text-[black] font-bold px-5 self-start">Create Course</h1>

            {errors.form && (
                <p className="text-red-500 text-sm self-start mb-2">{errors.form}</p>
            )}

            <input
                type="text"
                placeholder="Enter Course Name"
                value={course.courseName}
                name="courseName"
                onChange={handleChange}
                className="text-center mb-3 border rounded p-2 w-full"   
            />

            <input 
                type="number"
                placeholder="Enter Course Unit"
                value={course.unit}
                name="unit"
                onChange={handleChange}
                className="text-center mb-3 border rounded p-2 w-full"
            />

            <button
                type="submit"
                disabled={submitting}
                className="bg-[#60A5FA] self-end text-right border rounded px-[20px] py-[5px] transition-colors duration-300 hover:text-gray-100 hover:bg-[#1E40AF] disabled:opacity-50"
            >
                {submitting ? "Submitting..." : "Submit"}
            </button>

        </form>
        </>
    )
}