class Speler
{
    constructor(naam, aanBeurt, symbool){
        this.aanBeurt=aanBeurt;
        this.score=0;
        this.symbol=symbool
        this.naam=naam
    }  
 
    resetScore() {

        this.score=0;
    }
    
    getName() {

        return this.naam
    }

    getSymbool() {

        return this.symbol
    }

    ikBenAanBeurt() {

        return this.aanBeurt;
    }
    
    wisselBeurt() {
        if(this.aanBeurt === true) {

            this.aanBeurt=false;
            return this.aanBeurt;
        } 
        if(this.aanBeurt === false) {

            this.aanBeurt=true;
            return this.aanBeurt;
        }
    }




 
}