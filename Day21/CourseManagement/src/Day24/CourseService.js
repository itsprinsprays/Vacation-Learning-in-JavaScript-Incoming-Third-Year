export async function getCourseById(id) {

    const response = await fetch(`http://localhost:8080/course/${id}`);

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }
    
    return await response.json();

}

export async function getAllCourses() {
    const response = await fetch(`http://localhost:8080/course/all`);

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return await response.json();
}