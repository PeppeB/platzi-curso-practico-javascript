// P: precio original, D: descuento, PD: porcentajePrecioConDescuento, C: precio con descuento
// C = P * (100-D) / 100
// Ejemplo
// P = 200$, D = 15%
// PD = 100-D = 85%
// C = 85 * 200 / 100 = 170$


function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  precioConDescuento =
    (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const inputDiscount = document.getElementById('inputDiscount');
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const result = document.getElementById('result');
    result.innerText = 'El precio con descuento es $' + precioConDescuento;

    //return precioConDescuento;
}

const precioOriginal = 120;
const descuento = 18;
console.log("El precio original es " + precioOriginal + "$");
console.log("El precio con descuento es " + calcularPrecioConDescuento(precioOriginal, descuento) + "$");


console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento: 100-descuento,
  precioConDescuento,
});
