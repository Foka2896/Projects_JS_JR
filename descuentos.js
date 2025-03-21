/*para generar cupones aleatorios, dentro de un rango especifico
const min = 10;
const max = 100;

function myFunction() {
    const random = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("cupon").innerHTML = "CUPON: " + random + "%";
}*/
function myFunction1() {
    let cupon = 20;
    document.getElementById("cupon").innerHTML = ("CUPON:" + cupon.toFixed(0) + "%");
}
function myFunction2() {
    let cupon = 40;
    document.getElementById("cupon").innerHTML = ("CUPON:" + cupon.toFixed(0) + "%");
}
function myFunction3() {
    let cupon = 30;
    document.getElementById("cupon").innerHTML = ("CUPON:" + cupon.toFixed(0) + "%");
}
function total() {
    let cuponTexto = document.getElementById("cupon").innerHTML;
    let cupon = parseFloat(cuponTexto.replace("CUPON:", "").replace("%", "").trim());
    let precio = parseFloat(document.getElementById("precio").value);

    if (isNaN(precio)) {
        alert("Ingrese un valor numerico");
        return;
    } else if (precio <= 99) {
        alert("Ingrese un valor adecuado");
        return;
    } else if (cupon > 100) {
        alert("No se puede calcular tu precio con un descuento mayor al 100%");
        return;
    } else if (isNaN(cupon)) {
        alert("No has aplicado un cupón, el precio se mantendrá igual");
        return;

    } else {
        let total = precio - (precio * cupon) / 100;
        document.getElementById("total").innerHTML = ("TOTAL: " + "$" + total.toFixed(0));
    }
}
function limpiar() {
    document.getElementById("precio").value = "";
    document.getElementById("cupon").innerHTML = "";
    document.getElementById("total").innerHTML = "";
}