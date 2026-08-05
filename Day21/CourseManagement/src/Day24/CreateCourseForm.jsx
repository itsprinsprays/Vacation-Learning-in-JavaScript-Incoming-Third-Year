import { useState } from "react";
import FormInputs from "./FormInputs.jsx";

export default function CreateCourseForm({ onCreate }) {

      const [formData, setFormData] = useState({
          "courseName": "",
          "unit": ""
      });


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
       <FormInputs formData={formData} setFormData={setFormData} /> 
       <button type="submit">Create Course</button>
        </form>
           
      )

  
}