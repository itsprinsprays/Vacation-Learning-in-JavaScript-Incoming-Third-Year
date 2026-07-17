function getEmployee(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const employees = [
                    { id: 1, name: "Prince", departmentId: 100 },
                    { id: 2, name: "John", departmentId: 101 },
                    { id: 3, name: "Mary", departmentId: 102 }
                ];
            
           const get = employees
                        .find(gets => gets.id === id);
            resolve(get);

        }, 2000);
    });
}

function getDepartment(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const departments = [
                    { id: 100, name: "HR" },
                    { id: 101, name: "IT Department" },
                    { id: 102, name: "Finance" }
                ];

            const get = departments
                        .find(gets => gets.id === id);
            resolve(get);
        }, 3000);
    });
}

async function start() {
    let load = document.querySelector("#LoadingEmployee");
    load.innerHTML = "Loading employee...";
    const employee = await getEmployee(2);
    console.log(employee);  

    const department = await getDepartment(employee.departmentId);
    console.log(department);
    console.log("Employee:" +employee.name);
    console.log("Department: " +department.name);
}

start();