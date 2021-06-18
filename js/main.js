console.log('Js loaded');


//let playerOneButtonElement = document.querySelector('.buttonPlayer1')
//let playerTwoButtonElement = document.querySelector('.buttonPlayer2')
//let vakjes = document.querySelector('.game-board')

//playerOneButtonElement.addEventListener('click', handelClick);
//playerTwoButtonElement.addEventListener('click', handelClick);
//vakjes.addEventListener('click', handelClick)

let vakje=document.querySelector('.game-board');
 
vakje.addEventListener('click', Game)
 
let model =new Array (9);
for (let i = 0; i < model.length; i++) {
    model[i] ='leeg';
}

let speler1= new Speler("Jan", true, "X");
let speler2= new Speler("Piet", false, "O"); 
console.log(speler1.getName(),speler1.getSymbool(),speler1.ikBenAanBeurt());
console.log(speler2.getName(),speler2.getSymbool(),speler2.ikBenAanBeurt());

function handelClick(event) {
    const element = event.target

    /*switch (element.className) {
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
    }*/
    Game()

}
/*
function buttonOne() {
        
    console.log(`knop 1 is gedrukt`);

}

function buttonTwo() {

    console.log(`knop 2 is gedrukt`)

}
*/

function Game(event) {
    if (speler1.aanBeurt === true) {
        let vakje=event.target;
        let index=vakje.id;
        if (model[index] === "leeg") {
            vakje.innerHTML=speler1.getSymbool();
            model [index]="X";
            console.log(model);
            console.log(speler1.getName(),speler1.getSymbool(),speler1.ikBenAanBeurt());
            console.log(speler2.getName(),speler2.getSymbool(),speler2.ikBenAanBeurt());
        }
        
    }
    if (speler2.aanBeurt === true) {
        let vakje=event.target;
        let index=vakje.id;
        if (model[index] === "leeg") {
            vakje.innerHTML=speler2.getSymbool();
            model [index]="O";
            console.log(model);
            console.log(speler1.getName(),speler1.getSymbool(),speler1.ikBenAanBeurt());
            console.log(speler2.getName(),speler2.getSymbool(),speler2.ikBenAanBeurt());
        }
        
        

    }
    
    speler1.wisselBeurt();
    speler2.wisselBeurt();
    isWinnaar();
    

}

 
function isWinnaar(){
    if (model[0]==="X"&& model[1]==="X" && model[2]==="X" || model[0]==="O"&& model[1]==="O" && model[2]==="O") {
        
        alert('Winnaar')
    }
    if (model[3]==="X"&& model[4]==="X" && model[5]==="X" || model[3]==="O"&& model[4]==="O" && model[5]==="O") {
        
        alert('Winnaar')
    }
    if (model[6]==="X"&& model[7]==="X" && model[8]==="X" || model[6]==="O"&& model[7]==="O" && model[9]==="O") {
        
        alert('Winnaar')
    }
    if (model[0]==="X"&& model[3]==="X" && model[6]==="X" || model[0]==="O"&& model[3]==="O" && model[6]==="O") {
        
        alert('Winnaar')
    }
    if (model[1]==="X"&& model[4]==="X" && model[7]==="X" || model[1]==="O"&& model[4]==="O" && model[7]==="O") {
        
        alert('Winnaar')
    }
    if (model[2]==="X"&& model[5]==="X" && model[8]==="X" || model[2]==="O"&& model[5]==="O" && model[8]==="O") {
        
        alert('Winnaar')
    }
    if (model[0]==="X"&& model[4]==="X" && model[8]==="X" || model[0]==="O"&& model[4]==="O" && model[8]==="O") {
        
        alert('Winnaar')
    }
    if (model[2]==="X"&& model[4]==="X" && model[6]==="X" || model[2]==="O"&& model[4]==="O" && model[6]==="O") {
        
        alert(`Winnaar`)
    }
    
}