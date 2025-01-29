            //Função anônima OU Function Expression(ou anonnymous)

//parâmetros da função (parameters)
// const sum = function (number1, number2){
//    let total = number1 + number2
//     return total
// }

// let number1 = 34
// let number2 = 25
// // arguments - argumentos

// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
// console.log(`A soma dos dois números é ${sum(number1, number2)}`)

// -----------------------------------------------------------------

             // Function scope

// let subject

// function createThink(){
//     subject = 'study'
//     return subject
// }

// console.log(subject)
// console.log(createThink())
// console.log(subject)

// -----------------------------------------------------------------

            // function hoisting

// sayMyName();

// function sayMyName(){
//     console.log('Erick')
// }

// -----------------------------------------------------------------

            //Arrow Function

// const sayMyName = (name) => {
//     console.log(name)
// }

// sayMyName('Erick')

// -----------------------------------------------------------------

            // callback function

// function sayMyName(callback) {
//     console.log('Antes de executar a função callback')
    
//     callback()

//     console.log('depois de executar a callback')
// }

// sayMyName(
//     () => {
//         console.log('Estou em um callback')
//     }
// )
 
// -----------------------------------------------------------------

            // Function Constructor
        /*
            * Expressão new
            * Criar um novo Objeto
            * This keyword
        */

// function Person(name) {
//     this.name = name
//     this.walk = function(){
//         return this.name + " está andando"
//     }
//     this.stop = function(){
//         return this.name + " parou"
//     }
//     this.atacar = function(){
//         return this.name + " atacou"
//     }
//     this.defender = function(){
//         return this.name + " defendeu"
//     }
// }
// const erick = new Person("Erick")
// const joao = new Person("João")
// console.log(erick.walk())
// console.log(joao.walk())
// console.log(erick.stop())
// console.log(joao.stop())
// console.log(erick.atacar())
// console.log(joao.defender())

// -----------------------------------------------------------------

            // Prototype
        /*
           * prototype-based language
           * prototype chain
           * __proto__
        */

// -----------------------------------------------------------------

            // Type conversion (typecasting) vs Type coersion
        /*
            *Alteração de um tipo de dado para outro tipo
        */

// console.log(Number('9') + 5)

// -----------------------------------------------------------------

            // Manipulando Strings e Números
    // Transformar String em número e número em string
    
// let string = "123"
// console.log(Number(string))
// let number = 321
// console.log(String(number))

// -----------------------------------------------------------------

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

// let word = "Paralelepipedo"
// console.log(word.length)
// let number = 1234
// console.log(String(number).length)

// -----------------------------------------------------------------

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

// let number = 423232.42332
// console.log(number.toFixed(2).replace("." , ","))

// -----------------------------------------------------------------

// Transforme letras minúsculas em maiúsculas. Faça o contrário também

// let word = "Programar é muito maneiro!"
// console.log(word.toUpperCase())
// console.log(word.toLowerCase())

// -----------------------------------------------------------------

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

//Para transformar string em uma array, usamos o .split(" ")
// E depois, para juntarmos novamente, usamos o .join()
// let phrase = "O pior socialismo real é melhor que o melhor capitalismo"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(myArray)
// console.log(phraseWithUnderscore)

// -----------------------------------------------------------------

// Verificar se o texto contém a palavra Amor

// let phrase = "Eu quero viver o amor!"
// console.log(phrase.includes("amor"))

// -----------------------------------------------------------------

// Criar Array com construtor

// let myArray = new Array("a", "b", "c")
// console.log(myArray)
// -----------------------------------------------------------------

// Contar elementos de um array

// console.log(["a", "b", "c"].length)

// -----------------------------------------------------------------

// Transformar uma cadeia de caracteres em elementos de um array

// let word = "manipulação"
// console.log(Array.from(word))

// -----------------------------------------------------------------

// Manipulando Arrays

// let techs = ["html", "css", "js"]

// // adicionar um item no fim
// techs.push("react")

// // adicionar no começo
// techs.unshift("sql")

// remover do fim
// techs.pop()

// remover do começo
// techs.shift()

// pegar somente alguns elementos do array ("css" e "js")
// console.log(techs.slice(1,3))
 // (1 -> refere-se ao index, posição 1 (no caso, o css). 3 -> referese ao total de item que eu quero que vá a divisão (slice), no caso, até o item 3 ("js").)

// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 2)
 //(o primeiro 1 é o index, posição do array que eu quero tirar. Já o segundo 1 é quantos itens, a partir dalí eu quero tirar.)

// encontrar a posição de um elemento no array
// let index = techs.indexOf('react')
// techs.splice(index, 1)

// console.log(techs)

// -----------------------------------------------------------------

/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

// let number = 5

// console.log(number + 1) //Operador Binário
// console.log(++number) //Operador Unário
// console.log(true ? 'Alô' : 'Nada') //Operador Ternário

// -----------------------------------------------------------------

/*
    new

    * Left-hand-side expression
    * Criar um novo objeto

*/

// let name = new String('Erick')
// name.surName = 'Souza'
// let age = new Number(27)
// console.log(name.surName, age)

// -----------------------------------------------------------------

/*
    Operadores Unários
    typeof
    delete

*/

// const person = {
//     name: 'Erick',
//     age: 27,
// }

// delete person.age
// console.log(person)

// -----------------------------------------------------------------

 
    // Operadores aritiméticos
    // Multiplicação
        // console.log(3.2 * 5)
    // Divisão
        // console.log(12/2)
    // Soma
        // console.log(45 + 62)
    // Subtração
        // console.log(22 - 10)
    // Resto da divisão
        // console.log(11%10)
    // Incremento
    //     let increment = 1
    //     console.log(++increment)
    // // Decremento
    //     let decrement = 1
    //     console.log(--decrement)
    // // Exponencial
    //     console.log(5 ** 2)

    // ---------------------------------------------------------------

// Operadores lógicos

// - 2 valores booleanos, quenaod verificados, resultará em verdadeiro ou falso

// let pao = false
// let queijo = true
    
// // AND &&
//     console.log(pao && queijo)

// // OR ||
//     console.log(pao || queijo)

// // NOT !
//     console.log(!pao, !queijo)

// ---------------------------------------------------------------

// Operador Condicional (Ternário)

// Dependendo da condição, recebemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
// let pao = true
// let queijo = true

// const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

// console.log(niceBreakfast)

// Maior de 18

// let age = 16
// const canDrive = age >= 18 ? 'can drive' : "can't drive"

// ---------------------------------------------------------------

// If...else

// let temperature = 37.5

// if(temperature >= 37.5){
//     console.log('Febre alta')
// } else if(temperature < 37.5 && temperature >= 37){
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

// ---------------------------------------------------------------

// Switch
// function calculate(number1, operator, number2){
// let result = 0;

// switch (operator) {
//     case '+':    
//         result = number1 + number2
//         break
//     case '-':
//         result = number1 - number2
//         break
//     case '*':
//         result = number1 * number2
//         break
//     case '/':
//         result = number1 / number2
//         break
//     default:
//         console.log('Não implementado')
//         break
// }

// return result

// }
// console.log(calculate(5, '-', 5))

// ---------------------------------------------------------------

// Throw

// function sayMyName(name) {
//     if (name === ''){
//         throw "Nome é obrigatório"
//     }

//     console.log(name)
// }

// // Try... catch
// try {
//     sayMyName('Erick')
    
// } catch(e){
//     console.log(e)
// }

// console.log('Após o try/catch')

// ---------------------------------------------------------------

// Estrutura de repetição
// For
// break - para parar a execução do loop
// continue - para pular a execução.
// for(let i = 1; i <= 10; i++) {
//     if (i === 6){
//         continue;
//     }
//     console.log(i)
// }

// Estrutura de repetição
// while

// let i = 543252343;
// while(i > 10) {
//     console.log(i)

//     i /= 35
// }

// ---------------------------------------------------------------

// for... of

// let name = 'Erick'
// let names = ['João', 'Paulo', 'Pedro']

// for(let name of names){
//     console.log(name)

// }

// ---------------------------------------------------------------

// for...in

// let person = {
//     name: 'Erick',
//     age: 27,
//     weight: 88.5
// }

// for (let property in person) {
//     console.log(property)
//     console.log(person[property])
// }