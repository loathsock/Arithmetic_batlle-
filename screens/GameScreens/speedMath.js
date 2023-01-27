import React, {useState, useEffect, useRef}from 'react'
import { Text } from 'react-native'
import { randomizedOperationNumbers, randomizedOperationFuncs, operationEval, getTwoRandomChoices, shuffleArray } from './gameLogic';

import { BlockStyles, TopGrid, BottomGrid, GridBlock, Timer, TimerIcon, StartGameIcon, NumberDisplay, TouchableGameIcon
, TimerText,
ArithmeticOperation,
CounterTxt,
OperationText, FinishTimerDisplayWrapper, TimerView, RestartText, Restart, GameProgressBarWrapper, GameProgressBar} from './speedMathStyles'

// import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

import { useClock } from 'react-native-timer-hooks';
import math from 'mathjs';
import { current } from '@reduxjs/toolkit';



const SpeedMath = () => {
   const [gameState, setGameState] = useState(false)
   const [gameOver, setGameOver] = useState(false)
   const [finishTime, setFinishTime] = useState(0)
   const [playerScoreYe, setPlayerScoreYe] = useState(0)
   const randomNumber = useRef(randomizedOperationNumbers())
   const randomOperator = useRef(randomizedOperationFuncs())  
   
   console.log(playerScoreYe);
   useEffect(() => {
       setPlayerScoreYe(playerScoreYe)

   }, [playerScoreYe])
   

  const correctA = useRef(operationEval(randomNumber.current.leftHandSideNumber, randomOperator.current, randomNumber.current.rightHandSideNumber))

  // console.log(playerScore.current * 10);
 

const [shuffleAnswersArray, setShuffleAnswersArray] = useState(shuffleArray([correctA.current, correctA.current +  Math.floor(Math.random() * 5)]))  
   const [counter, start, pause, reset, isRunning] = useClock({
      from: 0,
      to: Infinity, 
      ms: 50,
      stopOnFinish: true,
   });

   
   const checkCorrectAnswer = (currentItemValue, correctValue) => {
     //  setPlayerScoreYe(playerScoreYe + 1)
      if(currentItemValue == correctValue ) {               
         setPlayerScoreYe(prev => prev + 1)
         // console.log(playerScore.current); 
          console.log(playerScoreYe + ' this is player score'); 
      }  
      if(currentItemValue !== correctValue ) {               
         setPlayerScoreYe(prev => prev - 1)
      }  

      if(playerScoreYe > 10) {
         setFinishTime(counter/10)
         setGameState(false)
         setGameOver(true)
         setPlayerScoreYe(prev => prev = 0) 

         reset()
         pause()
      }
      
      randomNumber.current = randomizedOperationNumbers()
      randomOperator.current = randomizedOperationFuncs()
      if(randomOperator.current == '-' && randomNumber.current.rightHandSideNumber > randomNumber.current.leftHandSideNumber) {
         randomNumber.current.leftHandSideNumber = randomNumber.current.rightHandSideNumber
         randomNumber.current.rightHandSideNumber = randomNumber.current.leftHandSideNumber
       //   console.log('this is true');
         correctA.current =  operationEval(randomNumber.current.rightHandSideNumber, randomOperator.current, randomNumber.current.leftHandSideNumber) 
         let num = correctA.current + Math.floor(Math.random() * 9) !== correctA.current ?  correctA.current + Math.floor(Math.random() * 9) : correctA.current + Math.floor(Math.random() * 9)
         if(num !== correctA) {
            setShuffleAnswersArray( shuffleArray(          
               [correctA.current,  num])
            ) 
         } 
         }
         else {          
            correctA.current =  operationEval(randomNumber.current.leftHandSideNumber, randomOperator.current, randomNumber.current.rightHandSideNumber) 
            let num = correctA.current + Math.floor(Math.random() * 9) !== correctA.current ?  correctA.current + Math.floor(Math.random() * 9) : correctA.current + Math.floor(Math.random() * 9)
                     
            if(num !== correctA) {
               setShuffleAnswersArray( shuffleArray(          
                  [correctA.current,  num])
                  ) 
               }                             
               }
                  
               
            }
       
   const toggleState = () => {
        start()
      setGameState(!gameState)
      setGameOver(false)
      start()
   }


const gameReset = () => {
   //  start()
   setGameState(!gameState)
   setFinishTime(0)
   start() 
   setPlayerScoreYe(prev => prev = 0) 

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

         <GameProgressBarWrapper>
             <GameProgressBar width={`${playerScoreYe * 10}%`}>

             </GameProgressBar>
         </GameProgressBarWrapper>

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
            {gameOver  && 
            
            <BlockStyles>
            <FinishTimerDisplayWrapper>
          
            <TimerView>
                    <TimerIcon
                        source={require(
                        'path=./../../assets/timer.png'
                        )
                }
                    />
             <TimerText>
             {finishTime}  
             </TimerText>
             </TimerView>
             <Restart onPress={() => {
               gameReset()
             }}>
               <RestartText>
                 Restart
               </RestartText>

             </Restart>
            </FinishTimerDisplayWrapper>
            </BlockStyles> }
         </>
     }         
    </>
  )
}

export default SpeedMath

