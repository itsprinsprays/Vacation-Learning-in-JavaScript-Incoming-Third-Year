import { useState } from "react";

export default function CreateCourseForm({ onCreate }) {

      const [formData, setFormData] = useState({
          "courseName": "",
          "unit": ""
      });

      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }

     async function handleSubmit(e) {
        e.preventDefault();

        await onCreate(formData);

        setFormData({
          "courseName": "",
          "unit": ""
        })
      }

      return (
        <form onSubmit={handleSubmit}>

          <input 
            type="text"
            placeholder="Course Name"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            />

          <input 
            type="number"
            placeholder="Unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            />

            <button type="submit">Create Course</button>
        </form>
      )

  
}