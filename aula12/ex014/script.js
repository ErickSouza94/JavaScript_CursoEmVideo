function carregar(){
var msg = window.document.getElementById ('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutes = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutes} minutos.`

if(hora >= 0 && hora < 12){
    msg.innerHTML += ' Bom dia!'
    img.src = 'imagens/manha.png'
    document.body.style.background = '#f1ddbd'
} else if (hora >= 12 && hora <= 18){
    msg.innerHTML += ' Boa tarde!'
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#84515d'
} else{
    msg.innerHTML += ' Boa noite!'
    img.src = 'imagens/noite.png'
    document.body.style.background = '#080705'
}
}