class Speler {

    constructor(naam, aanBeurt, symbool) {
        this.aanBeurt=aanBeurt;
        this.score=0;
        this.symbool=symbool;
        this.naam=naam;
    }

    resetScore() {
        this.score=0;
    }

    getName() {
        return this.naam;
    }

    wisselBeurt() {

    }

    benIkAanDeBeurt() {

    }
    
    getSymbool() {
        return this.symbool
    }


}