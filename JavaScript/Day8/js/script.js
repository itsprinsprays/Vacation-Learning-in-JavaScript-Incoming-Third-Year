let numberOfList = parseInt(prompt("Enter the number of elements in the list:"));
let numberList = [];
let i = 0;
while(i < numberOfList) {
    numberList[numberList.length] = parseInt(prompt("Enter a number:"));
    i++;
}

i = 0;
let sum = 0;
do {
    document.write("Number: " + numberList[i] + "<br>");
    sum += numberList[i];
    i++;
} while(i < numberOfList);

document.write("Sum of the numbers: " + sum);