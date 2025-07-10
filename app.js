// START GAME

// DISPLAY welcome screen
//   WAIT for player to click “Start Game”

// ASK player to enter name
//   STORE player name
// The game will have 2 categories

// DISPLAY category choices: [Scientific] [General]
//   WAIT for player to choose a category
//   LOAD relevant question set

// SET score to 0
// each question will give 10 points
//The player will wine once he achieve 100 point
//if the player couldn't answer 3 questions  he will lose
// SET timer to 60 seconds per question
// SET lifelines (removeTwo, hint, skip) to 3 uses total

// FOR each question in the selected category:
//   DISPLAY question + 4 answer choices
//there will be 15 questions for each category

//   START 60-second countdown timer
//     IF time < 10s, FLASH red warning

//   WAIT for:
//     - Player selects an answer → CHECK if correct → UPDATE score
//     - Player uses lifeline → APPLY effect
//     - Timer runs out → TREAT as wrong answer

//   DISPLAY result (correct or wrong)
//the correct answer will be highlighted in green 
//if the wrong answer was choosen it will be highlighted in red and the correct answer will be shown in green
//   GO to next question or END if out of questions

// IF player answered all questions:
//   DISPLAY congratulations message with name + final score
//the player will lose score with each wrong choice
//a rest button to play again if the player have either won or lose

// ELSE IF player lost (e.g. 3 wrong answers or timer runs out too often):
//   DISPLAY game over message + image

// DISPLAY "Play Again" button → CALL init() to reset game

// the functions that may be use:
// event listeners
// Arrays
// objects
// variable
// functions
// if statements
// dome manipulations
// the questions will change randomly by generating a random number to choose the index of the array 
// Welcome screen
// an input to register the name
// 2 categories to choose from (scientific and general)
// question screen it will have a question and 4 options
// 3 lifelines to choose from (hint, remove 2 options, skiq questions)
// timer
// score counter

// you won screen
// you lose screen with try again button