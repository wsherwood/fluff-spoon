function Card(num, index, onClick) {
    'use strict';
    
    this.value = num || 0;
    this.index = index;
    this.matched = false;
    this.imgURL = './img/cardback_0.png';

    this.html = document.createElement("img");
    this.html.id = "card_" + index;
    this.html.src = this.imgURL;
    this.html.alt = " " + this.value;
    document.getElementById("concentrationDiv").appendChild(this.html);
    
    this.html.onclick = onClick;
    this.html.style = {
        background: this.matched ? 'green' : 'blue'
    };
//    this.html.onclick = function (event) {
//        event = event || window.event;
//        var target = this;
//        this.style.background = "blue";
//    };
}

function cards(state, action) {
    'use strict';
    
    if (state === undefined) {
        return [];
    }
    switch (action.type) {
        case ACTIONS.ADD_CARD:
            return state.concat(new Card(0, state.length + 1));
        case ACTIONS.TOGGLE_CARD:
            return state.map((card, index) => {
                if (index === action.index) {
                    return Object.assign({}, card, {
                        visible: !card.visible
                    })
                }
            // else return the state
            return card;
            });
         default :
            return state;       
    }
}

function visibilityFilter(state, action) {
    'use strict';
    
    if (state === undefined) {
        return ACTIONS.Visibility.SHOW_ALL;
    }
    
    switch (action.type) {
        case SET_VISIBILITY:
            return Object.assign({}, state, {
                visibility : action.filter
            })
        default:
            return state;
    }
}

var ConcentrationGame = (function () {
    'use strict';
    
    var instance,
        numCards = 6,
        i;
    
    numCards = numCards * 2;
    // This is the function class definition and constructor
    // function
    function init() {
        // Create and place the DOM element in the page
        var gDiv = document.createElement('div');
        gDiv.id = "concentrationDiv";
        document.body.append(gDiv);
        
        var cards = [];
        var selectedCard;
        
        // public interface and access
        return {
            cards : cards,
            visibility : 'SHOW_ALL',
            selectedCard : null
        };
    }
    
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
}());


