async function createCourse(courseData) {

    try {

        const response = await fetch("http://localhost:8080/course/create", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(courseData)
        });

        if(!response.ok) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message)
        }

        return await response.json();


    } catch(error) {
        console.error(error);
        return null;
    }
}

async function getCourseById(courseId) {
    try {

        const response = await fetch (`http://localhost:8080/course/${courseId}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });

        if(!response.ok) {
            const error = await response.json();
            document.querySelector("#courseResult").innerHTML = error.message;
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error(error);
    }
}

async function getAllCourse(page = 0, size = 5) {
    try {
        const response = await fetch(`http://localhost:8080/course/all?page=${page}&size=${size}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });

        if(!response.ok) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }

        return await response.json();

    } catch(error) {
        console.error(error);
    }
}

async function deleteCourse(courseId) {
    try {
       
        const response = await fetch(`http://localhost:8080/course/delete/${courseId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });

        if(!response.ok) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }

        return await response.json();

    } catch(error) {
        console.error(error);
    }
}

async function updateCourseByid(courseId, updatedData) {
    try {

        const response = await fetch(`http://localhost:8080/course/update/${courseId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedData)
        });

        if(!response.ok) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }

        return await response.json();


    } catch (error) {
        console.error(error);
    }
}