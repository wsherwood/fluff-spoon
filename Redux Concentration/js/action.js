/***
 * Action Types object that
 * defines all the possible named actions that can be performed.
 */

// 'Private variables'
const ADD_CARD = 'ADD_CARD',
    // Flipping a card
    TOGGLE_CARD = 'TOGGLE_CARD',
    // What cards are visible
    SET_VISIBILITY = 'SET_VISIBILITY',
    Visiblity = {
        SHOW_ALL: 'SHOW_ALL',
        SHOW_MATCHED: 'SHOW_MATCHED',
        SHOW_ACTIVE: 'SHOW_ACTIVE'
    };

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
    

    // Public facing API for to create the action objects
    return {
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

/**
 * Action Creator
 */
ACTIONS.addCard('thing');
