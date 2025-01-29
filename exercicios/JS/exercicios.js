// 1. Declare uma variável de nome weight

//RESPOSTA
//let weight

// 2. Que tipo de dado é a variável acima?

// RESPOSTA
//console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (inteiro)
    * stars: Number (float)
    * isSubscribed: Boolean
*/

// RESPOSTA
//  let person = {
//     name: 'Cleitin',
//     age: 17,
//     stars: 6.66,
//     isSubscribed: true
// }
// console.log(person)

/* 4. A variável student abaixo, é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

// RESPOSTA
let student = {
    name:'Cleitin',
    age: 17,
    stars: 6.66,
    weight: 72,
    isSubscribed: true
}
// console.log(typeof student)
// console.log(`${student.name} de idade ${student.age}, pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

// RESPOSTA
let students = []

/*
    6. Reatribua um valor para a variável acima, colocando dentro dela o objeto student da questão 4.
*/

students = [
    student
]
console.log(students)

/* 
    7. Coloque no console o valor da posição zero do Array acima
*/

//RESPOSTA
// console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

let student2 = {
    name: 'Jorgin',
    age: 16,
    stars: 5.55,
    weight: 80,
    isSubscribed: true
}

students = [
    student,
    student2
]
// OU PODERIA SER TAMBÉM
/*
students[1] = student2

*/
console.log(students)
console.log(students[1])


/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

//RESPOSTA :
/* 
    Será UNDEFINED, pois variável a, até o momento, não tinha sido definida.
    para vir a resposta correta, deveria ser:
*/
    var a = 1
    console.log(a)