// -------------------
// Codigo del cuadrado
// -------------------

console.group("Cuadrados");

// Función que calcula el perimetro
const perimetroCuadrado = function (lado) {
  return lado * 4;
};

// Función que calcula el area
const areaCuadrado = function (lado) {
  return lado * lado;
};

// Testing del cuadrado

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
console.log(
  "El perimetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm"
);
console.log("El area del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm²");

console.groupEnd();

// --------------------
// Codigo del triangulo
// --------------------

console.group("Triangulos");

// Función que calcula el perimetro
const perimetroTriangulo = function (lado1, lado2, base) {
  return lado1 + lado2 + base;
};

// Función que calcula el area
const areaTriangulo = function (base, altura) {
  return (base * altura) / 2;
};

// Testing del triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

console.log(
  "El perimetro del triangulo es: " +
    perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) +
    "cm"
);

console.log(
  "El area del triangulo es: " +
    areaTriangulo(baseTriangulo, alturaTriangulo) +
    "cm²"
);

console.groupEnd();

// ------------------
// Codigo del circulo
// ------------------

console.group("Circulo");

// Pi Greco
const pi = Math.PI;

// Función que calcula el diámetro
const diametroCirculo = function (radio) {
  return radio * 2;
};

// Función que calcula la circunferencia
const circunferenciaCirculo = function (radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
};

// Función que calcula el area
const areaCirculo = function (radio) {
  return radio * radio * pi;
};

/* Testing del circulo */

const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm");

// Diametro
console.log(
  "El diametro del circulo es: " + diametroCirculo(radioCirculo) + "cm"
);

// Circunferencia
console.log(
  "La circunferencia del circulo es: " +
    circunferenciaCirculo(radioCirculo).toFixed(2) +
    "cm"
);

// Area
console.log(
  "El area del circulo es: " + areaCirculo(radioCirculo).toFixed(2) + "cm²"
);

console.groupEnd();



// Aquí interactuamos con el HTML

const calcularPerimetroCuadrado = function() {
  const input = document.getElementById('inputCuadrado');
  const lado = input.value;
  //console.log(typeof(value));
  const perimetro = perimetroCuadrado(lado);
  alert(perimetro.toFixed(2) + "cm");
  return perimetro;
};

const calcularAreaCuadrado = function() {
  const input = document.getElementById('inputCuadrado');
  const lado = input.value;
  const area = areaCuadrado(lado);
  alert(area.toFixed(2) + "cm²");
  return area;
}

const calcularPerimetroTriangulo = function(){
  const inputLado1 = document.getElementById('inputLadoTriangulo1');
  const lado1 = Number(inputLado1.value);
  //console.log(typeof(lado1));
  const inputLado2 = document.getElementById('inputLadoTriangulo2');
  const lado2 = Number(inputLado2.value);
  const inputBase = document.getElementById('inputBaseTriangulo');
  const base = Number(inputBase.value);
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro.toFixed(2) + "cm");
  return perimetro;
}

const calcularAreaTriangulo = function(){
  const inputBase = document.getElementById('inputBaseTriangulo');
  const base = inputBase.value;
  const inputAltura = document.getElementById('inputAlturaTriangulo');
  const altura = inputAltura.value;
  const area = areaTriangulo(base, altura);
  alert(area.toFixed(2) + "cm²");
  return area;
}

const calcularCircunferenciaCirculo = function() {
  const input = document.getElementById('inputRadioCirculo');
  const radio = input.value;
  const diametro = diametroCirculo(radio);
  const circunferencia = circunferenciaCirculo(radio);
  alert('Diametro: '+diametro.toFixed(2) + "cm");
  alert('Circunferencia: '+circunferencia.toFixed(2) + "cm");
  return circunferencia;
}

const calcularAreaCirculo = function() {
  const input = document.getElementById('inputRadioCirculo');
  const radio = input.value;
  const area = areaCirculo(radio);
  alert('Area: '+area.toFixed(2) + "cm²");
  return area;
}