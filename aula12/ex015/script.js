function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 6) {
                // bebê
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/kid-m.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'imagens/adole-m.png')
            }
              else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else{
                // Idoso
                img.setAttribute('src', 'imagens/velho.png')
            }          
        }  
        else{
        gênero = 'Mulher'
        if (idade >=0 && idade < 6) {
            // bebê
            img.setAttribute('src', 'imagens/bebe-f.png')
        } else if (idade < 12) {
            //criança
            img.setAttribute('src', 'imagens/kid-f.png')
        } else if (idade < 18) {
            //adolescente
            img.setAttribute('src', 'imagens/adole-f.png')
        }
          else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'imagens/mulher.png')
        } else{
            // Idoso
            img.setAttribute('src', 'imagens/velha.png')
        }          
    }
    
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
    res.appendChild(img)
}
}