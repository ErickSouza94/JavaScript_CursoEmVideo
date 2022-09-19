var idade = 17
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if /*Senão, se...*/(idade < 18 || idade > 65) /*Se idade menor 18 ou(||) maior que 65*/{
     {
        console.log('Voto é opcional')
    }
} else /* Senão */{
    console.log('Voto é obrigatório')
} 