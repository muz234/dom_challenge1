console.log("hello World")

let right = () => {

    document.getElementById("display1").innerHTML = "I'm right. ";
    document.getElementById("display2").innerHTML = "";
}

let n_right = () => {

    document.getElementById("display2").innerHTML = "No! I'm right.";
    document.getElementById("display1").innerHTML = "";
}
document.getElementById("image_display").addEventListener("mouseover", mouseover);

    //  mouse hover function 
function mouseover() {
    alert("your over the Image");
}

function chk_pass() {
    var p = document.getElementById("input_Pass").value;
    //console.log(p);
    var p_check = "12345678";
    if (p === p_check) {
        alert("password matched!"); //document.getElementById("head_text").innerHTML = "Its correct";          
    }
    else {
        alert("Password dont match!");
    }
}

function calculate() {
    "use strict";
    let volume;
    let radius = document.getElementById("radius").value;

    radius = Math.abs(radius);
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(2);
    document.getElementById("volume").value = volume;
    return false;
}
function init() {
    "use strict";
    document.getElementById("MyForm").onsubmit = calculate;


    window.onload = init;
}