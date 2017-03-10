/*jslint browser: true, devel: true, indent: 2*/
function Card(parentElement) {
  'use strict';
  this.html = document.createElement('div');
  this.html.className = "outer_card";
  this.value = 0;
  this.isSelected = false;
  this.isFlipped = false;

  var innerElem = document.createElement('div');
  innerElem.className = "inner_card";
  this.html.appendChild(innerElem);

  parentElement.appendChild(this.html);
}
/***
* Action Types object that
* defines all the possible named actions that can be performed.
*/
var ACTIONS = (function () {
  'use strict';
  // ACTIONS
  //      Are payloads of information that send data from your application to your store.
  //      They are the ONLY source of information for the store.
  //      Sent to the store via store.dispatch()
  //      Plain javascript
  //      Must have a type property that indicates the action being performed
  //      Types should typically be defined as string constants.

  // Examples actions which represents adding a card

  // 'Private variables'
  var ADD_CARD = 'ADD_CARD',
      // Flipping a card
    TOGGLE_CARD = 'TOGGLE_CARD',
    // What cards are visible
    SET_VISIBILITY = 'SET_VISIBILITY',
    Visibility = {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_MATCHED: 'SHOW_MATCHED',
      SHOW_ACTIVE: 'SHOW_ACTIVE'
    };

  // Public facing API for to create the action objects
  return {
    // ACCESSORS
    ADD_CARD : this.ADD_CARD,
    TOGGLE_CARD : this.TOGGLE_CARD,
    SET_VISIBILITY : this.SET_VISIBILITY,
    VISIBILITY : this.Visibility,
    // Public methods
    // Action creators
    // NOTE: not dispatchers
    addCard : function (text) {
      return {
        type : ADD_CARD,
        value : text
      };
    },
    toggleCard : function (index) {
      return {
        type : TOGGLE_CARD,
        index : this.index
      };
    },
    setVisibility : function (filter) {
      return {
        type: SET_VISIBILITY,
        filter: this.filter
      };
    }
  };
}());

// Global object that represents the initial state.
// This also gives us the shape of our state.
//    In this case it constains as filter, which other parts
//    of the app can use to decide what to display, and the cards
//    array which is contains all the card objects.

/**
* Reducers
* Specify how the application's state changes in response to an action.
*/
// Create seperate functions to handle the different parts of the state
var cards = function (state, action) {
  'use strict';
  if (state === undefined) {
    state = [];
  }

  switch (action.type) {
  case ACTIONS.ADD_CARD:
    return state.concat(new Card(document.getElementById("root")));
  case ACTIONS.TOGGLE_CARD:
    return state.map((card, index) => {
      if (index === action.index) {
          return Object.assign({}, card, {
              visible: true
          })
      }
      // else return the state
      return card
    })
  default:
    return state
  }
}

// Define a reducer for the visibility filter
function visibilityFilter(state = ACTIONS.Visibility, action) {

}
function concentrationApp(state, action) {
  if (typeof === undefined){
      return INITIALSTATE;
  }

  // Define behavior
  switch(action.type) {
      case SET_VISIBILITY:
          return Object.assign({}, state, {
              visibility: action.filter
          })
  default:
      return state;
  }

}

// Redux method
// Create a store object using the function defined above
// 
// Store object that links the actions and reduces.
// Handles the following
//      Application State
//      Access to state via getState()
//      Update to state via dispatch(action)
//      Register listeners via subscribe(listener)
//      Handles unregistering of listeners via the function returned by subscribe(listener)
// Store is a singleton
//      One and only one in a redux app
//      Can be easily created from a single reducer
var store = Redux.createStore(concentrationApp);

// reducer pattern
// (previousState, action) => newState

// NEVER
//  mutate its arguments
//  perform side effects
//  call non-pure functions like Math.Random()

/***
/ Start Game
/   Create cards
/   initialize values
/   display
/ 
/ Select Card
/   "flip selected card"
/ Select another card
/   if(card === prevCard)
/       do nothing;
/   else
/       "flip" selected card
/       if(cardVal = prevCardVal)
/           add score
/       else
/           flip both cards face down
/       moveCount++
/ REPEAT