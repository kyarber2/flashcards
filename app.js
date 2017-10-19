// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require("fs");
//require file for basic card
var basicCard = require("./basicFlashcard.js");

var correct = 0;
var wrong = 0;
var deck = [];
var currentCard = '';
var userGuess = ''.toLowerCase();

var musicSources = [{'front':'What word is both a fruit and a color?', 'back':'orange'}, {'front':'Which band has an album named "Rubber Soul?"', 'back':'The Beatles'}, {'front':'Who stars in "The Hunger Games"?', 'back':'Jennifer Lawrence'}, {'front':'What city is the capital of Ecuador?', 'back':'Quito'}];

var parksSources = [{'front':'What word is both a fruit and a color?', 'back':'orange'}, {'front':'Which band has an album named "Rubber Soul?"', 'back':'The Beatles'}, {'front':'Who stars in "The Hunger Games"?', 'back':'Jennifer Lawrence'}, {'front':'What city is the capital of Ecuador?', 'back':'Quito'}];

var capitalSources = [{'front':'What word is both a fruit and a color?', 'back':'orange'}, {'front':'Which band has an album named "Rubber Soul?"', 'back':'The Beatles'}, {'front':'Who stars in "The Hunger Games"?', 'back':'Jennifer Lawrence'}, {'front':'What city is the capital of Ecuador?', 'back':'Quito'}];

var moviesSources = [{'front':'What word is both a fruit and a color?', 'back':'orange'}, {'front':'Which band has an album named "Rubber Soul?"', 'back':'The Beatles'}, {'front':'Who stars in "The Hunger Games"?', 'back':'Jennifer Lawrence'}, {'front':'What city is the capital of Ecuador?', 'back':'quito'}];

var makeDeck = function(sourceArray){
	for (i = 0; i < sourceArray.length; i++){
	deck.push(new basicCard (sourceArray[i].front, sourceArray[i].back));
	};
	return deck;
};

var flip = function(currentCard){
	console.log(currentCard.back);
};

var compare = function(){
	inquirer.prompt([
	{
    type: "text",
    name: "userGuess",
    message: "Type in your guess!",
    }
]).then(function(userGuess, currentCard) {
	console.log(userGuess);
	console.log("currentCard:" + currentCard)
	if(userGuess === currentCard.back){
		console.log("Correct!")
	}
   });
};




startQuiz = function(deck){
	//code to get a card
	var length = deck.length
	for (i = 0; i < length; i++){
		currentCard = deck[i];
		//var userGuess = process.argV[3];
		};
		console.log(currentCard.front);
		// inquirer.prompt([this.front]).then(function(userGuess) {
		// 	console.log("user guess: " + userGuess)
		// 	//write if statement for if user answer === this.back
		// 	//if
		// 	});
		// 	console.log(currentCard.front);
		
	};

// runs inquirer and asks the user a series of questions whose replies are stored within the variable answers inside of the .then statement.
inquirer.prompt([
	{
    type: "checkbox",
    name: "userSelection",
    message: "Please choose a command",
    choices: [
    'Music Flashcards Quiz', 
    'National Parks Flashcards Quiz', 
    'Capitals Flashcards Quiz', 
    'Movies Flashcards Quiz', 
    'exit']
  
	}
]).then(function(choices) {
	console.log(choices);
  // if/then function based on userchoices
			  if (choices.userSelection[0] === 'Music Flashcards Quiz') {
			  	 console.log('Music Quiz');
			  	 deck = makeDeck(musicSources);
			  	 startQuiz(musicSources);
			  	 cardAction();
			
	  	  	//startQuiz(deck);
	  	  } else if (choices.userSelection[0] === 'National Parks Flashcards Quiz') {
	  	  	console.log('National Parks Quiz');
	  	  	deck = makeDeck(parksSources);
	  	  } else if (choices.userSelection[0] === 'Capitals Flashcards Quiz') {
	  		console.log('Capitals Quiz');
	  		deck = makeDeck(capitalsSources);
	  
		  } else if (choices.userSelection[0] === 'Movies Flashcards Quiz') {
		  	console.log('Movies Quiz');
		  	deck = makeDeck(moviesSources);
		  
		  } else if (choices.userSelection[0] === 'exit') {
		  	console.log('Your session has ended. Come back soon!');
		  }
	});

var cardAction = function(){
		inquirer.prompt([
			{
		    type: "checkbox",
		    name: "userSelection",
		    message: "What would you like to do with the card?",
		    choices: [
		    'answer', 
		    'flip', 
		    'next',  
		    'exit']
			}
		]).then(function(choices) {
			if (choices.userSelection[0] === 'answer') {
			   //console.log('Please enter your guess.');
			   compare();
			  	 //function that shows front of card
			 } else if (choices.userSelection[0] === 'flip') {
			  	 //console.log('flip');
			  	 flip(currentCard);
			  	 //function that shows the front of card
			 } else if (choices.userSelection[0] === 'next') {
			  	 console.log('next');
			  	 //function that displays next card in the array
			 } else if (choices.userSelection[0] === 'exit') {
			  	 console.log('Thanks for playing!');
			}
		 });
	};

//an arry of objects to be used to create the flashcards

//creates cards and pushes cards into an array


//deck = makeDeck(englishSources)

//console log of the deck array
	//console.log(deck);

// var card = new basicCard ('Q', 'A');
// console.log(card);
//functions to call to read cards and do quizzes



  	  	//function that asks all questions inside of deck and checks the answer
	  	  	// var startQuiz = function (deck) {
	  	  	// 	for (card in deck){
	  	  	// 		console.log(deck[card].front);
	  	  	// 		console.log(deck[card].back);
	  	  	// 	};
	  	  	// 	}
	 


        
    //     }
    //     console.log(data);
    // });

    




// flashcards();

// .then(function(answer){
// 	switch(answer.doSomething) {
// 		case "Music Flashcards Quiz":
// 			callfunction();
// 			break;
// 		case "National Parks Flashcards Quiz":
// 			callfunction()
// 			break;

// 	}
// });


