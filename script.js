const audio = document.querySelector('audio')
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
    header.style.display = 'none'
    botao_inicia.style.display = 'none'
    main.style.opacity = '100%'
    audio.play()
})


main.addEventListener('click', function(evt){
const coluna = evt.target

switch (coluna.id) {
    case 'bloco0-0':
        if(jogador){
            document.getElementById('bloco' + cont + '-0').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont, 0, 'red')
            winner(tabuleiro)
            cont --
            
        }else{
            document.getElementById('bloco' + cont + '-0').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont, 0, 'black')
            winner(tabuleiro)
            cont --
        }
        
    break
    case 'bloco0-1':
        if(jogador){
            document.getElementById('bloco' + cont2 + '-1').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont2, 1, 'red')
            winner(tabuleiro)
            cont2 --
        }else{
            document.getElementById('bloco' + cont2 + '-1').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont2, 1, 'black')
            winner(tabuleiro)
            cont2 --
        }
        
    break
    case 'bloco0-2':
        if(jogador){
            document.getElementById('bloco' + cont3 + '-2').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont3, 2, 'red')
            winner(tabuleiro)
            cont3 --
        }else{
            document.getElementById('bloco' + cont3 + '-2').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont3, 2, 'black')
            winner(tabuleiro)
            cont3 --
        }
        
    break
    case 'bloco0-3':
        if(jogador){
            document.getElementById('bloco' + cont4 + '-3').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont4, 3, 'red')
            winner(tabuleiro)
            cont4 --
        }else{
            document.getElementById('bloco' + cont4 + '-3').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont4, 3, 'black')
            winner(tabuleiro)
            cont4 --
        }
        
    break
    case 'bloco0-4':
        if(jogador){
            document.getElementById('bloco' + cont5 + '-4').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont5, 4, 'red')
            winner(tabuleiro)
            cont5 --
        }else{
            document.getElementById('bloco' + cont5 + '-4').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont5, 4, 'black')
            winner(tabuleiro)
            cont5 --
        }
        
    break
    case 'bloco0-5':
        if(jogador){
            document.getElementById('bloco' + cont6 + '-5').style.backgroundImage = "url('assets/css/images/pokeball.png')"
            jogador = false
            winCondition(cont6, 5, 'red')
            winner(tabuleiro)
            cont6 --
        }else{
            document.getElementById('bloco' + cont6 + '-5').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont6, 5, 'black')
            winner(tabuleiro)
            cont6 --
        }
        
    break
    case 'bloco0-6':
        if(jogador){
            document.getElementById('bloco' + cont7 + '-6').style.backgroundColor = 'red'
            jogador = false
            winCondition(cont7, 6, 'red')
            winner(tabuleiro)
            cont7 --
        }else{
            document.getElementById('bloco' + cont7 + '-6').style.backgroundImage = "url('assets/css/images/ultraball.png')"
            jogador = true
            winCondition(cont7, 6, 'black')
            winner(tabuleiro)
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


function winner(){

const coluna = tabuleiro[0].length - 3
const linha = tabuleiro.length - 3

    for(let i = 0 ; i < tabuleiro.length;i++){

        for(let j = 0; j < coluna; j++){
           
            let current =  tabuleiro[i][j]

            if(current !== 0)

            if(current === tabuleiro[i][j+1] && current === tabuleiro[i][j+2] && current === tabuleiro[i][j+3]){
                textWinner()
            } 
        }
    }

    for(let i = 0; i < linha;i++){

        for(let j = 0; j < tabuleiro[0].length; j++){
          

            let current = tabuleiro[i][j]

            if(current != 0){

                if( current === tabuleiro[i+1][j] && current === tabuleiro[i+2][j] && current === tabuleiro[i+3][j])
                textWinner()
            }
             
        }
    }




    for(let i = 0; i < linha; i ++){

        for(let j = 0 ; j < coluna; j++){

            let current = tabuleiro[i][j]

            if(current != 0){

                if(current === tabuleiro[i+1][j+1] && current === tabuleiro[i+2][j+2] && current === tabuleiro[i+3][j+3]){
                    textWinner()
                }
            }
        }
    }

    for(let i = 2; i < tabuleiro.length; i ++){

        for(let j = 0 ; j < coluna; j++){

            let current = tabuleiro[i][j]

            if(current != 0){

                if(current === tabuleiro[i-1][j+1] && current === tabuleiro[i-2][j+2] && current === tabuleiro[i-3][j+3]){
                    textWinner()
                }
            }
        }
    }

}


function textWinner(){

const text = document.getElementById('result')

text.innerText = '';
text.innerText = 'Parabéns você venceu'
}
