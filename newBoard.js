function newBoard() {
    cards_flipped = 0;
    // var output ='' ;
    memory_cards.memory_card_shuffle();
    var cards = [];
    for (const card of memory_cards) {
    cards.push(`<div id="card ${card}" data-deck="${card}">"${card}</div>`)
    }
    // for (var i = 0; i < memoryCards.length; i++) {
    //     output.push(`<div id="tile_'${+i} '" onclick="memoryFlipTile(this,\'' + memoryCards[c] + '\')"></div>`);
    // }
    $board.innerHTML = cards.join('') 
}
