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

/*
const muestrarPerimetro = function(perimetro, figura) {
  let p = null;
  
  switch(figura) {
    case 'cuadrado':
      p = document.getElementById('output-perimetro-cuadrado');
      break;
    case 'triangulo':
      p = document.getElementById('output-perimetro-triangulo');
      break;
    case 'circulo':
      p = document.getElementById('output-circunferencia-circulo');
      break;
  }
  if(!p || p==null) {
    p.innerHTML = 'No se pudrió calcular el perimetro';
    return;
  }
  p.innerHTML = perimetro.toFixed(2) + 'cm';
};
*/

const muestrarResutado = function (tipoCalculo, figura, valoreCalculo) {
  let p = null;

  switch (figura) {
    case "cuadrado":
      p =
        tipoCalculo == "calculoPerimetro"?
          document.getElementById("output-perimetro-cuadrado") :
          document.getElementById("output-area-cuadrado");
      break;
    case "triangulo":
      p =
        tipoCalculo == "calculoPerimetro"?
          document.getElementById("output-perimetro-triangulo") :
          document.getElementById("output-area-triangulo");
      break;
    case "circulo":
      if(tipoCalculo == 'calculoDiametro') {
        p = document.getElementById("output-diametro-circulo");
      }
      if(tipoCalculo == 'calculoCircunferencia') {
        p = document.getElementById("output-circunferencia-circulo");
      }
      if(tipoCalculo == 'calculoArea') {
        p = document.getElementById("output-area-circulo");
      }
      break;
  }
  if (!p || p == null) {
    p.innerHTML = "No se pudrió calcular el perimetro";
    return;
  }
  let medida = '';
  if(tipoCalculo == 'calculoPerimetro' || tipoCalculo == 'calculoCircunferencia' || tipoCalculo == 'calculoDiametro') {
    medida = 'cm';
  } else {
    medida = 'cm²';
  }
  p.innerHTML = valoreCalculo.toFixed(2) + medida;
};


const calcularPerimetroCuadrado = function () {
  console.log("ciao");
  const input = document.getElementById("inputCuadrado");
  const lado = input.value;
  //console.log(typeof(value));
  const perimetro = perimetroCuadrado(lado);
  muestrarResutado('calculoPerimetro', 'cuadrado', perimetro);
  //alert(perimetro.toFixed(2) + "cm");
  return perimetro;
};

const calcularAreaCuadrado = function () {
  const input = document.getElementById("inputCuadrado");
  const lado = input.value;
  const area = areaCuadrado(lado);
  muestrarResutado('calculoArea', 'cuadrado', area);
  //alert(area.toFixed(2) + "cm²");
  return area;
};

const calcularPerimetroTriangulo = function () {
  const inputLado1 = document.getElementById("inputLadoTriangulo1");
  const lado1 = Number(inputLado1.value);
  //console.log(typeof(lado1));
  const inputLado2 = document.getElementById("inputLadoTriangulo2");
  const lado2 = Number(inputLado2.value);
  const inputBase = document.getElementById("inputBaseTriangulo");
  const base = Number(inputBase.value);
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  muestrarResutado('calculoPerimetro', "triangulo", perimetro);
  //alert(perimetro.toFixed(2) + "cm");
  return perimetro;
};

const calcularAreaTriangulo = function () {
  const inputBase = document.getElementById("inputBaseTriangulo");
  const base = inputBase.value;
  const inputAltura = document.getElementById("inputAlturaTriangulo");
  const altura = inputAltura.value;
  const area = areaTriangulo(base, altura);
  muestrarResutado('calculoArea', "triangulo", area);
  //alert(area.toFixed(2) + "cm²");
  return area;
};

const calcularCircunferenciaCirculo = function () {
  const input = document.getElementById("inputRadioCirculo");
  const radio = input.value;
  const diametro = diametroCirculo(radio);
  const circunferencia = circunferenciaCirculo(radio);
  muestrarResutado('calculoDiametro', "circulo", diametro);
  //alert("Diametro: " + diametro.toFixed(2) + "cm");
  muestrarResutado('calculoCircunferencia', "circulo", circunferencia);
  //alert('Circunferencia: '+circunferencia.toFixed(2) + "cm");
  return circunferencia;
};

const calcularAreaCirculo = function () {
  const input = document.getElementById("inputRadioCirculo");
  const radio = input.value;
  const area = areaCirculo(radio);
  muestrarResutado('calculoArea', "circulo", area);
  //alert("Area: " + area.toFixed(2) + "cm²");
  return area;
};