function contar(){

var ini = document.getElementById('idini')
var fim = document.getElementById('idfim')
var passo = document.getElementById('idpasso')
var res = document.getElementById('res')

var i = Number(ini.value)
var f = Number(fim.value)
var p = Number(passo.value)
var c = ''
res.innerHTML = ''
if(i == 0 || f == 0 || p <= 0){
    alert('Valores inválidos')

} else if (i < f) {
    // CONTAGEM CRESCENTE //
    
    for(c = i; c <= f ; c += p){
        
        res.innerHTML += ` ${c}`
    }
} 
 
else  {
    // CONTAGEM DECRESCENTE //
    
    for(c = i; c >= f ; c -= p)
        res.innerHTML += ` ${c}`
    
}

    ini.focus()

    
}
