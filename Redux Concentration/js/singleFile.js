(function (window) {
  'use strict';
  
  function Card() {
    this.id = '0';
    this.img = '.png';
    this.isSelected = false;
    this.isMatched = false;
    
    this.html = document.createElement('div');
    this.html.id = 'card-' + this.id;
    this.html.className = 'outer_card';
    
  }
  
  function ConcentrationGame() {
    this.cards = [];
    
    this.init();
  }
  
  ConcentrationGame.prototype.init = function () {
    this.game = document.getElementById('ConcentrationGame');
    
    if (this.game === undefined || this.game === null) {
      this.game = document.createElement('div');
    }
    
    this.game.id = 'm';
    this.game.className = 'm';
    
    this.gameScreens.startscreen = document.createElement('div');
    this.gameScreens.startscreen.id = this.game.id + '_start-screen';
    this.gameScreens.startscreen.className = 'start-screen';
    
    this.gameScreens.endscreen = document.createElement('div');
    this.gameScreens.endscreen.id = this.game.id + '_end-screen';
    this.gameScreens.endscreen.className = 'end-screen';
    
    // call the game setup function
    this.setup();
  };
  
  ConcentrationGame.prototype.setup = function () {
    var self = this; // cache this
    
    this.gameState = 1;
    
    this.card1 = null;
    this.card2 = null;
    
    this.matchedCards = 0;
    this.numMoves = 0;
    this.chosenLevel ='';
    this.gameInfo = document.getElementById('m_info');
    
    if (this.gameInfo === undefined || this.gameInfo === null) {
      this.gameInfo = document.createElement('div');
      var innerNode = '<div class="' + this.game.id +'_info-level">Level:' + this.chosenLevel
    }
    this.gameInfo.id = this.game.id + "_info";
    this.gameInfo.className = this.game.id + "_info";
  }
}());