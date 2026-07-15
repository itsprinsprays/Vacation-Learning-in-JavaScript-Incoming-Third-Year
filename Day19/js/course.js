async function handleCreateCourse(event) {
    event.preventDefault();

    const course = {
        courseName: document.querySelector("#courseName").value,
        unit: document.querySelector("#unit").value
    };

    try { 

        const createdCourse = await createCourse(course);

        console.log(createdCourse);

        alert("Course Created Succesfully");

        loadCourses();

        event.target.reset();


    } catch(error) {
        alert(error.message);
    }
}

async function searchCourseById(event) {
    event.preventDefault();

    const id = document.querySelector("#courseId").value;

    const course = await getCourseById(id);

    if(course) {
        document.querySelector("#courseResult").innerHTML = 
        `Course: ${course.courseName}, Units: ${course.unit}`;
    } 

    event.target.reset();
}


async function loadCourses() {
    const tableBody = document.querySelector("#courseTableBody");

    try {
        const page = await getAllCourse();

        tableBody.innerHTML = "";

        page.content.forEach(course => {
            tableBody.innerHTML += `
            <tr>
                <td>${course.courseId}</td>
                <td>${course.courseName}</td>
                <td>${course.unit}</td>
            </tr>
                `;
        });

    } catch(error) {
    console.error(error);
    }
}

async function deleteCourseById(event) {
    event.preventDefault();

    const courseId = document.querySelector("#deleteCourseId").value;

    try {
        const deletedCourse = await deleteCourse(courseId);

        if(deletedCourse) {
            const deleteResult = document.querySelector("#courseResult").innerHTML =
                `${deletedCourse.courseName} Deleted`; 

        loadCourses();
    }


    } catch(error) {
        console.error(error);
    }
}



document.addEventListener("DOMContentLoaded", () => {

    const createForm  = document.getElementById("CreateCourse");
    createForm .addEventListener("submit", handleCreateCourse);

    const searchForm  = document.querySelector("#searchCourseId");
    searchForm .addEventListener("submit", searchCourseById);

    loadCourses();

    const deleteForm = document.querySelector("#deleteCourse");
    deleteForm .addEventListener("submit", deleteCourseById);
});