function getStudents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ([
                {id: 1, name: "Prince", grade: 95},
                {id: 2, name: "John", grade: 70},
                {id: 3, name: "Mary", grade: 88},
                {id: 4, name: "James", grade: 60},
                {id: 5, name: "Anna", grade: 91}
            ]);
        }, 3000);
    });
}

async function start() {

    try {
    console.log("Loading Students...");

    const students = await getStudents();
    const passedStudent = students
                            .filter(passed => passed.grade >= 75);
                       
    let sum = 0;
    let numberOfStudent = 0;

    passedStudent.forEach(element => {
        console.log(`${element.name} - ${element.grade}`);
        sum += element.grade;
        numberOfStudent++;
    });

    const generalAverage = sum / numberOfStudent;

    console.log(`General Weighted Average: ${generalAverage}`);
    } catch(error) {
        console.error(error);
    }
}

start();