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

export async function createCourse(course) {
    const response = await fetch(`http://localhost:8080/course/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(course)
    });

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return await response.json();
}

export async function updateCourse(id, course) {
    const response = await fetch(`http://localhost:8080/course/update/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(course)
    });

    if(!response.ok) {
        const errorMessage = response.json();
        throw new Error(errorMessage.message);
    }

    return await response.json();
}

export async function deleteCourse(id) {
    const response = await fetch (`http://localhost:8080/course/delete/${id}`, {
        method: "DELETE"
    });

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return await response.json();
}