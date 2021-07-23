
var descuento = 30;

var precioInicial = 67;


function calcPrecCDesc(precio,descuento){
    var precioCDesc = Math.round((precio * (100-descuento))/100);
    return `El precio con el descuento del ${descuento}% es de $${precioCDesc}`;
}


console.log(calcPrecCDesc(precioInicial,descuento));

//html

function CalcularDescuento(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    let finalPrice = calcPrecCDesc(priceValue,discountValue);

    // return console.log(finalPrice);

    var resultP = document.getElementById("resultPrice");

    return resultP.innerText = finalPrice; //con esto ultimo asocio el id del parrafo con el resultado de mi funcion y lo muestro en el espacio del primero
}