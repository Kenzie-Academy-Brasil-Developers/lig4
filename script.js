const main = document.querySelector('.main__container')

for(let i = 0; i < 6; i ++){
    const linha = document.createElement('section')
    linha.className = 'linha'
    linha.id = 'linha' + i
    main.appendChild(linha)
    for(let j = 0; j < 7; j++){
        const bloco = document.createElement('div')
        bloco.className = 'linha__bloco'
        bloco.id = 'bloco' + i + '-' + j
        linha.appendChild(bloco)
    }
}

let jogador = true
let cont = 5
let cont2 = 5
let cont3 = 5
let cont4 = 5
let cont5 = 5
let cont6 = 5
let cont7 = 5

const header = document.querySelector('.header')

const botao_inicia = document.querySelector('#generateGame')
botao_inicia.addEventListener('click', function(){
    console.log('oi')
    header.style.display = 'none'
    botao_inicia.style.display = 'none'
    main.style.opacity = '100%'
})


main.addEventListener('click', function(evt){
const coluna = evt.target
console.log(coluna)


switch (coluna.id) {
    case 'bloco0-0':
        if(jogador){
            document.getElementById('bloco' + cont + '-0').style.backgroundColor = 'red'
            jogador = false
            cont --
        }else{
            document.getElementById('bloco' + cont + '-0').style.backgroundColor = 'black'
            jogador = true
            cont --
        }
        
    break
    case 'bloco0-1':
        if(jogador){
            document.getElementById('bloco' + cont2 + '-1').style.backgroundColor = 'red'
            jogador = false
            cont2 --
        }else{
            document.getElementById('bloco' + cont2 + '-1').style.backgroundColor = 'black'
            jogador = true
            cont2 --
        }
        
    break
    case 'bloco0-2':
        if(jogador){
            document.getElementById('bloco' + cont3 + '-2').style.backgroundColor = 'red'
            jogador = false
            cont3 --
        }else{
            document.getElementById('bloco' + cont3 + '-2').style.backgroundColor = 'black'
            jogador = true
            cont3 --
        }
        
    break
    case 'bloco0-3':
        if(jogador){
            document.getElementById('bloco' + cont4 + '-3').style.backgroundColor = 'red'
            jogador = false
            cont4 --
        }else{
            document.getElementById('bloco' + cont4 + '-3').style.backgroundColor = 'black'
            jogador = true
            cont4 --
        }
        
    break
    case 'bloco0-4':
        if(jogador){
            document.getElementById('bloco' + cont5 + '-4').style.backgroundColor = 'red'
            jogador = false
            cont5 --
        }else{
            document.getElementById('bloco' + cont5 + '-4').style.backgroundColor = 'black'
            jogador = true
            cont5 --
        }
        
    break
    case 'bloco0-5':
        if(jogador){
            document.getElementById('bloco' + cont6 + '-5').style.backgroundColor = 'red'
            jogador = false
            cont6 --
        }else{
            document.getElementById('bloco' + cont6 + '-5').style.backgroundColor = 'black'
            jogador = true
            cont6 --
        }
        
    break
    case 'bloco0-6':
        if(jogador){
            document.getElementById('bloco' + cont7 + '-6').style.backgroundColor = 'red'
            jogador = false
            cont7 --
        }else{
            document.getElementById('bloco' + cont7 + '-6').style.backgroundColor = 'black'
            jogador = true
            cont7 --
        }
        
    break
   
  }

})

let tabuleiro = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
    [29,30,31,32,33,34,35],
    [36,37,28,39,40,41,42]
]
function winCondition(cont, posicao, cor){
    for(let i = 0; i < 1; i ++){
        tabuleiro[cont].splice(posicao, 1, cor)
    }
   
    console.log(tabuleiro)
}

