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
            document.getElementById('bloco' + cont + '-0').classList.add('vermelho')
            // winner()
            jogador = false
            cont --
        }else{
            document.getElementById('bloco' + cont + '-0').classList.add('preto')
            // winner()
            jogador = true
            cont --
        }
        
    break
    case 'bloco0-1':
        if(jogador){
            document.getElementById('bloco' + cont2 + '-1').classList.add('vermelho')
            // winner()
            jogador = false
            cont2 --
        }else{
            document.getElementById('bloco' + cont2 + '-1').classList.add('preto')
            // winner()
            jogador = true
            cont2 --
        }
        
    break
    case 'bloco0-2':
        if(jogador){
            document.getElementById('bloco' + cont3 + '-2').classList.add('vermelho')
            // winner()
            jogador = false
            cont3 --
        }else{
            document.getElementById('bloco' + cont3 + '-2').classList.add('preto')
            // winner()
            jogador = true
            cont3 --
        }
        
    break
    case 'bloco0-3':
        if(jogador){
            document.getElementById('bloco' + cont4 + '-3').classList.add('vermelho')
            // winner()
            jogador = false
            cont4 --
        }else{
            document.getElementById('bloco' + cont4 + '-3').classList.add('preto')
            // winner()
            jogador = true
            cont4 --
        }
        
    break
    case 'bloco0-4':
        if(jogador){
            document.getElementById('bloco' + cont5 + '-4').classList.add('vermelho')
            // winner()
            jogador = false
            cont5 --
        }else{
            document.getElementById('bloco' + cont5 + '-4').classList.add('preto')
            // winner()
            jogador = true
            cont5 --
        }
        
    break
    case 'bloco0-5':
        if(jogador){
            document.getElementById('bloco' + cont6 + '-5').classList.add('vermelho')
            // winner()
            jogador = false
            cont6 --
        }else{
            document.getElementById('bloco' + cont6 + '-5').classList.add('preto')
            // winner()
            jogador = true
            cont6 --
        }
        
    break
    case 'bloco0-6':
        if(jogador){
            document.getElementById('bloco' + cont7 + '-6').classList.add('vermelho')
            // winner()
            jogador = false
            cont7 --
        }else{
            document.getElementById('bloco' + cont7 + '-6').classList.add('preto')
            // winner()
            jogador = true
            cont7 --
        }
        
    break
   
  }
winner();
})


function winner(){


let teste = document.getElementsByClassName('linha')
let teste2 = document.getElementsByClassName('linha__bloco')

for(let i = 0; i < teste.length;i++){
    
    for(let j = 0; j < teste2;j++){
        console.log(teste2[j])
    }   
    
  
}
// console.log(teste)
// if()
}
winner()
// console.log()
