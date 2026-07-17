let names = ["Alice", "Bob", "Charlie", "David", "Eve"]; 
let numbers = [1, 2, 3, 4, 5];

names.push("prince");
names.unshift("jediel");
document.getElementById("nameList").innerHTML = names;
document.getElementById("numberList").innerHTML = numbers;

names.pop();
names.shift();
document.getElementById("nameList2").innerHTML = names;