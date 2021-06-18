console.log('Js loaded');


let playerOneButtonElement = document.querySelector('.buttonPlayer1')
let playerTwoButtonElement = document.querySelector('.buttonPlayer2')
let vakjes = document.querySelector('.game-board')

let model =new Array (9);
for (let i = 0; i < model.length; i++) {
    model[i] ='leeg';
}

let speler1= new Speler("Jan", true, "X");
let speler2= new Speler("Piet", false, "O"); 
console.log(speler1.getName());

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
            console.log('nigber');
            Game(event)
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
    let vakjes=event.target;
    vakjes.innerHTML="X"
    let index=vakjes.id;
    model [index]="X";
    console.log(model);
    isWinnaar();

}

function isWinnaar() {
    if (model[0]==="X"&& model[1]==="X" && model[2]==="X") {
        
        alert('Winnaar')
    }
    if (model[3]==="X"&& model[4]==="X" && model[5]==="X") {
        
        alert('Winnaar')
    }
    if (model[6]==="X"&& model[7]==="X" && model[8]==="X") {
        
        alert('Winnaar')
    }
    if (model[0]==="X"&& model[3]==="X" && model[6]==="X") {
        
        alert('Winnaar')
    }
    if (model[1]==="X"&& model[4]==="X" && model[7]==="X") {
        
        alert('Winnaar')
    }
    if (model[2]==="X"&& model[5]==="X" && model[8]==="X") {
        
        alert('Winnaar')
    }
    if (model[0]==="X"&& model[4]==="X" && model[8]==="X") {
        
        alert('Winnaar')
    }
    if (model[2]==="X"&& model[4]==="X" && model[6]==="X") {
        
        alert('Winnaar')
    }
     
}
