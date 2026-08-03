export async function getCourseById(id) {

    const response = await fetch(`http://localhost:8080/course/${id}`);

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }
    
    return await response.json();

}

export async function getAllCourses(size = 2, page = 0) {
    const response = await fetch(`http://localhost:8080/course/all?size=${size}&page=${page}`);

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return await response.json();
}