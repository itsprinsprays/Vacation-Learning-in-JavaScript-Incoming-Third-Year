let math = 99;
let english = 80;
let science = 90;
let filipino = 85
let Ap = 90

let average = (math + english + science + filipino + Ap) / 5;

document.getElementById("math").innerHTML = "Math : " + math;
document.getElementById("english").innerHTML = "English : " + english;
document.getElementById("science").innerHTML = "Science : " + science;
document.getElementById("filipino").innerHTML = "Filipino : " + filipino;
document.getElementById("Ap").innerHTML = "AP : " + Ap;
document.getElementById("average").innerHTML = "Average : " + average;