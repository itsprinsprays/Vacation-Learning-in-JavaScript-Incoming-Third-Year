let subject = {
    1: {
        subjectName: "Mathematics",
        subjectGrade: "99",
    },
    2: {
        subjectName: "Science",
        subjectGrade: "95",
    },
    3: {
        subjectName: "English",
        subjectGrade: "90",
    },
    4: {
        subjectName: "History",
        subjectGrade: "85", 
    }
  
}

let sum = 0;

for(let i in subject) {
    console.log(`Subject : ${subject[i].subjectName}`);
    console.log(`Grade   : ${subject[i].subjectGrade}`);
    console.log("-------------------------");
    sum += parseInt(subject[i].subjectGrade);
}

let average = sum / Object.keys(subject).length;

console.log(`Average : ${average}`);