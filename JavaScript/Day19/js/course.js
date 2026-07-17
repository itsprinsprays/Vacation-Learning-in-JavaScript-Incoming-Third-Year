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
    const tableBody = document.querySelector("#courseTableBody")

    const id = document.querySelector("#courseId").value;

    const course = await getCourseById(id);

    if(course) {
        tableBody.innerHTML = `
        <tr>
            <td>${course.courseId}</td>
            <td>${course.courseName}</td>
            <td>${course.unit}</td>
        </tr>
        `;
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
                <td>
                    <button class ="updateBtn" data-id="${course.courseId}">Edit</button>
                </td>
            </tr>
                `;
        });

        document.querySelectorAll(".updateBtn").forEach(button => {
            button.addEventListener("click", handleEditCourse);
        })

    } catch(error) {
    console.error(error);
    }
}

async function handleEditCourse(event) {

    const button = event.target;
    const row = button.closest("tr");

    const nameCell = row.children[1];
    const unitCell = row.children[2];

    const currentName = nameCell.textContent;
    const currentUnit = unitCell.textContent;

    nameCell.innerHTML =
        `<input type="text" value="${currentName}">`;

    unitCell.innerHTML =
        `<input type="number" value="${currentUnit}">`;

    button.textContent = "Save";
    button.removeEventListener("click", handleEditCourse);
    button.addEventListener("click", handleSaveCourse);
}

async function handleSaveCourse(event) {

    const button = event.target;
    const row = button.closest("tr");

    const id = button.dataset.id;

    const course = {
        courseName: row.children[1].querySelector("input").value,
        unit: row.children[2].querySelector("input").value
    };

    try {

        const updatedCourse = await updateCourseByid(id, course);

        row.children[1].textContent = updatedCourse.courseName;
        row.children[2].textContent = updatedCourse.unit;

        button.textContent = "Edit";

        button.removeEventListener("click", handleSaveCourse);
        button.addEventListener("click", handleEditCourse);

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
                event.target.reset();

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