// 1º Exercício
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

if (num1 > num2) {
  console.log("O primeiro número é maior:", num1);
} else if (num2 > num1) {
  console.log("O segundo número é maior:", num2);
} else {
  console.log("Os números são iguais!");
}

//2° Exercício//
const numero = Number(prompt("Digite um número:"));

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

//3º Exercício
const letra = prompt("Digite uma letra:");

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("A letra é uma vogal.");
} else {
  console.log("A letra é uma consoante.");
}

// 4º Exercício
const nota1 = Number(prompt("Qual foi sua 1º nota"));
const nota2 = Number(prompt("Qual foi sua 2º nota"));
const nota3 = Number(prompt("Qual foi sua 3º nota"));
const nota4 = Number(prompt("Qual foi sua 4º nota"));

const media = (nota1 + nota2 + nota3 + nota4)/4;

if(media === 10){
    console.log("Aprovado com Distinção");
}else if (media >= 7){
    console.log("Aprovado");
} else{
    console.log("Reprovado");
}



// 5º Exercício
const number1 = Number(prompt("Digite o primeiro número:"));
const number2 = Number(prompt("Digite o segundo número:"));
const number3 = Number(prompt("Digite o terceiro número:"));

if(number1 > number2 ){
    console.log("O primeiro número é maior",number1);
} else if (number2 > number3){
    console.log("O segundo é maior",number2);
} else {
    console.log("Os números são iguais");
}






// 6º Exercício
const preco1 = Number(prompt("Digite o preço do primeiro produto:"));
const preco2 = Number(prompt("Digite o preço do segundo produto:"));
const preco3 = Number(prompt("Digite o preço do terceiro produto:"));

if (preco1 < preco2 && preco1 < preco3) {
  console.log("O primeiro produto é o mais barato.");
} else if (preco2 < preco1 && preco2 < preco3) {
  console.log("O segundo produto é o mais barato.");
} else {
  console.log("O terceiro produto é o mais barato.");
}





const turno = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.");

if (turno === "M") {
  console.log("Bom dia!");
} else if (turno === "V") {
  console.log("Boa tarde!");
} else if (turno === "N") {
  console.log("Boa noite!");
} else {
  console.log("Valor inválido!");
}



const nota = Number(prompt("Digite a nota do aluno:"));

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80 && nota <= 89) {
  console.log("B");
} else if (nota >= 70 && nota <= 79) {
  console.log("C");
} else if (nota >= 60 && nota <= 69) {
  console.log("D");
} else {
  console.log("F");
}

const dia = Number(prompt("Digite um número correspondente a um dia da semana (1-Domingo, 2-Segunda, etc.):"));

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Valor inválido");
    break;
}
