const main = document.querySelector('.main')
const body = document.body;
const mainContainer = document.querySelector('.main__container')
const score = document.getElementById('scoreBoard');

const audio = document.querySelector('#pokeball_sound')
const audio2 = document.querySelector('#musica_fundo')

const information = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu-game');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-game__title')
    menuTitle.innerText = 'Lig4';

    const menuImg = document.createElement('img');
    menuImg.classList.add('menu-game__img');
    menuImg.src = './assets/css/images/pokemon-logo.png';

    const menuParagraph = document.createElement('p');
    menuParagraph.innerText = 'Seja bem-vindo(a)!';

    const optionsList = document.createElement('ul');
    optionsList.classList.add('menu-game__button-nest')

    const optionsArray = ['Instruções',
                          'Start >'
                         ];
    let c = 0;

    optionsArray.forEach( item => {
        const optionsItem = document.createElement('li');
        optionsItem.classList.add('options__items');
        
        const navButton = document.createElement('button');
        navButton.id = `button${c}`;
        navButton.classList.add('menu__button');

        navButton.innerText = item;
        
        optionsItem.appendChild(navButton);

        optionsList.appendChild(optionsItem);

        c++;
    });

    menu.appendChild(menuImg);
    menu.appendChild(menuTitle);
    menu.appendChild(menuParagraph);
    menu.appendChild(optionsList);

    mainContainer.appendChild(menu);
}

information();

window.onload = () => {
    mainContainer.style.animation = 'rising 5s';
};

const buttonInstructions = document.getElementById('button0');
const buttonStart = document.getElementById('button1');

buttonInstructions.addEventListener('click', () => {
    mainContainer.innerHTML = '';
    buildInstructions();
})

buttonStart.addEventListener('click', () => {
    mainContainer.innerHTML = '';
    buildPokeball();
});

const buildInstructions = () => {
    const instructionsDiv = document.createElement('div');
    instructionsDiv.classList.add('instructions__div');

    const instructionsTitle = document.createElement('h2');
    instructionsTitle.innerText = 'Instruções do Jogo';

    const instructionsArray = ['No Lig-4, um jogador assume a Pokebola Vermelha e o outro assume a Pokebola Preta.',
                               'Os jogadores se alternam inserindo as Pokebolas em uma das 7 colunas de uma tabela 6x7.',
                               'O primeiro jogador que conseguir quatro de suas Pokebolas em uma linha (seja horizontal, vertical ou diagonal) vence.',
                               'O jogo pode terminar em empate quando todas as células estiverem preenchidas e nenhum jogador conseguir quatro peças em linha.',
                               ];

    let c = 1;

    instructionsDiv.appendChild(instructionsTitle);
    
    instructionsArray.forEach( item => {
        const instructionsItem = document.createElement('p');
        instructionsItem.classList.add('instructions__item');
        instructionsItem.innerText = `${c}- ${item}`;

        instructionsDiv.appendChild(instructionsItem);

        c++;
    });

    
    instructionsDiv.appendChild(buttonStart);
    mainContainer.appendChild(instructionsDiv);

    buttonStart.addEventListener('click', () => {
        mainContainer.innerHTML = '';
        mainContainer.style.animation = 'rising 5s';
        buildPokeball();
    }); 
}

const buildPokeball = () => {
    const nest = document.createElement('div');
    nest.id = 'pokeballStart';

    const pokeballButton = document.createElement('button');
    pokeballButton.id = 'generateGame';
    pokeballButton.innerText = '>';

    nest.appendChild(pokeballButton);
    mainContainer.appendChild(nest);

    const startButton = document.getElementById('generateGame');

    startButton.addEventListener('click', () => {
        mainContainer.innerHTML = '';

        audio.play();

        main.className = 'blink_me';

        body.classList.add('body__background');

        mainContainer.append(generateGame());

        pokeballCurrent.style.display = 'flex';
        score.style.display = 'flex';
    });
}

const generateGame = () => {
    for (let i = 0; i < 6; i ++) {
        const linha = document.createElement('section')

        linha.className = 'linha'
        linha.id = 'linha' + i

        mainContainer.appendChild(linha)

        for (let j = 0; j < 7; j++) {
            const bloco = document.createElement('div')

            bloco.className = 'linha__bloco'
            bloco.id = 'bloco' + i + '-' + j

            linha.appendChild(bloco)
        }
    }
}

const pokeballCurrent = document.querySelector('#pokeballCurrent')
const player = document.createElement('div');
const textPlayerCurrent = document.createElement('p');
player.classList.add('pokeballPlayer');
player.style.backgroundImage = "url('assets/css/images/minpokeball.png')";
textPlayerCurrent.innerText = 'Player 1';
pokeballCurrent.appendChild(player);
pokeballCurrent.appendChild(textPlayerCurrent);

let jogador = true
let cont = 5
let cont2 = 5
let cont3 = 5
let cont4 = 5
let cont5 = 5
let cont6 = 5
let cont7 = 5

mainContainer.addEventListener('click', function(evt){
const coluna = evt.target
audio2.play()
switch (coluna.id) {
    case 'bloco0-0':
        if(jogador){
            document.getElementById('bloco' + cont + '-0').style.backgroundImage = "url('assets/css/images/pokeball-mobile.png')"
            jogador = false
            winCondition(cont, 0, 'Player 1')
            winner(tabuleiro)
            draw()
            cont --
            
        }else{
            document.getElementById('bloco' + cont + '-0').style.backgroundImage = "url('assets/css/images/ultraball-mobile.png')"
            jogador = true
            winCondition(cont, 0, 'Player 2')
            winner(tabuleiro)
            draw()
            
            cont --
        }
        
    break
    case 'bloco0-1':
        if(jogador){
            document.getElementById('bloco' + cont2 + '-1').style.backgroundImage = "url('assets/css/images/pokeball-mobile.png')"
            jogador = false
            winCondition(cont2, 1, 'Player 1')
            winner(tabuleiro)
            draw()
           
            cont2 --
        }else{
            document.getElementById('bloco' + cont2 + '-1').style.backgroundImage = "url('assets/css/images/ultraball-mobile.png')"
            jogador = true
            winCondition(cont2, 1, 'Player 2')
            winner(tabuleiro)
            draw()
          
            cont2 --
        }
        
    break
    case 'bloco0-2':
        if(jogador){
            document.getElementById('bloco' + cont3 + '-2').style.backgroundImage = "url('assets/css/images/pokeball-mobile.png')"
            jogador = false
            winCondition(cont3, 2, 'Player 1')
            winner(tabuleiro)
            draw()
           
            cont3 --
        }else{
            document.getElementById('bloco' + cont3 + '-2').style.backgroundImage = "url('assets/css/images/ultraball-mobile.png')"
            jogador = true
            winCondition(cont3, 2, 'Player 2')
            winner(tabuleiro)
            draw()
          
            cont3 --
        }
        
    break
    case 'bloco0-3':
        if(jogador){
            document.getElementById('bloco' + cont4 + '-3').style.backgroundImage = "url('assets/css/images/pokeball-mobile.png')"
            jogador = false
            winCondition(cont4, 3, 'Player 1')
            winner(tabuleiro)
            draw()
            cont4 --
        }else{
            document.getElementById('bloco' + cont4 + '-3').style.backgroundImage = "url('assets/css/images/ultraball-mobile.png')"
            jogador = true
            winCondition(cont4, 3, 'Player 2')
            winner(tabuleiro)
            draw()
           
            cont4 --
        }
        
    break
    case 'bloco0-4':
        if(jogador){
            document.getElementById('bloco' + cont5 + '-4').style.backgroundImage = "url('assets/css/images/pokeball-mobile.png')"
            jogador = false
            winCondition(cont5, 4, 'Player 1')
            winner(tabuleiro)
            draw()
            cont5 --
        }else{
            document.getElementById('bloco' + cont5 + '-4').style.backgroundImage = "url('assets/css/images/ultraball-mobile.png')"
            jogador = true
            winCondition(cont5, 4, 'Player 2')
            winner(tabuleiro)
            draw()
            cont5 --
        }
        
    break
    case 'bloco0-5':
        if(jogador){
            document.getElementById('bloco' + cont6 + '-5').style.backgroundImage = "url('assets/css/images/pokeball-mobile.png')"
            jogador = false
            winCondition(cont6, 5, 'Player 1')
            winner(tabuleiro)
            draw()
            cont6 --
        }else{
            document.getElementById('bloco' + cont6 + '-5').style.backgroundImage = "url('assets/css/images/ultraball-mobile.png')"
            jogador = true
            winCondition(cont6, 5, 'Player 2')
            winner(tabuleiro)
            draw()
            cont6 --
        }
        
    break
    case 'bloco0-6':
        if(jogador){
            document.getElementById('bloco' + cont7 + '-6').style.backgroundImage = "url('assets/css/images/pokeball-mobile.png')"
            jogador = false
            winCondition(cont7, 6, 'Player 1')
            winner(tabuleiro)
            draw()
            cont7 --
        }else{
            document.getElementById('bloco' + cont7 + '-6').style.backgroundImage = "url('assets/css/images/ultraball-mobile.png')"
            jogador = true
            winCondition(cont7, 6, 'Player 2')
            winner(tabuleiro)
            draw()
            cont7 --
        }
        
    break
   
  }

  if (jogador) {

    player.style.backgroundImage =  "url('assets/css/images/minpokeball.png')"
    
    textPlayerCurrent.innerText = 'Player 1';

    } else {
    player.style.backgroundImage =  "url('assets/css/images/minultraball.png')"
    textPlayerCurrent.innerText = 'Player 2';
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
   
}

function winner(tabuleiro) {
    const coluna = tabuleiro[0].length - 3
    const linha = tabuleiro.length - 3

    for (let i = 0 ; i < tabuleiro.length; i++) {

        for(let j = 0; j < coluna; j++) {
           
            let current =  tabuleiro[i][j]

            if(current !== 0 && current === tabuleiro[i][j + 1] && current === tabuleiro[i][j+2] && current === tabuleiro[i][j + 3]) {
                textWinner(current)
                scoreboard(current)
            }
            
        }
    }

    for (let i = 0; i < linha; i++) {

        for(let j = 0; j < tabuleiro[0].length; j++) {
          
            let current = tabuleiro[i][j]

            if (current !== 0 && current === tabuleiro[i+1][j] && current === tabuleiro[i+2][j] && current === tabuleiro[i+3][j]) {
                textWinner(current)
                scoreboard(current)
            }     
        }
    }

    for (let i = 0; i < linha; i ++) {

        for (let j = 0 ; j < coluna; j++) {

            let current = tabuleiro[i][j]

            if (current !== 0 && current === tabuleiro[i+1][j+1] && current === tabuleiro[i+2][j+2] && current === tabuleiro[i+3][j+3]) {
                textWinner(current)
                scoreboard(current)
            }
        }
    }

    for (let i = 2; i < tabuleiro.length; i ++) {

        for (let j = 0 ; j < coluna; j++) {

            let current = tabuleiro[i][j]

            if (current !== 0 && current === tabuleiro[i-1][j+1] && current === tabuleiro[i-2][j+2] && current === tabuleiro[i-3][j+3]){ 
                textWinner(current)
                scoreboard(current)
              
            }
        }
    }
}

function textWinner(currentPlayer) {

    const text = document.getElementById('result')

    text.innerText = '';
    text.innerText = `Parabéns ${currentPlayer}, você venceu!`;
    mainContainer.style.pointerEvents = 'none';
}

function textDraw() {
    const text = document.getElementById('result');
    text.innerText  = '';
    text.innerText  = 'Houve um empate'
}

let count = 0;

function draw() {
        count++

    if (count === 42) {
        textDraw()
    }
}


let scoreboardOne = 0;
let scoreboardTwo = 0;


function scoreboard(currentPlayer){

const scoreOne = document.getElementById('score__scoreOne')
const scoreTwo = document.getElementById('score__scoreTwo')

   if(currentPlayer === 'Player 1'){
       scoreboardOne++
       scoreOne.innerText = scoreboardOne
   }

   if(currentPlayer === 'Player 2'){
       scoreboardTwo++
       scoreTwo.innerText =  scoreboardTwo
   }
   
}

let numbersArr = 0; 

function resetTabuleiro(arrTabuleiro){

for(let i = 0; i < arrTabuleiro.length;i++){

    for(let j = 0; j < arrTabuleiro[i].length;j++){
        numbersArr++
        arrTabuleiro[i][j] = numbersArr
    }
}
}
// resetTabuleiro(tabuleiro);
