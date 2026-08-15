import { createCourse } from "./CourseService.js";
import CreateCourse from "./CreateCourse.jsx"

export default function CoursePage() {

   async function handleCreateCourse(data) {
        try {
            await createCourse(data);
        } catch(error){
            throw new Error(error);
        }
    }

    return (
        <>
        <CreateCourse onCreate={handleCreateCourse}/>
        
        </>
    )

}