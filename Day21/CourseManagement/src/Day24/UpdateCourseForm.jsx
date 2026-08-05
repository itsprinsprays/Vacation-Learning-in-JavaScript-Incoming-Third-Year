import { useState, useEffect } from "react";
import FormInputs from "./FormInputs";

export default function UpdateCourseForm({ onUpdate, course }) {

    const [formData, setFormData] = useState({
        "courseName": "",
        "unit": ""
    });

    useEffect(() => {
        if(!course) return;
        setFormData({
            courseName: course.courseName,
            unit: course.unit
        });
    }, [course]);

    async function handleSubmit(e) {
        e.preventDefault();

        await onUpdate(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInputs formData={formData} setFormData={setFormData} />
            <button type="submit">Update Course</button>

        </form>
    )

}