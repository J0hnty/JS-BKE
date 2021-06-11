console.log('Js loaded');


let playerOneButtonElement = document.querySelector('.buttonPlayer1')
let playerTwoButtonElement = document.querySelector('.buttonPlayer2')
let vakjes = document.querySelector('.game-board')

playerOneButtonElement.addEventListener('click', handelClick);
playerTwoButtonElement.addEventListener('click', handelClick);
vakjes.addEventListener('click', handelClick)

function handelClick(event) {
    const element = event.target

    switch (element.className) {
        case 'buttonPlayer1':
            buttonOne()
            break;
        case 'buttonPlayer2':
            buttonTwo()
            break;    
        case 'game-board':
            Game()
            break;        
    
        default:
            console.log('nigger');
            break;
    }
    

}

function buttonOne() {
        
    console.log(`knop 1 is gedrukt`);

}

function buttonTwo() {

    console.log(`knop 2 is gedrukt`)

}

function Game(event) {
    let vakje = event.target;

    vakje.innerHTML ='X'

}
