function calculadoraImc() {
    let nombre = prompt("Bienvenido a la calculadora de indice de masa corporal, ¿Cual es su nombre?");
    console.log(nombre);
    let peso = prompt (nombre + ", ingresa tu peso en kg.");
    console.log(peso + ".00");
    let altura = (prompt(nombre + ", Ingresa tu altura en cm y con punto. Ej: 1.56"));
    console.log(altura);
    let altura2=  (altura*altura);
    console.log(altura2);
    let valor =  (peso/altura2);
    console.log(valor);

if(valor<16.00) 
{
    alert("Peso bajo, necesitas valorar signos de desnutricion.");
}
else if(valor<=16.00 || valor<=16.99)
{
    alert("Tenes delgadez moderada.");
}
else if (valor<=17.00 || valor<18.49)

{
    alert("Tenes delgadez aceptable.");
}
else if (valor<=18.50 || valor<=24.99)
 {
     alert("Tenes un peso normal.");
 }
else if (valor<=25.00 || valor<=29.99)
 {
     alert("Tenes OBESIDAD GRADO I. Riesgo alto para desarrollar enfermedades cardiovasculares.");
 }
else if (valor<=30.00 || valor<=34.99)
 {
    alert("Tenes OBESIDAD GRADO II. Riesgo alto para desarrollar enfermedades cardiovasculares.");
 }
else if (valor<=35.00 || valor<=40.00)
 {
    alert("Tenes OBESIDAD GRADO III. Riesgo muy alto para desarrollar enfermedades cardiovasculares.");
 }
  else 
 {
     alert("No existe clasificacion");
 }
}



calculadoraImc()