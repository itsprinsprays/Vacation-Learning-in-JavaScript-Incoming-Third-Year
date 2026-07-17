function submitForm() {
    let firstName = document.querySelector("#inpfirstName").value;
    let lastName = document.querySelector("#inplastName").value;
    let birthday = document.querySelector("#dtbirthday").value;
    let sex = document.querySelector("input[name=sex]:checked").value;
    let country = document.querySelector("#country").value;
    let policy = document.querySelector("#cbpolicy").checked;

    if(policy) {

    let fullname = document.querySelector("#fullName");
    fullname.innerHTML = `Name : ${firstName} ${lastName}`;

    let birthdate = document.querySelector("#birthdate");
    birthdate.innerHTML = `Birthday : ${birthday}`;

    let pSex = document.querySelector("#pSex");
    pSex.innerHTML = `Sex : ${sex}`;

    let pCountry = document.querySelector("#pCountry");
    pCountry.innerHTML = `Country : ${country}`;

    } else {
        alert("You must accept the policy to submit the form.");
    }
    


}