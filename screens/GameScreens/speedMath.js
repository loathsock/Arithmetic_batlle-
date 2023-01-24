import React, {useState, useEffect, useRef}from 'react'
import { Text } from 'react-native'
import { randomizedOperationNumbers, randomizedOperationFuncs, operationEval, getTwoRandomChoices, shuffleArray } from './gameLogic';

import { BlockStyles, TopGrid, BottomGrid, GridBlock, Timer, TimerIcon, StartGameIcon, NumberDisplay, TouchableGameIcon
, TimerText,
ArithmeticOperation,
CounterTxt,
OperationText} from './speedMathStyles'

// import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

import { useClock } from 'react-native-timer-hooks';
import math from 'mathjs';
import StopWatch from 'react-native-stopwatch-timer/lib/stopwatch';
import { current } from '@reduxjs/toolkit';



const SpeedMath = () => {
   console.log(StopWatch)
   const [gameState, setGameState] = useState(false)
   const [gameOver, setGameOver] = useState(false)
   // const randomNumber = randomizedOperationNumbers()
   // const randomOperator = randomizedOperationFuncs() 
   const [playerScore, setPlayerScore] = useState(0)
   const randomNumber = useRef(randomizedOperationNumbers())
  const randomOperator = useRef(randomizedOperationFuncs()) 
  // let correctA = operationEval(randomNumber.current.leftHandSideNumber, randomOperator.current, randomNumber.current.rightHandSideNumber)
  const correctA = useRef(operationEval(randomNumber.current.leftHandSideNumber, randomOperator.current, randomNumber.current.rightHandSideNumber))
  // const correctAnswer = useState(operationEval(randomNumber.current.leftHandSideNumber, randomOperator.current, randomNumber.current.rightHandSideNumber)) 
  //  const arrayAnswers = useRef(getTwoRandomChoices(correctAnswer.current))
  // // //   const shuffleAnswersArray = useState(shuffleArray([correctAnswer, correctAnswer + Math.floor(Math.random() * 7)]))

// const shuffleAnswersArray = useState(shuffleArray([correctA, Math.floor(Math.random() * 5)]))

const [shuffleAnswersArray, setShuffleAnswersArray] = useState(shuffleArray([correctA.current, correctA.current +  Math.floor(Math.random() * 5)]))  
   const [counter, start, pause, reset, isRunning] = useClock({
      from: 0,
      to: Infinity, 
      ms: 35,
      stopOnFinish: true,
   });

   
   const checkCorrectAnswer = (currentItemValue, correctValue) => {
      if(playerScore >= 35 ) {
         setGameOver(true)
         reset()
         pause()
      }
      randomNumber.current = randomizedOperationNumbers()
      randomOperator.current = randomizedOperationFuncs()
       correctA.current =  operationEval(randomNumber.current.leftHandSideNumber, randomOperator.current, randomNumber.current.rightHandSideNumber) 
       let num = correctA.current + Math.floor(Math.random() * 6) !== correctA.current ?  correctA.current + Math.floor(Math.random() * 6) : correctA.current + Math.floor(Math.random() * 6)
       if(num !== correctA) {
          setShuffleAnswersArray( shuffleArray(          
             [correctA.current,  num])
          ) 
       } 
       if(num !== correctA) {
         num = correctA.current + Math.floor(Math.random() * 6) 
          if(num !== correctA){
             setShuffleAnswersArray( shuffleArray(          
                [correctA.current,  num])
             ) 
          }
       }



       if(currentItemValue == correctValue ) {

         setPlayerScore(prev => prev + 1)
         console.log(true);
        }    
      else {
         setPlayerScore(prev => prev - 1)   
         console.log(false);
       }
   }
   
   useEffect(() => {
      start()
    //   setCounterState((prev) => prev = counter)
      // console.log(counterState);
      
   }, [])
   
   
   const toggleState = () => {
      //  start()
      setGameState(!gameState)
   }
         
         return (
   gameState && !gameOver ? 
        <BlockStyles>
        <TopGrid>
             <Timer>
                    <TimerIcon
                        source={require(
                        'path=./../../assets/timer.png'
                        )
                }
                    />
             <TimerText>
             {counter/ 10}  
             </TimerText>
             </Timer>

             <ArithmeticOperation>
             <OperationText>
                {randomNumber.current.leftHandSideNumber} {randomOperator.current} {randomNumber.current.rightHandSideNumber}

             </OperationText>
             </ArithmeticOperation>
   
         </TopGrid>
       <CounterTxt>
              {playerScore}
       </CounterTxt>

          <BottomGrid>
                 {shuffleAnswersArray.map((item, index) => {
                  return  <GridBlock onPress={() => {
                      checkCorrectAnswer(correctA.current, item)
                  }} key={index}>
                             <NumberDisplay>
                                   {item}
                             </NumberDisplay>
                        </GridBlock>
                 })}
       </BottomGrid>
    </BlockStyles> : <>
    {!gameState  ?   
      <BlockStyles>
         <TopGrid>
            <TouchableGameIcon   onPress= {() => {
                  toggleState()
               }}>
            <StartGameIcon
               source={require('path=./../../assets/play.png')}
               
            />


            </TouchableGameIcon>
         </TopGrid>


         </BlockStyles> : <>
            {gameOver  &&  null  }
         </>
     }  
            
         
    </>



  )
}

export default SpeedMath



{/* <GridBlock>
<NumberDisplay>
   {correctAnswer.current}
</NumberDisplay>
</GridBlock>

<GridBlock>
<NumberDisplay>
7
</NumberDisplay>
</GridBlock> */}