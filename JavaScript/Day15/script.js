function readInput(e) { 

    let value = e.target.value;
    alert(value);

}

//Arrow Function
let add = (x,y) => x + y;
alert(add(5, 3));


//timing events
// setTimeout(() => {

// let input = document.querySelector("input");
// input.style.transtintion = "1s";
// input.placeholder = "Enter your name";

// let body = document.querySelector("body");
// body.style.transition = "1s";
// body.style.backgroundColor = "red";

// }, 2000);


//set Interval
setInterval(() => {
    let body = document.querySelector("body");
    body.style.transition = "1s";
    if(body.style.backgroundColor === "blue") body.style.backgroundColor = "black";
    else body.style.backgroundColor = "blue";


}, 2000);


//JSON destructuring 
const user = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "email": "john@example.com"
};

let {name, age, city, email} = user;
alert(name);
alert(age);
alert(city);
alert(email);


