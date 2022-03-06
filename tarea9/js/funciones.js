var num1=parseInt(document.getElementById("n1").value);
var num2=parseInt(document.getElementById("n2").value);
var resultado ="";

function suma(){
    num1=parseInt(document.getElementById("n1").value);
    num2=parseInt(document.getElementById("n2").value);
    resultado = num1 + num2;
document.getElementById("respuesta").value=resultado;
}
function resta(){
    num1=parseInt(document.getElementById("n1").value);
    num2=parseInt(document.getElementById("n2").value);
    resultado = num1 - num2;
document.getElementById("respuesta").value=resultado;
}
function multiplicacion(){
    num1=parseInt(document.getElementById("n1").value);
    num2=parseInt(document.getElementById("n2").value);
    resultado = num1 * num2;
document.getElementById("respuesta").value=resultado;
}
function division(){
    num1=parseInt(document.getElementById("n1").value);
    num2=parseInt(document.getElementById("n2").value);
    resultado = num1 / num2;
document.getElementById("respuesta").value=resultado;
}