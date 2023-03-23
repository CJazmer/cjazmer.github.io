var answer = 0;
var firstnum = "";
var secondnum = "";
var input = document.getElementById("input");
var whattodo = "";
function Click(numstring) {
    // if not a number + - x * 
    var iscal = false;
    if (numstring == "+" || numstring == "-" || numstring == "*" || numstring == "/") { iscal = true; whattodo = numstring;}

    if(whattodo == "") {firstnum += numstring;}
    else if (iscal == false) {secondnum += numstring;}
    Update();
}
function Calculate() {
    var a = parseInt(firstnum); var b = parseInt(secondnum); var answer = 0;
    if (whattodo == "+") { answer = a + b; }
    if (whattodo == "-") { answer = a - b; }
    if (whattodo == "*") { answer = a * b; }
    if (whattodo == "/") { answer = a / b; }
    input.innerHTML = answer;
    Reset()
    firstnum = answer;
    Update()
}
function Update() {
   input.innerHTML = firstnum + " " + whattodo + " " + secondnum;
}
function Reset() {
    firstnum = "";
    secondnum = "";
    input.textContent = "";
    whattodo = "";
    Update()
}