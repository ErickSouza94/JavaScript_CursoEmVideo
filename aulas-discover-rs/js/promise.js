/**
 * Promise
 * 
 * A promessa de que algo irá acontecer
 * Poderá dar certo ou errado, mas irá acontecer.
 */

console.log('pedir uber')
let aceitar = true
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve ('Pedido aceito!')
    } else {
        return reject('Pedido negado!')
    }
})

console.log('aguardando')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('Finalizado.'))