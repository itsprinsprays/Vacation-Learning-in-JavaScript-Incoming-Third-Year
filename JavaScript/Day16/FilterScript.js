let numbers = [45, 60, 90, 35, 78, 20];

let evenNumbers = numbers.filter(num => num % 2 === 0);
let greaterThan50 = numbers.filter(num => num > 50);

alert(evenNumbers);
alert(greaterThan50);


let students = [ 
    { name: "Prince", score: 95},
    { name: "John", score: 68},
    { name: "Maria", score: 88},
    { name: "James", score: 70}
];

let passedStudents = students.filter(student => student.score >= 75);  
console.log(passedStudents);

let product = [
    { name: "Laptop", inStock: true},
    { name: "Mouse", inStock: false},
    { name: "Keyboard", inStock: true},
    { name: "Monitor", inStock: false}
];

let stockProduct = product.filter(stock => stock.inStock === true);

console.log(stockProduct);

const names = [
    "Prince",
    "John",
    "Paul",
    "Maria",
    "Patrick"
];

let startsWithP = names.filter(pStart => pStart.startsWith("P"));
alert(startsWithP);

let people = [
    { name: "Prince", age: 20 },
    { name: "John", age: 16 },
    { name: "Maria", age: 19 },
    { name: "James", age: 15 },
    { name: "Anna", age: 25 }
];

let adult = people.filter(adults => adults.age > 18);

console.log(adult);

//Filter and Map

let student = [
{ name: "Prince", score: 95 },
{ name: "John", score: 60 },
{ name: "Maria", score: 88 },
{ name: "James", score: 70 }
];
 
let passed = student
		.filter(passing => passing.score >= 75)
		.map(studentName => studentName.name);

console.log(passed);