function mostrarError(nombreSpan, mensaje) {
    document.getElementById(nombreSpan).innerHTML = mensaje;
}

function borrarError(nombreSpan) {
    document.getElementById(nombreSpan).innerHTML = "";
}

function validarFormulario() {
    var cadenaError = "";

    var texto = document.getElementById("texto");
    if (texto.value == null || texto.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: texto vacío</li>";
    } else if (texto.value.length < 5) {
        cadenaError = cadenaError +"<li>Error: texto de menos de 5 caracteres"
    }

    var tel = document.getElementById("edad");
    if (tel.value == null || tel.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: edad vacío</li>";
    }
    var web = document.getElementById("web");
    if (web.value == null || web.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: web vacía</li>";
    } else if (!web.value.endsWith('.es')) {
        cadenaError = cadenaError +"<li>Error: la web debe acabar en .es"
    } else if (!web.value.startsWith('https://')) {
        cadenaError = cadenaError +"<li>Error: la web debe empezar por https://"
    }



    if (cadenaError.length == 0) {
        return true;
    } else {
        document.getElementById("capaerrores").style.visibility = "visible";
        mostrarError("sperrores", cadenaError);
        return false;
    }

    
}


function calcular (op) {
    var viaje = document.getElementById("1").value;
    
    var precio = parseInt(document.getElementById("2").value);
    var calculo = 1 * 2
    texto = "El 1 " + 1 + " cuesta " + calculo 
    document.getElementById("resultado").innerHTML = texto;

}

function cambiar() {

    document.getElementById("opcion1").className = "negrita";
    document.getElementById("opcion2").className = "grande";
    document.getElementById("opcion3").className = "color";


}
