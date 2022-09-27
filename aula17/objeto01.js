let amigo = {nome: 'José', 
sexo: 'M',
peso: 85.4,
emagrecer(p){
    console.log('Emagreceu')
    amigo.peso -= p
    kg = amigo.peso - p
}}


amigo.emagrecer(20)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
console.log (`${amigo.nome} emagreceu ${amigo.peso - kg} kg.`)