//declaring variables
var memory_cards_hard = ['BLUE','BLUE','GREEN','GREEN','WHITE','WHITE','RED','RED','YELLOW','YELLOW','BLACK','BLACK'];
var memory_cards_medium = ['BLUE','BLUE','GREEN','GREEN','WHITE','WHITE','RED','RED'];
var memory_cards_easy = ['BLUE','BLUE','GREEN','GREEN'];
var memory_cards = [];
var memory_values =[];
var memory_card_ids =[];
var cards_flipped =0;
const $board = document.getElementById('active_board')
//creating shuffle function
Array.prototype.memory_card_shuffle = function () {
    var i = this.length, j, temp;
    while(--i > 0) {
    j = Math.floor(Math.random () * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
    }
}
// function to start game acording to level chosen
function newBoard(level) {
    if (level == 'easy') {
        memory_cards = memory_cards_easy;
    } else if (level == 'medium') {
        memory_cards = memory_cards_medium;
    } else if (level == 'hard') {
        memory_cards = memory_cards_hard;
    }
    cards_flipped = 0;
    var cards ='' ;
    memory_cards.memory_card_shuffle();
    for (var i = 0; i < memory_cards.length; i++) {
        cards += '<div id="card_'+ i +'" onclick="memoryFlipCard(this,\''+memory_cards[i]+'\')"></div>';
    }
     document.getElementById('active_board').innerHTML = cards;
}

//Functions flipping cards 
function memoryFlipCard (card, val) {
    if (card.innerHTML =="" && memory_values.length < 2) {
        card.style.background == '#fff';
        card.innerHTML = val;
        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_card_ids.push(card.id)
        } else if (memory_values.length == 1){
            memory_values.push(val);
            memory_card_ids.push(card.id);
            if (memory_values[0] == memory_values[1]) {
                cards_flipped += 2;
    //cleaning values and ids
                memory_values = [];
                memory_card_ids = [];
                if(cards_flipped == memory_cards.length) {
                alert ("Congratulations! You won!")
                document.getElementById('active_board').innerHTML = "";
                newBoard();
                }
            } else {
                function flipback () {
    //flipping back over the 2 cards
                    var card1 = document.getElementById(memory_card_ids[0]);
                    var card2 = document.getElementById(memory_card_ids[1]);
                    card1.style.background = '';
                    card1.innerHTML = "";
                    card2.style.background = '';
                    card2.innerHTML = "";
    //cleaning values and ids
                    memory_values = [];
                    memory_card_ids = [];
                }
                setTimeout(flipback, 2000);
            }
        }
    }
}
