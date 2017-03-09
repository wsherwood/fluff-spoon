function Card(num, index) {
    'use strict';
    
    this.value = num;
    this.index = index;
    this.visibility = false;
    this.imgURL = './img/cardback_0.png';
    this.html = document.createElement("img");
    this.html.id = "card" + index;
    this.html.src = this.imgURL;
    
    this.show = function () {
        if (this !== undefined) {
            if (this.visibility === true) {
                this.html.innerHtml.text = this.value;
            }
        }
        
        document.getElementById("concentrationDiv").appendChild(this.html);
    };
}

var ConcentrationGame = (function () {
    'use strict';
    
    var instance,
        numCards = 12,
        i;
    
    function newInstance() {
        var game = {
                    // create a div for the game
            gameDiv : (function () { return document.createElement("div"); }()),
            cards : (function () {
                var arr = [];
                for (i = 0; i < numCards; i++) {
                    arr[i] = new Card(Math.random() * 13, i);
                }
                return arr;
            }()),
            visibility : 'SHOW_ALL'
        };
        game.gameDiv.setAttribute("id", "concentrationDiv");
        document.body.append(game.gameDiv);
        
        for (i = 0; i < numCards; i++) {
            game.cards[i].show();
        }
        return game;
    }
    
    return {
        getInstance: function () {
            if (!instance) {
                instance = newInstance();
            }
            return instance;
        }
    };
}());

var g = ConcentrationGame.getInstance();
console.log(g);