let firstName = ["John", "Jane", "Alice", "Bob", "Charlie"];
let lastName = ["Doe", "Smith", "Johnson", "Brown", "Davis"];
let age = [25, 30, 22, 28, 35];

let index = 0;

document.getElementById("firstPerson").innerHTML = `First Name: ${firstName[index]}, Last Name: ${lastName[index]}, Age: ${age[index]}`;

index++;
document.getElementById("secondPerson").innerHTML = `First Name: ${firstName[index]}, Last Name: ${lastName[index]}, Age: ${age[index]}`;

index++;
document.getElementById("thirdPerson").innerHTML = `First Name: ${firstName[index]}, Last Name: ${lastName[index]}, Age: ${age[index]}`;