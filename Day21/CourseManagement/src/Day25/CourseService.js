export async function createCourse(data) {
    const response = await fetch("http://localhost:8080/course/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return await response.json();
}

export async function fetchAllCourses(size = 2, pageNum = 0) {
    const response = await fetch(`http://localhost:8080/course/all?size=${size}&page=${pageNum}`)

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return await response.json();
}