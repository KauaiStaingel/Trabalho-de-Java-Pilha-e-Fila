
let ouFilaouPilha = []

function Push(){
    let resposta = document.getElementById('res')
    
        let itemAdd = document.getElementById('addItemNumber').value

        ouFilaouPilha.push(itemAdd)
 
    resposta.innerHTML = ""
    for(let i = 0; i < ouFilaouPilha.length;i++){
        resposta.innerHTML += ` ${ouFilaouPilha[i]}  `
    }
}
function Pop(){
    let tipoEscolhido = document.getElementsByName('bPF')
    let resposta = document.getElementById('res')
    if(tipoEscolhido[0].checked){

        ouFilaouPilha.pop()

    } else {
        ouFilaouPilha.shift()
    }
    resposta.innerHTML = ""
    for(let i = 0; i < ouFilaouPilha.length;i++){
        resposta.innerHTML += ` ${ouFilaouPilha[i]}  `
    }
}
