import { useEffect } from "react";
import { createCourse, fetchAllCourses } from "./CourseService.js";
import CreateCourse from "./CreateCourse.jsx";
import AllCourses from "./AllCourses.jsx";

export default function CoursePage() {

   async function handleCreateCourse(data) {
        try {
           await createCourse(data);
        } catch(error){
            throw new Error(error);
        }
    }

    async function handleFetchAllCourses(size, pageNum) {
        try {
            const data = await fetchAllCourses(size, pageNum);
            return data;
        } catch(error) {
            throw new Error(error);
        }
    }

    async function handleUpdateCourse(courseId, data) {
        try {
            const updatedData = await updateCourse(courseId, data);
            return updatedData;
        } catch(error) {
            throw new Error(error);
        }
    }
    

    return (
        <>
         <CreateCourse onCreate={handleCreateCourse}/>
        <AllCourses onFetchAll={handleFetchAllCourses}/>
        </>
    )

}