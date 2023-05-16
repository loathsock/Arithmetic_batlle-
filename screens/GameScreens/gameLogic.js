import { evaluate } from "mathjs";

export const randomizedOperationNumbers = (op) => {
  let leftHandSideNumber = Math.floor(Math.random() * 10) + 1;
  let rightHandSideNumber = Math.floor(Math.random() * 10) + 1;
  if(op == '-' && leftHandSideNumber < rightHandSideNumber) {
      leftHandSideNumber = rightHandSideNumber 
      rightHandSideNumber = leftHandSideNumber 
  }

  return { leftHandSideNumber, rightHandSideNumber };
};

export const randomizedEquation = () => {
  let leftHandSideNumber = Math.floor(Math.random() * 10) + 1;
  let rightHandSideNumber = Math.floor(Math.random() * 10) + 1;
  const operations = ["+", "-", "*"];
  const rand = Math.floor(Math.random() * operations.length);
  const randomOperation = operations[rand];
  if(randomOperation == '-' && leftHandSideNumber < rightHandSideNumber) {
    console.log('this happened');
    leftHandSideNumber = rightHandSideNumber 
    rightHandSideNumber = leftHandSideNumber
  }
 
  return { leftHandSideNumber, rightHandSideNumber, randomOperation };
};


export function randomizedOperationFuncs() {
  const operations = ["+", "-", "*"];
  const rand = Math.floor(Math.random() * operations.length);
  const randomOperation = operations[rand];
  return randomOperation;
}

export const operationEval = (leftHandSide, op, rightHandSide) => {
     const result = evaluate(`${leftHandSide} ${op} ${rightHandSide}`);
  return result;
};

export const getRandomArbitrary = (min, max, correctOption) => {
  let numArray = []
  let element
  for (let i = 0; i < 3; i++) {
     element = Math.floor(Math.random() * (max - min) + min);  
     numArray.push(element)
  }
  return {numArray, correctOption}
};

export const getTwoRandomChoices = (correctOption) => {
   let arrayOfAnswers = [correctOption]
 
 

    let  wrongChoice = Math.floor(Math.random() * 10 );  
     arrayOfAnswers.push(wrongChoice)
    //  arrayOfAnswers.push(correctOption)
  
  return {arrayOfAnswers, correctOption}
};






export const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const getDifferentNumberValues =  (correctAnswer) => {
  let n1 = Math.floor(Math.random() * 8) + correctAnswer   
  let n2 = Math.floor(Math.random() * 8) + correctAnswer   
  if(n1 !== n2 && correctAnswer !== n1 && correctAnswer !== n2) {
    return {n1, n2}
  }  

  if(n1 == n2 && n1 !== correctAnswer && n2 != correctAnswer) {
     n1 = Math.floor(Math.random() * 8) + correctAnswer   
     n2 = Math.floor(Math.random() * 8) + correctAnswer  
     return {n1, n2}
  }

  if(n1 == correctAnswer && n1 !== n2 && n2 != correctAnswer) {
    n1 = Math.floor(Math.random() * 8) + correctAnswer   
    return {n1, n2}
 }
 if(n2 == correctAnswer && n1 !== correctAnswer && n2 != n1) {
  n2 = Math.floor(Math.random() * 8) + correctAnswer   
  n1 = Math.floor(Math.random() * 8) + correctAnswer   
  return {n1, n2}
  
}

 else {
  return {n1, n2}
 }
  
 
//  return {n1, n2}
   //  getDifferentNumberValues(correctAnswer)
  
};


export const correctAnswerForPlayerOne = (choice, correct) => {
  if (choice === correct) {
    return true;
  }
  return false;
};

export const correctAnswerForPlayerTwo = (choice, correct) => {
  if (choice === correct) {
    return true;
  }
  return false;
};

export const gameOver = (counter) => {
  if (counter === 10) {
    return true;
  }
};