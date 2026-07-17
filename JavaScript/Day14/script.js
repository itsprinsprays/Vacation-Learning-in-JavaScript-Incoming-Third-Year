//onload
function bodyloading() {
    alert("Welcome To my website");
    let h1 = document.querySelector("h1");
    h1.style.color = "red";
}

//onclick
function buttonText() {
    let title = document.querySelector("h1");
    title.innerHTML = "Hello World";
}
    
//onmouseover 
function hoverText() {
    let button1 = document.querySelector("#button1"); 
    button1.style.backgroundColor = "blue";
}

//onmouseout
function unhoverText() {
    let button1 = document.querySelector("#button1"); 
    button1.style.backgroundColor = "white";
}

//
function triggeredFocus() {
    let input = document.querySelector("#input1");
    input.style.color = "red";
    input.style.backgroundColor = "black";
}

function triggeredBlur() {
    let input = document.querySelector("#input1");
    input.style.color = "black";
    input.style.backgroundColor = "white";
}

function onInput() {
    let input2 = document.querySelector("#input2");
    let output = document.querySelector("p");
    output.innerHTML = input2.value;
}




//Script for JS Tutorial 14.1

function signIn() {
    let username = document.querySelector("#txtEmail").value;
    let password = document.querySelector("#txtPassword").value;

    if(username === "admin" && password === "password") {
        alert("Login Successful");
    } else {
        alert("Login Failed");
    }
}

//Script for JS Tutorial 14.2


function getCountry() {
    let country = document.querySelector("#slcCountry").value;
    alert("You selected: " + country);

}


//Script for JS Tutorial 14.3

function sendSex() {
    let sex = document.querySelector("input[name=sex]:checked").value;
    alert("You selected: " + sex);
}


