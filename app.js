// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require("fs");
//require file for basic card
var basicCard = require("./basicFlashcard.js");

var correct = 0;
var wrong = 0;
var deck = [];
var currentCard = '';
var userGuess = '';

var musicSources = [{'front':'Who performed at the 2016 Super Bowl Halftime show?', 'back':'Lady Gaga'}, {'front':'Which band has an album named "Rubber Soul?"', 'back':'The Beatles'}, {'front':'Jim Morrision was the lead singer of which band?', 'back':'The Doors'}, {'front':'Which band sings "No Scrubs"?', 'back':'TLC'}];

var parksSources = [{'front':'Which national park is home to the lowest point in the western hemisphere?', 'back':'Death Valley'}, {'front':'Which national is home to the longest cave system in the world?', 'back':'Mammoth Cave'}, {'front':'Which national park, founded in 1872, is the oldest national park?', 'back':'Yellowstone'}, {'front':'Which state is home to Arches National Park?', 'back':'Utah'}];

var capitalSources = [{'front':'What is the capital of The Netherlands?', 'back':'Amsterdam'}, {'front':'What is the capital of The Ukraine?', 'back':'Kiev'}, {'front':'What is the capital of Italy?', 'back': 'Rome'}, {'front':'What city is the capital of Ecuador?','back':'Quito'}];

var moviesSources = [{'front':'Which 1960 Alfred Hitchcock film is based on a book by the same name?', 'back':'Psycho'}, {'front':'In which movie do the characters, "need a bigger boat"?', 'back':'Jaws'}, {'front':'Who stars in "The Hunger Games"?', 'back':'Jennifer Lawrence'}, {'front':'Which movie, based on a Stephen King novel, features a clown named "Pennywise"?', 'back':'IT'}];

var makeDeck = function(sourceArray){
	for (i = 0; i < sourceArray.length; i++){
	deck.push(new basicCard (sourceArray[i].front, sourceArray[i].back));
	};
	return deck;
};

var flip = function(currentCard){
	console.log(currentCard.back);
};

var nextCard = function(deck) {
	console.log(currentCard.front);
};

var compare = function(){
	inquirer.prompt([
	{
    type: "text",
    name: "userGuess",
    message: "Type in your guess!",
    }
]).then(function(userGuess) {
	console.log("Your guess: " + userGuess.userGuess);
	var userInput = userGuess.userGuess.toLowerCase(); 
	//console.log("currentCard.back:" + currentCard.back)
	if(userInput === currentCard.back.toLowerCase()){
		console.log("Correct!");
	} else {
		console.log("Incorrect! The correct answer is: " + currentCard.back);
	}
   });
};

startQuiz = function(deck){
	//code to get a card
	var length = deck.length
	for (i = 0; i < length; i++){
		currentCard = deck[i];
		};
		console.log(currentCard.front);	
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
	//console.log(choices);
  // if/then function based on userchoices
			  if (choices.userSelection[0] === 'Music Flashcards Quiz') {
			  	 deck = makeDeck(musicSources);
			  	 startQuiz(musicSources);
			  	 cardAction();
			
	  	  	//startQuiz(deck);
	  	  } else if (choices.userSelection[0] === 'National Parks Flashcards Quiz') {
	  	  	deck = makeDeck(parksSources);
			  	 startQuiz(parksSources);
			  	 cardAction();
	  	  } else if (choices.userSelection[0] === 'Capitals Flashcards Quiz') {
	  		deck = makeDeck(capitalsSources);
			  	 startQuiz(capitalsSources);
			  	 cardAction();
	  
		  } else if (choices.userSelection[0] === 'Movies Flashcards Quiz') {
		  	deck = makeDeck(moviesSources);
			  	 startQuiz(moviesSources);
			  	 cardAction();
		  
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
			  	  //function that shows the front of card
			  	 flip(currentCard);
			  	 cardAction();
			  	
			 } else if (choices.userSelection[0] === 'next') {
			  	 //console.log('next');
			  	 nextCard();
			  	 //function that displays next card in the array
			 } else if (choices.userSelection[0] === 'exit') {
			  	 console.log('Thanks for playing!');
			}
		 });
	};

//an arry of objects to be used to create the flashcards

//creates cards and pushes cards into an array

//console log of the deck array
	//console.log(deck);

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

    




