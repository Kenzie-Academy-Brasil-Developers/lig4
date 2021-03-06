const main = document.querySelector('.main')
const body = document.body;
const mainContainer = document.querySelector('.main__container')
const score = document.getElementById('scoreBoard');
const audio = document.querySelector('#pokeball_sound')
const audio2 = document.querySelector('#musica_fundo')
const audio_vitoria = document.querySelector('#musica_vitoria')
const audio_menu = document.querySelector('#audio_menu')

const information = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu-game');

    const menuImg = document.createElement('img');
    menuImg.classList.add('menu-game__img');
    menuImg.src = './assets/images/pokemon-logo.png';

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-game__title');
    menuTitle.innerText = 'Lig4';

    const inputNameTitle = document.createElement('h2');
    inputNameTitle.classList.add('menu-game__titleH2')
    inputNameTitle.innerText = 'Insira os Nomes dos Jogadores:';
    inputNameTitle.innerText = 'Insira o Nome dos Jogadores:';

    const menuParagraph = document.createElement('p');
    menuParagraph.classList.add('menu-game__paragraph')
    menuParagraph.innerText = 'Seja bem-vindo(a)!';

    const inputNameForm = document.createElement('form');
    inputNameForm.classList.add('menu-game__form')

    const inputArray = [
                        'Player 1',
                        'Player 2'
                       ];

    let c = 1;

    inputArray.forEach( item => {
        const input = document.createElement('input');
        input.id = `player${c}`;
        input.classList.add('menu__input');
        input.placeholder = item;
        input.value = item;
        input.maxLength = '8';

        inputNameForm.appendChild(input);

        c++;
    });

    const optionsList = document.createElement('ul');
    optionsList.classList.add('menu-game__button-nest');

    const optionsArray = [
                          'Instruções',
                          'Start >'
                         ];

    c = 0;

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

    menu.appendChild(menuTitle);

    menu.appendChild(menuImg);
    menu.appendChild(menuTitle);
    menu.appendChild(menuParagraph);
    menu.appendChild(inputNameTitle);
    menu.appendChild(inputNameForm);
    menu.appendChild(optionsList);

    mainContainer.appendChild(menu);

    const player1Name = document.getElementById('player1');
    const player2Name = document.getElementById('player2');

    

    const buttonInstructions = document.getElementById('button0');
    const buttonStart = document.getElementById('button1');

    buttonInstructions.addEventListener('click', () => {
        audio_menu.volume = 0.1
        audio_menu.play()
        mainContainer.innerHTML = '';
        buildInstructions();
    });

    buttonStart.addEventListener('click', () => {
        audio_menu.volume = 0.1
        audio_menu.play()
        audio2.volume = 0.1
        audio2.play()
        mainContainer.innerHTML = '';
        buildPokeball();
        body.style.justifyContent = 'center';
    });
}

information();

const player1Name = document.getElementById('player1');
const player2Name = document.getElementById('player2');

window.onload = () => {
    mainContainer.style.animation = 'rising 5s';
};

const buildInstructions = () => {
    const instructionsDiv = document.createElement('div');
    instructionsDiv.classList.add('instructions__div');

    const instructionsTitle = document.createElement('h2');
    instructionsTitle.classList.add('instructions__tittle')
    instructionsTitle.innerText = 'Instruções';

    const instructionsArray = [
                               'No Lig-4, um jogador assume a Pokebola Vermelha e o outro assume a Pokebola Preta.',
                               'Os jogadores se alternam inserindo as Pokebolas em uma das 7 colunas de uma tabela 6x7.',
                               'O primeiro jogador que conseguir quatro de suas Pokebolas em uma linha (seja horizontal, vertical ou diagonal) vence.',
                               'O jogo pode terminar em empate quando todas as células estiverem preenchidas e nenhum jogador conseguir quatro peças em linha.',
                               ];

    let c = 1;

    instructionsDiv.appendChild(instructionsTitle);
    
    instructionsArray.forEach( item => {
        const instructionsItem = document.createElement('p');
        instructionsItem.classList.add('instructions__item');

        instructionsItem.innerText = `${c} - ${item}`;

        instructionsDiv.appendChild(instructionsItem);

        c++;
    });

    const backButton = document.createElement('button');
    backButton.id = 'backButton';
    backButton.classList.add('menu__button');
    backButton.innerText = '< Back';

    instructionsDiv.appendChild(backButton);

    mainContainer.appendChild(instructionsDiv);

    const backB = document.getElementById('backButton');
    
    backB.addEventListener('click', () => {
        audio_menu.volume = 0.15
        audio_menu.play()
        mainContainer.innerHTML = '';
        information();
    });

    const player1 = player1Name.value;
    const player2 = player2Name.value;
}

let scoreOneTitle = document.querySelector('.score1').innerHTML;
let scoreTwoTitle = document.querySelector('.score2').innerHTML;

const buildPokeball = () => {
    const nest = document.createElement('div');
    nest.id = 'pokeballStart';

    const pokeballButton = document.createElement('button');
    pokeballButton.id = 'generateGame';
    nest.appendChild(pokeballButton);
    mainContainer.appendChild(nest);

    const generateGameButton = document.getElementById('generateGame');

    generateGameButton.addEventListener('click', () => {
        body.style.justifyContent = 'space-evenly';
        mainContainer.innerHTML = '';
        audio.volume = 0.15
        audio.play();

        main.className = 'blink_me';

        mainContainer.style.pointerEvents = 'none';
        setTimeout(() => {
            mainContainer.style.pointerEvents = 'auto';
        }, 2700);

        body.classList.add('body__background');

        pokeballCurrent.style.display = 'flex';
        score.style.display = 'flex';

        scoreOneTitle = player1Name.value + scoreOneTitle;
        document.querySelector('.score1').innerHTML = scoreOneTitle;

        scoreTwoTitle = player2Name.value + scoreTwoTitle;
        document.querySelector('.score2').innerHTML = scoreTwoTitle;

        generateGame();
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
const textPlayerCurrent = document.createElement('p');

const player = document.createElement('div');
player.classList.add('pokeballPlayer');

const pokeballCurrentPlayerImage = document.createElement('img');
pokeballCurrentPlayerImage.src = 'assets/images/minpokeball.png';
pokeballCurrentPlayerImage.classList.add('current-pokeball');

player.appendChild(pokeballCurrentPlayerImage);
player.appendChild(textPlayerCurrent);

pokeballCurrent.appendChild(player);

let jogador = true
let cont = 5
let cont2 = 5
let cont3 = 5
let cont4 = 5
let cont5 = 5
let cont6 = 5
let cont7 = 5

mainContainer.addEventListener('click', function(evt) {
const coluna = evt.target
switch (coluna.id) {
    case 'bloco0-0':
        if(jogador){
            document.getElementById('bloco' + cont + '-0').className = 'rollout__animation'
            jogador = false
            winCondition(cont, 0, 'Player 1')
            winner(tabuleiro)
            draw()
            cont --
            
        }else{
            document.getElementById('bloco' + cont + '-0').className = 'rollout__animation2'
            jogador = true
            winCondition(cont, 0, 'Player 2')
            winner(tabuleiro)
            draw()
            
            cont --
        }
        
    break
    case 'bloco0-1':
        if(jogador){
            document.getElementById('bloco' + cont2 + '-1').className = 'rollout__animation'
            jogador = false
            winCondition(cont2, 1, 'Player 1')
            winner(tabuleiro)
            draw()
           
            cont2 --
        }else{
            document.getElementById('bloco' + cont2 + '-1').className = 'rollout__animation2'
            jogador = true
            winCondition(cont2, 1, 'Player 2')
            winner(tabuleiro)
            draw()
          
            cont2 --
        }
        
    break
    case 'bloco0-2':
        if(jogador){
            document.getElementById('bloco' + cont3 + '-2').className = 'rollout__animation'
            jogador = false
            winCondition(cont3, 2, 'Player 1')
            winner(tabuleiro)
            draw()
           
            cont3 --
        }else{
            document.getElementById('bloco' + cont3 + '-2').className = 'rollout__animation2'
            jogador = true
            winCondition(cont3, 2, 'Player 2')
            winner(tabuleiro)
            draw()
          
            cont3 --
        }
        
    break
    case 'bloco0-3':
        if(jogador){
            document.getElementById('bloco' + cont4 + '-3').className = 'rollout__animation'
            jogador = false
            winCondition(cont4, 3, 'Player 1')
            winner(tabuleiro)
            draw()
            cont4 --
        }else{
            document.getElementById('bloco' + cont4 + '-3').className = 'rollout__animation2'
            jogador = true
            winCondition(cont4, 3, 'Player 2')
            winner(tabuleiro)
            draw()
           
            cont4 --
        }
        
    break
    case 'bloco0-4':
        if(jogador){
            document.getElementById('bloco' + cont5 + '-4').className = 'rollout__animation'
            jogador = false
            winCondition(cont5, 4, 'Player 1')
            winner(tabuleiro)
            draw()
            cont5 --
        }else{
            document.getElementById('bloco' + cont5 + '-4').className = 'rollout__animation2'
            jogador = true
            winCondition(cont5, 4, 'Player 2')
            winner(tabuleiro)
            draw()
            cont5 --
        }
        
    break
    case 'bloco0-5':
        if(jogador){
            document.getElementById('bloco' + cont6 + '-5').className = 'rollout__animation'
            jogador = false
            winCondition(cont6, 5, 'Player 1')
            winner(tabuleiro)
            draw()
            cont6 --
        }else{
            document.getElementById('bloco' + cont6 + '-5').className = 'rollout__animation2'
            jogador = true
            winCondition(cont6, 5, 'Player 2')
            winner(tabuleiro)
            draw()
            cont6 --
        }
        
    break
    case 'bloco0-6':
        if(jogador){
            document.getElementById('bloco' + cont7 + '-6').className = 'rollout__animation'
            jogador = false
            winCondition(cont7, 6, 'Player 1')
            winner(tabuleiro)
            draw()
            cont7 --
        }else{
            document.getElementById('bloco' + cont7 + '-6').className = 'rollout__animation2'
            jogador = true
            winCondition(cont7, 6, 'Player 2')
            winner(tabuleiro)
            draw()
            cont7 --
        }
        
    break
    }

    const player1 = player1Name.value;
    const player2 = player2Name.value;

    if (jogador) {
        pokeballCurrentPlayerImage.src =  'assets/images/minpokeball.png';
        textPlayerCurrent.innerText = player1;

    } else {
        pokeballCurrentPlayerImage.src =  'assets/images/minultraball.png';
        textPlayerCurrent.innerText = player2;
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

let scoreboardOne = 0;
let scoreboardTwo = 0;

function scoreboard(currentPlayer) {
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

function winCondition(cont, posicao, cor){
    tabuleiro[cont].splice(posicao, 1, cor)
}

let indexArr = []
function winner(tabuleiro) {
    const coluna = tabuleiro[0].length - 3
    const linha = tabuleiro.length - 3

    for (let i = 0 ; i < tabuleiro.length; i++) {

        for(let j = 0; j < coluna; j++) {
           
            let current =  tabuleiro[i][j]
            
            if(current !== 0 && current === tabuleiro[i][j + 1] && current === tabuleiro[i][j+2] && current === tabuleiro[i][j + 3]) {
                if (current === 'Player 1') {
                    textWinner(player1Name.value);
                } else {
                    textWinner(player1Name.value);
                }
                
                scoreboard(current)
                indexArr.push(i,j,i,j+1,i,j+2,i,j+3)
                colorPokeballWin(indexArr)
                
            }
        }
    }

    for (let i = 0; i < linha; i++) {

        for(let j = 0; j < tabuleiro[0].length; j++) {
          
            let current = tabuleiro[i][j]

            if (current !== 0 && current === tabuleiro[i+1][j] && current === tabuleiro[i+2][j] && current === tabuleiro[i+3][j]) {
                if (current === 'Player 1') {
                    textWinner(player1Name.value);
                } else {
                    textWinner(player2Name.value);
                }
                
                scoreboard(current)
                indexArr.push(i,j,i+1,j,i+2,j,i+3,j)
                colorPokeballWin(indexArr)
               
            }     
        }
    }

    for (let i = 0; i < linha; i ++) {

        for (let j = 0 ; j < coluna; j++) {

            let current = tabuleiro[i][j]

            if (current !== 0 && current === tabuleiro[i+1][j+1] && current === tabuleiro[i+2][j+2] && current === tabuleiro[i+3][j+3]) {
                if (current === 'Player 1') {
                    textWinner(player1Name.value);
                } else {
                    textWinner(player2Name.value);
                }
                
                scoreboard(current)
                indexArr.push(i,j,i+1,j+1,i+2,j+2,i+3,j+3)
                colorPokeballWin(indexArr)
            }
        }
    }

    for (let i = 3; i < tabuleiro.length; i ++) {

        for (let j = 0 ; j < coluna; j++) {

            let current = tabuleiro[i][j]

            if (current !== 0 && current === tabuleiro[i-1][j+1] && current === tabuleiro[i-2][j+2] && current === tabuleiro[i-3][j+3]){ 
                if (current === 'Player 1') {
                    textWinner(player1Name.value);
                } else {
                    textWinner(player2Name.value);
                }

                scoreboard(current)
                indexArr.push(i,j,i-1,j+1,i-2,j+2,i-3,j+3)
                colorPokeballWin(indexArr)
            }
        }
    }
}

function textWinner(currentPlayer) {
    audio2.pause()
    audio_vitoria.volume = 0.15
    audio_vitoria.play()
    setTimeout(() => {
        audio_vitoria.pause()
        audio2.play()
    }, 3000);
    
    audio_vitoria.volume = 0.15;
    audio_vitoria.play();

    buildPopUp(`Parabéns ${currentPlayer}, você venceu!`);

    buildResetButton();

    mainContainer.style.pointerEvents = 'none';
}

const reset = document.querySelector('#reset');

const buildResetButton = () => {
    const reset__button = document.createElement('button');
    
    reset__button.id = 'reset__button';
    reset__button.innerText = 'Reset';
    reset.appendChild(reset__button);
}

const buildPopUp = (message) => {
    const backgroundDiv = document.createElement('div');
    backgroundDiv.id = 'backgroundDiv';
    backgroundDiv.classList.add('pop-up-background');
    backgroundDiv.style.display = 'inherit';

    const popUpDiv = document.createElement('div');
    popUpDiv.id = 'popUpDiv';
    popUpDiv.classList.add('pop-up__message');

    const popUpDivTitle = document.createElement('h2');
    popUpDivTitle.innerText = message;

    const xButton = document.createElement('button');
    xButton.id = 'escButton';
    xButton.classList.add('x-button');
    xButton.innerText = 'x';

    popUpDiv.appendChild(popUpDivTitle);
    popUpDiv.appendChild(xButton);
    
    backgroundDiv.appendChild(popUpDiv);

    body.appendChild(backgroundDiv);

    const escGame = document.getElementById('escButton');
    const bkgDiv = document.getElementById('backgroundDiv');
    
    escGame.addEventListener('click', () => {
        body.removeChild(bkgDiv);
    });
}

function textDraw() {
    audio2.pause()
    audio_vitoria.volume = 0.15
    audio_vitoria.play()
    setTimeout(() => {
        audio_vitoria.pause()
        audio2.play()
    }, 3000);
    
    audio_vitoria.volume = 0.15;
    audio_vitoria.play();

    mainContainer.style.pointerEvents = 'none';

    buildPopUp('Houve um empate!')

    buildResetButton();
}

let count = 0

function draw() {
    count++

    if (count === 42) {
        textDraw()
    }
}


function colorPokeballWin(array){
    let first = document.getElementsByClassName('linha')[array[0]].childNodes[array[1]]
    let second = document.getElementsByClassName('linha')[array[2]].childNodes[array[3]]
    let third = document.getElementsByClassName('linha')[array[4]].childNodes[array[5]]
    let fourth = document.getElementsByClassName('linha')[array[6]].childNodes[array[7]]
    let arr = [first,second,third,fourth];
   arr.forEach(index =>{
    index.classList.add('colorWinner')
   })
   
      
    console.log(array)
    array.splice(0,array.length)
    console.log(array)
}

const result = document.getElementById('result');

reset.addEventListener('click', function(){
    audio_menu.volume = 0.1
    audio_menu.play()
    jogador = true
    count = 0
    cont = 5
    cont2 = 5
    cont3 = 5
    cont4 = 5
    cont5 = 5
    cont6 = 5
    cont7 = 5
    
    tabuleiro = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
    [29,30,31,32,33,34,35],
    [36,37,28,39,40,41,42]
    ];
    
    reset.innerHTML = ''

    pokeballCurrentPlayerImage.src = 'assets/images/minpokeball.png';
    textPlayerCurrent.innerText = player1Name.value;
    mainContainer.style.pointerEvents = 'auto';
    mainContainer.innerHTML = ''
    generateGame()
})

