let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let students = [
    { name: "Alice", age: 20 },
    { name: "Prince", age: 21 },
    { name: "Jediel", age: 20 }
];

let squared = numbers.map(num => num *2);
let uppercaseNames = names.map(name => name.toUpperCase());

let studentName = students.map(studentName => studentName.name);

alert(squared);
alert(uppercaseNames);
alert(studentName);

let prices = [100, 250, 80, 500];

let vat = 0.12;

let addVAT = prices.map(total => (total * vat) + total);  

alert(addVAT);