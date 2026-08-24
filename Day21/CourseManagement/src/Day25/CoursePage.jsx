import { useState } from "react";
import { createCourse, fetchAllCourses, updateCourse, deleteCourse } from "./CourseService.js";
import CreateCourse from "./CreateCourse.jsx";
import AllCourses from "./AllCourses.jsx";

export default function CoursePage() {

    const [refreshPage, setRefreshPage] = useState(0);

   async function handleCreateCourse(data) {
        try {
           await createCourse(data);
           setRefreshPage((prev) => prev + 1);
        } catch(error){
            throw error;
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

    async function handleDeleteCourse(courseId) {
        try {
            await deleteCourse(courseId);
        } catch(error) {
            throw new Error(error);
        }
    }
    

    return (
        <>
     
        <AllCourses onFetchAll={handleFetchAllCourses} 
                    onDelete={handleDeleteCourse} 
                    onRefreshPage={refreshPage}/>
        </>
    )

}