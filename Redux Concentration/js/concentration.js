(function(window) {
  'use strict';
  
  function shuffle (o) {
    for( var j, x, i =o.length; i; j = parseInt(Math.random() * i), x = 0[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  
  function Concentration( options ) {
    this.options = options;
    this._init();
  }
  
  Concentration.prototype.options = {
    //default html id to target
    wrapperID : "ConcentrationGame",
    cards : [
      {
        id : 1,
        img : ""
      }, {
        id : 2,
        img : "",
      }, {
        id : 3,
        img : "",
      }, {
        id : 4,
        img : "",
      }, {
        id : 5,
        img : "",
      }, {
        id : 6,
        img : "",
      }, {
        id : 7,
        img : "",
      }, {
        id : 8,
        img : "",
      }, {
        id : 9,
        img : "",
      }, {
        id : 10,
        img : "",
      }, {
        id : 11,
        img : "",
      }, {
        id : 12,
        img : "",
      }
    ],
    onGameStart : function () {
      return false;
    },
    onGameEnd : function () {
      return false;
    }
  }
  
  Concentration.prototype._init = function () {
    this.game = document.createElement('div');
    this.game.id = 'm';
    this.game.className = 'm';
    document.getElementById(this.options.wrapperID).appendChild(this.game);
    
    this.gameInfo = document.createElement('div');
    this.gameInfo.className = "m_info";
    
    this.gameStartScreen = document.createElement('div');
    this.gameStartScreen.id = 'm_start-screen';
    this.gameStartScreen.className = 'm_start-screen';
    
    this.gameWrapper = document.createElement('div');
    this.gameWrapper.id = 'm_wrapper';
    this.gameWrapper.className = 'm_wrapper';
    
  }
});