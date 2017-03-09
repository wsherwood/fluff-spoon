var Cards = [];
var i;

function Card(index) {
    var self = this;
    
    this.html = document.createElement('img');
    this.index = index;
    this.html.setAttribute('src', './img/cardback_0.png');
    this.matched = false;
    
    this.selected = function() {
        self.html.style.background = 'blue';
    }
}


var game = function () {
    this.matches = 0;
    this.selectedCard1 = null;
    this.selectedCard2 = null;
    
    this.click = function(event) {
        var tar = function(t) {
            for (i = 0; i < Cards.length; i++) {
                if (Cards[i] === t) {
                    return card[i];
                }
            }
        }(event.target);
        if (selectedCard1 === null) {
            selectedCard1 = tar;
        } else {
            selectedCard2 = tar;
        }
        
        if (selectedCard1 === selectedCard2) {
            this.matches++;
            selectedCard1.matched = true;
            selectedCard1.style.background = '';
            selectedCard2.matched = true;
            selectedCard2.style.background = '';
        }
    }
};

for (i = 0; i < 6; i++) {
    Cards[i] = new Card(i);
    Cards[i].html.setAttribute('id', 'card_' + i);
    Cards[i].html.addEventListener("click", game.click, false);
    document.body.appendChild(Cards[i].html);
}