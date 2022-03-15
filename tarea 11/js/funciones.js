var mayor = 0;
var menor = 0;
var sumapositivos = 0;
var sumanegativos = 0;

function añadir(num) {
    if (num > mayor) {
        mayor = num;
    } else if (num < menor) {
        menor = num;
    } 

    if (num<0) {
        sumanegativos=sumanegativos+num;
    }else if(num>0) {
        sumapositivos = sumapositivos + num;
    }

}
function fin() {
document.getElementById("resultado").innerHTML= "el mayor es: "+mayor + "<br>" +"el menor es: "+menor + "<br>" + "la suma de los positivos es: "+sumapositivos + "<br>" + "la suma de los negativos es: "+sumanegativos + "<br>" 
}