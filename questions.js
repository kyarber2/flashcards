// Import flashcards constructor
var basicFlashcard = require('./basicFlashcard.js');

//create basic flashcards using the constructor
var fruit = new flashcard.Basic('What word is both a fruit and a color?', 'orange');
console.log(fruit.front);
console.log(fruit.back); 
console.log('-------------------------------------');

var band = new flashcard.Basic('Which band has an album named "Rubber Soul"', 'The Beatles');
console.log(band.front);
console.log(band.back);
console.log('-------------------------------------');

var actor = new flashcard.Basic('Who stars in "The Hunger Games"?', 'Jennifer Lawrence');
console.log(actor.front);
console.log(actor.back);
console.log('-------------------------------------');

var capital = new flashcard.Basic('What city is the capital of Ecuador?', 'Quito');
console.log(capital.front);
console.log(capital.back);
console.log('-------------------------------------');

