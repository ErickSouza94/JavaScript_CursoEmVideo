const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
const coresIndex = 0

const luzSinal = (event) => {
    if(event.target.id == 'red'){
        acenderRed()
    }
    if(event.target.id == 'yellow'){
        acenderYellow()
    }
    if(event.target.id == 'green'){
        acenderGreen()
    }
   
}

function acenderRed(){
    img.src = './img/vermelho.png'
}

function acenderYellow(){
    img.src = './img/amarelo.png' 
}


function acenderGreen(){
    img.src = './img/verde.png' 
}



buttons.addEventListener('click', luzSinal)

