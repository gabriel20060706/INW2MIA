//conversor de graus celsius para kelvins
const leia = require("prompt-sync")()

let valo1 = 0.00
let valo2 = 273.00
let name = leia("digite o seu nome:") 

valo1 = parseFloat(leia("digite a temperatura em celsius:"))
console.log("oi "+name.toUpperCase()+" a temperatura em graus kelvin é "+(valo1+valo2))