//comando de escrita
console.log("OI\nMUNDO")
console.log("\nNOME\tNOTA")
console.log("Eduardo\t5,5")
console.log("Maria\t10")


//variaveis
let nome = "Ednilson"

let valor1 = 10
let valor2 = 20

console.log(valor1+valor2)
console.log(nome)
console.log("OI "+ nome+" o valor 1 é "+valor1+" e o 2 é " +valor2)
console.log("A soma dos dois valores é "+(valor1+valor2))

//json
const leia = require("prompt-sync")()

let valo1 = 0
let valo2 = 0
let name = leia("digite o seu nome:") 

valo1 = parseInt(leia("digite o valor 1:"))
valo2 = parseInt(leia("digite o calor 2:"))
console.log("oi "+name.toUpperCase()+" a soma é igual "+(valo1+valo2))
// comandos de exibição de letra
console.log(name.length) //mostra quantos digitos tem o nome