var Deck = function() {
    this.cards = [];
};

//console.log("basicFlashcard loaded");
Deck.protoype.addCard = function(card) {
	this.cards.push(card);
};




module.exports = Deck;