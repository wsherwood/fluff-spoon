var Cards = [];
var i;

function Card(index) {
  'use strict';
  var self = this;
    
  this.html = document.createElement('img');
  this.html.className = 'outer_card';
  this.html.src = '../img/cardback_0.png';
  this.value = index;
  this.html.innerHTML =  '<div class="inner_card"><span>-' + this.value + '-</span></div>';
  
  this.matched = false;
  this.selected = false;
  
  this.html.addEventListener('click', function () {
    if (self.matched === false) {
      if (self.selected) {
        self.selected = false;
        self.html.classList.toggle('selected');
      } else {
        self.selected = true;
        self.html.classList.toggle('selected');
      }
    }
  });
}


function Concentration() {
  'use strict';
  
  this.html = document.getElementById('concentrationgame');
  var self = this;
  
  if (this.html === null || this.html === undefined) {
    this.html = document.createElement('div');
    this.html.id = 'concentrationgame';
    this.html.className = 'concentrationgame';
    
    //Attach the new html element to the page
    document.body.appendChild(this.html);
  }
  this.chosenLevel = 4;
  this.matches = 0;
  this.selectedCard1 = null;
  this.selectedCard2 = null;
  this.card1flipped = false;
  this.card2flipped = false;

  this.click = function (event) {
    var tar = (function (t) {
      for (i = 0; i < self.cards.length; i++) {
        if (self.cards[i].html === t) {
          return self.cards[i];
        }
      }
    }(event.target));

    // If neither card has been picked yet
    if (self.card1flipped === false && self.card2flipped === false) {
      self.selectedCard1 = tar;
      self.card1flipped = self.selectedCard1.selected;
    
    // If the first card has been picked
    } else if (self.card1flipped === true && self.card2flipped === false) {
      self.selectedCard2 = tar;
      self.card2flipped = self.selectedCard2.selected;
      
      // Now check if they match
      if (self.selectedCard1.value === self.selectedCard2.value) {
        self.matches++;
        
        self.gameCardMatch(self.selectedCard1, self.selectedCard2);
      } else {
        self.gameCardMismatch(self.selectedCard1, self.selectedCard2);
      }
      
      self.resetVars();
    }
    console.log(self.selectedCard1);
    console.log(self.selectedCard2);
  };
  this.shuffleCards = function (arr) {
    var i, k, t = 0;
    
    for( i = arr.length-1; i > 0; i--) {
      k = Math.floor(Math.random() * i);
      
      //swap position
      t = arr[i];
      arr[i] = arr[k];
      arr[k] = t;
    }
  }
  
  this.init();
}

Concentration.prototype.init = function () {
  'use strict';
  
  //Create the cards
  var i, x, j = 0;
  this.cards = [];
  
  for (i = 0; i < this.chosenLevel; i++) {
    this.cards.push(new Card(i));
    this.cards.push(new Card(i));
  }
  
  this.shuffleCards(this.cards);
  
  for (i = 0; i < this.cards.length; i++) {
    this.html.appendChild(this.cards[i].html);
  }
  
  this.html.addEventListener('click', this.click);
};

Concentration.prototype.resetVars = function () {
  'use strict';
  this.selectedCard1 = null;
  this.selectedCard2 = null;
  this.card1flipped = false;
  this.card2flipped = false;
};

Concentration.prototype.gameCardMatch = function (card1, card2) {
  'use strict';
  
  var self = this;
  
  card1.matched = true;
  card2.matched = true;
  
  window.setTimeout(function () {
    card1.html.style.background = 'green';
    card2.html.style.background = 'green';
  }, 300);
  
  window.setTimeout(function () {
    card1.html.style.background = '';
    card2.html.style.background = '';
  }, 1500);
  
  if (this.matches === this.chosenLevel) {
    this.gameWin();
  }
};

Concentration.prototype.gameCardMismatch = function (card1, card2) {
  'use strict';
  
  window.setTimeout(function () {
    card1.html.classList.remove('selected');
    card2.html.classList.remove('selected');
    
    card1.selectedCard1 = false;
    card2.selectedCard1 = false;
  }, 900);
};

Concentration.prototype.gameWin = function () {
  'use strict';
  
  var self = this;
  alert('You win!');
}