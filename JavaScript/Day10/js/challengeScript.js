let student = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        section: "BSIT-2E"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        age: 22,
        section: "BSIT-2F"
    },
    {
        firstName: "Michael",
        lastName: "Johnson",
        age: 25,
        section: "BSIT-2D"
    }
];

for(let i = 0; i < student.length; i++) {
    console.log(student[i].firstName + " " + student[i].lastName + " is " + student[i].age + " years old and belongs to section " + student[i].section);
}