let math = prompt("Grade in Math: ");
let english = prompt("Grade in English: ");
let science = prompt("Grade in Science: ");

let average = (parseFloat(math) + parseFloat(english) + parseFloat(science)) / 3;

if (average >= 101) {
    document.write(`Average: ${average} - Invalid grade`);
} else if(average >= 98) { 
    document.write(`Average: ${average} - With Highest Honors`);
} else if(average >= 95) {
    document.write(`Average: ${average} - With High Honors`);
} else if(average >= 90) {
    document.write(`Average: ${average} - With Honors`);
} else if(average >= 75) {
    document.write(`Average: ${average} - Passed`);
} else {
    document.write(`Average: ${average} - Failed`);
}