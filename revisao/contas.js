const leia = require("prompt-sync")()

/*let valor1 
let valor2 
let soma
let sub
let mult
let div

valor1 = parseInt (leia("Digite o primeiro numero : "))
valor2 = parseInt (leia("Digite o segundo numero : "))
soma = valor1 + valor2
sub = valor1 - valor2
mult = valor1 * valor2
div = valor1 / valor2
console.log("O resultado da soma é "+soma)
console.log("O resultado da subtração é "+sub)
console.log("O resultado da multiplicação é "+mult)
console.log("O resultado da divisão é "+div)

//raiz quadrada
let numero = parseInt(leia("Digite um numero para saber sua raiz : "))
console.log("Raiz quadrada : "+(Math.sqrt(numero)))

//numero ao cubo
let number = parseInt(leia("Digite um numero para saber ele ao cubo : "))
console.log("numero ao cubo : "+(Math.pow(number,3)))

//resolução de problemas matematicos 1
A= parseInt(leia("Digite o valor A :"))
B= parseInt(leia("Digite o valor B :"))
C= parseInt(leia("Digite o valor C :"))

let R
let S

R = (Math.pow(A+B, 2))
S = (Math.pow(B+C, 2))

let D

D= (R+S)/2

console.log("O valor de D : " +D)

//resolução de problemas matematicos 2

let X1 = parseInt(leia("digite o valor X1: "))
let X2 = parseInt(leia("digite o valor X2: "))
let Y1 = parseInt(leia("digite o valor Y1: "))
let Y2 = parseInt(leia("digite o valor Y2: "))
let D

D=Math.sqrt( Math.pow((X2-X1),2)+Math.pow((Y2-Y1),2))

console.log(" A distancia D : "+D)*/

//teste de nota para ver se fica de rec ou não

let aluno = leia("Digite o nome do aluno : ")
let nota = parseInt(leia("Digite a nota do aluno[1-10] : "))

if(nota <= 5){
    console.log("Oi aluno "+aluno+" ainda não, recuperação")
} else{
    console.log("Oi "+aluno+" ,perfeito continue assim")
} if(nota>=10){
    console.log("Esse numero é invalido")
}