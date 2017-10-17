// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require("fs");
//require file for simple card

//require file for cloze card

var correct = 0;
var wrong = 0;
var cardStack = [];

// function Commands(name, position, age, language) {
//   this.name = name;
//   this.position = position;
//   this.age = age;
//   this.language = language;
// };


// // creates the printInfo method and applies it to all programmer objects
// Programmer.prototype.printInfo = function() {
//   console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
//   this.age + "\nLanguages: " + this.language);
// };

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
	{
    type: "checkbox",
    name: "userSelection",
    message: "Please choose a command",
    choices: ['create flashcards', 'create cloze flashcards', 'flashcards quiz', 'cloze flashcards quiz', 'exit']
  
	}
]).then(function(choices) {
  // if/then function based on userchoices
	  if (choices.userSelection === 'create flashcards') {
	  	console.log('create flashcards');
	  } else if (choices.userSelection === 'create cloze flashcards') {
	  	console.log('create cloze flashcards');
	  } else if (choices.userSelection === 'flashcards quiz') {
	  	console.log('flashcards quiz');
	  } else if (choices.userSelection === 'cloze flashcards quiz') {
	  	console.log('cloze flashcards quiz');
	  } else if (choices.userSelection === 'exit') {
	  	console.log('Your session has ended. Come back soon!');
	  }
	});


