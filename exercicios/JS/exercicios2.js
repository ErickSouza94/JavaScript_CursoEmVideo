/*  ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

// Resposta :
// para este exercício, podemos usar IF ELSE ou SWITCH

// let nota = 90

// if (nota >= 90) {
//     console.log('A')
// } else if (nota >= 80 && nota <= 89){
//     console.log('B')
// } else if (nota >= 70 && nota <= 79 ){
//     console.log('C')
// } else if (nota >= 60 && nota <= 69){
//     console.log('D')
// }else {
//     console.log('F')
// }

// Podemos fazer também adotando variáveis e usar como uma função


// function saberNota(nota){
// let notaA = nota >= 90 
// let notaB = nota >= 80 && nota <= 89
// let notaC = nota >= 70 && nota <= 79
// let notaD = nota >= 60 && nota <= 69
// let notaF = nota < 60

// let notaFinal;

// if (notaA){
//     notaFinal = "A"
// } else if (notaB){
//     notaFinal = "B"
// } else if (notaC){
//     notaFinal = "C"
// } else if (notaD){
//     notaFinal = "D"
// } else if (notaF){
//     notaFinal = "F"
// }

// return(notaFinal)
// }

// console.log(saberNota(90))

// ---------------------------------------------------------------


/*  ### Sistema de gastos familiar

Criar um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
    
Agora, crie uma função que calcule o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

// let orcamento = {
//     receitas: [2500, 2500, 500],
//     despesas: [300, 100, 980, 170, 1600]
// }

// function somaOrcamento(array) {
//     let total = 0
    
//     for(let value of array){
//         total += value
//     }
    
//     return total
// }

// function calcularContas() {
//    const calcularReceitas = somaOrcamento(orcamento.receitas)
//    const calcularDespesas = somaOrcamento(orcamento.despesas)

//    const total = calcularReceitas - calcularDespesas

//    if (total >= 0){
//     console.log(`Saldo positivo! ${total.toFixed(2)} R$`)
//    } else {
//     console.log(`Saldo negativo! ${total.toFixed(2)} R$`)
//    }

// }
//    calcularContas()

                    //       OU           //

//    let saldoPositivo = total >= 0
    
//    let saldoText = ''
   
//    if(saldoPositivo){
//         saldoText = 'Positivo'
   
//     } else {
//         saldoText = 'Negativo'
// }
//     console.log(`Seu saldo é ${saldoText}: ${total}`)
// }
// calcularContas()


// ---------------------------------------------------------------

/*  ### Celcius em Fahrenheit e vice e versa

    Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/
// transformDegree('50F')
// function transformDegree(degree){
//     const celsiusExists = degree.toUpperCase().includes('C')
//     const fahrenheitExists = degree.toUpperCase().includes('F')

//     // Fluxo de erro
//     if(!celsiusExists && !fahrenheitExists) {
//         throw new Error('Grau não identificado')
//     }

//     // Fluxo ideal F -> C
//     let updatedDegree = Number(degree.toUpperCase().replace('F', ""));
//     let form = (fahrenheit) => (fahrenheit - 32) * 5/9
//     let degreeSign = 'C'


//     // Fluxo altarnativo C -> F
//     if (celsiusExists) {
//     updatedDegree = Number(degree.toUpperCase().replace('C', ""));
//     form = (celsius) => celsius * 9/5 + 32
//     degreeSign = 'F'
//     }    


//     return form(updatedDegree) + degreeSign
// }

// try {
//     console.log(transformDegree('10C'))
//     console.log(transformDegree('50F'))
//     transformDegree('50Z')
// } catch (error) {
//     console.log(error)
// }

// ---------------------------------------------------------------

/* ### Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/

// const booksByCategory = [
//     {
//         category: "Riqueza",
//         books: [
//             {
//                 title:"Os seguredos da mente milionária",
//                 author: "T. Harv Eker",
//             },
//             {
//                 title:"O homem mais rico da Babilônia",
//                 author: "George S. Clason"
//             },
//             {
//                 title: "Pai rico, pai pobre",
//                 author: "Robert T. Kiyosaki e Sharon L. Lechter"
//             }
//         ],
//     },
//     {
//         category: "Inteligência Emocional",
//         books:[
//             {
//                 title:"Você é Insubstituível",
//                 author:"Augusto Cury",
//             },
//             {
//                 title: "Ansiedade - Como enfrentar o mal do Século",
//                 author: "Augusto Cury",
//             },
//             {
//                 title: "Os 7 hábitos das pessaos altamente eficazes",
//                 author: "Stephen R. Covey",
//             },
//         ],
//     },
// ];

// const totalCategories = booksByCategory.length

// console.log(totalCategories)
// for(let category of booksByCategory){
//     console.log('Total de livros da categoria: ', category.category)
//     console.log(category.books.length)
// }

// function countAuthors() {
//     let authors = [];

//     for(let category of booksByCategory) {
//         for(let book of category.books){
//             if(authors.indexOf(book.author) == -1) {
//                 authors.push(book.author)
//             }
//         }
//     }
    
//     console.log("Total de autores: ", authors.length)
// }

// countAuthors()

// function booksOfAuthor(author) {
//     let books = [];

//     for(let category of booksByCategory) {
//         for(let book of category.books){
//             if(book.author === author){
//                 books.push(book.title)
//             }
//         }
//     }
    
//     console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
// }
// booksOfAuthor('George S. Clason') 