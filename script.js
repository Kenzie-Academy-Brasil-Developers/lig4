const audio = document.querySelector('#pokeball_sound')
const audio2 = document.querySelector('#musica_fundo')
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
const pokeball_inicial = document.querySelector('#pokeball_start')
const meowth = document.querySelector('#meowth')
const balao = document.querySelector('#balao')

botao_inicia.addEventListener('click', function(){
    header.style.display = 'none'
    botao_inicia.style.display = 'none'
    pokeball_inicial.style.display = 'none'
    meowth.style.backgroundImage = 'url(team.png)'
    meowth.style.bottom = '0px'
    meowth.style.left = '2px'
    balao.style.backgroundImage = 'url(balaodefala.png)'
    balao.style.width = '500px'
    balao.style.height = '449px'
    const blocotext = document.createElement("div")
    blocotext.style.width = '300px'
    blocotext.style.height = '300px'
    blocotext.id = 'blocotext'
    blocotext.innerText = "No Lig-4, um jogador assume a cor Vermelha e o outro assume a cor Preta. Os jogadores se alternam inserindo suas peças em uma das 7 colunas de uma tabela 7x6. O primeiro jogador que conseguir quatro de suas peças em uma linha (seja horizontal, vertical ou diagonal) vence. (Clique em um dos blocos da primeira linha para começar a jogar)"
    balao.append(blocotext)
    main.style.opacity = '100%'
    audio.play()
})


main.addEventListener('click', function(evt){
const coluna = evt.target
audio2.play()
switch (coluna.id) {
    case 'bloco0-0':
        if(jogador){
            document.getElementById('bloco' + cont + '-0').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont, 0, 'red')
            cont --
        }else{
            document.getElementById('bloco' + cont + '-0').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont, 0, 'black')
            cont --
        }
        
    break
    case 'bloco0-1':
        if(jogador){
            document.getElementById('bloco' + cont2 + '-1').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont2, 1, 'red')
            cont2 --
        }else{
            document.getElementById('bloco' + cont2 + '-1').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont2, 1, 'black')
            cont2 --
        }
        
    break
    case 'bloco0-2':
        if(jogador){
            document.getElementById('bloco' + cont3 + '-2').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont3, 2, 'red')
            cont3 --
        }else{
            document.getElementById('bloco' + cont3 + '-2').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont3, 2, 'black')
            cont3 --
        }
        
    break
    case 'bloco0-3':
        if(jogador){
            document.getElementById('bloco' + cont4 + '-3').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont4, 3, 'red')
            cont4 --
        }else{
            document.getElementById('bloco' + cont4 + '-3').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont4, 3, 'black')
            cont4 --
        }
        
    break
    case 'bloco0-4':
        if(jogador){
            document.getElementById('bloco' + cont5 + '-4').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont5, 4, 'red')
            cont5 --
        }else{
            document.getElementById('bloco' + cont5 + '-4').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont5, 4, 'black')
            cont5 --
        }
        
    break
    case 'bloco0-5':
        if(jogador){
            document.getElementById('bloco' + cont6 + '-5').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont6, 5, 'red')
            cont6 --
        }else{
            document.getElementById('bloco' + cont6 + '-5').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont6, 5, 'black')
            cont6 --
        }
        
    break
    case 'bloco0-6':
        if(jogador){
            document.getElementById('bloco' + cont7 + '-6').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont7, 6, 'red')
            cont7 --
        }else{
            document.getElementById('bloco' + cont7 + '-6').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont7, 6, 'black')
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

