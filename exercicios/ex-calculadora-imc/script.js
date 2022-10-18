const calcular = document.getElementById ('calcular')

calcular.addEventListener('click', calcImc);

function calcImc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const res = document.getElementById('result')

    if(nome !== '' || altura !== 0 || peso !== 0) {
        const valorIMC = (peso / (altura * altura)).toFixed(1) 

    let imc = ''

    if (valorIMC < 18.5) {
        imc = 'Você está abaixo do peso'
    }

    else if(valorIMC >= 18.5 && valorIMC < 24.9){
        imc = 'Você está no peso normal!'
    } else {
        imc = 'Você está ACIMA DO PESO!'
    }
        res.innerHTML = `${nome}, seu peso é de ${peso}kg e altura ${altura}. Logo seu IMC é ${valorIMC}. ${imc}`

    } 
    if (nome == '' || altura == 0 || peso == 0) {
        alert('Preencha os campos!')
        res.innerHTML = ''
    }
}


