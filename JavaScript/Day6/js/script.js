let age = prompt("Please enter your age:");
let register = prompt("Are you registered? (yes/no)");

let status;


if(age >= 18) {
    status = "Register First";
    if(register.toLowerCase() == "yes") {
        status = "Valid Voter";
    }
} else if (age <= 17) {
    status = "Non Voter";
    if(register.toLowerCase() == "yes") {
        status = "Invalid Voter";
    }
}

    document.write("Status : " + status);