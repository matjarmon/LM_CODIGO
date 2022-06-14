function cambiar() {

    document.getElementById("primero").className = "negrita";
    document.getElementById("segundo").className = "grande";
    document.getElementById("tercero").className = "color";


}


function calcular() {
    var viaje=document.getElementById("viaje").value;
    var km=document.getElementById("kms").value;
    var gasoil=document.getElementById("gasolina").value;
    var distancia=km*gasoil;

    document.getElementById("resultado").innerHTML=
     "El viaje "+ viaje + " de " + km +" kilometros a " + gasoil +
      "€ el precio del kilometro hace un gasto total de " + distancia + " €.";
}