import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { GridStyles, PlayerOneGrid, PlayerTwoGrid, Operation, ChoiceButtonContainer, ChoiceButton, ScoreCounter, NumberText } from './gameScreenStyles'
import React, {useState, useEffect} from 'react'
import { randomizedOperationFuncs, randomizedOperationNumbers, operationEval, shuffleArray, getRandomArbitrary } from './gameLogic';





const OneVsOneScreen = () => {
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  const [playerOneCount, setPlayerOneCount] = useState(0)
  const numberReturnedFromFun = randomizedOperationNumbers()
  const randomOperator = randomizedOperationFuncs()
  const correctAnswer = operationEval(numberReturnedFromFun.leftHandSideNumber, randomOperator, numberReturnedFromFun.rightHandSideNumber)
  const arrayRandomChoices = [1, correctAnswer, 9]
  const shuffledRandomChoices = shuffleArray(arrayRandomChoices) 
  
  
  console.log('update', playerOneScore );
 
  const [correctOption, setCorrectOption] = useState()
   
// // useEffect(() => {    
// //   if(playerOneCount <= 0) {
// //     setPlayerOneCount((playerOneCount) => playerOneCount = 0)
// //   }
// //   setPlayerOneCount(playerOneScore)
// //   console.log(playerOneScore);
// // }, [playerOneScore])


  
    const playerOneOnPress = (n, prev) => {
      if(playerOneScore <= 0) {
        setPlayerOneScore((previous) => previous = 0)
      }

      if(n === correctAnswer) {
        setPlayerOneScore((prev) => prev + 1)
      }
      if(n !== correctAnswer) {
        setPlayerOneScore((prev) => prev -1)
      }
      
    // if(n === correctAnswer) {
    //   setPlayerOneScore(playerOneScore + 1)
    // } if(n!== correctAnswer) {
    //   setPlayerOneScore(playerOneScore - 1)
    // }
  }
   
    
  const playerTwoOnPress = (n, counter) => {
       // console.log(playerOneCount);
      //console.log(counter);
    if(n === correctAnswer) {
      setPlayerTwoScore(playerTwoScore + 1)
    } if(n!== correctAnswer) {
      setPlayerTwoScore(playerTwoScore - 1)
    }
  }

 
   

  return (
    <View>
    <GridStyles>

      <PlayerTwoGrid>
      <Operation>
                <NumberText>
                    {numberReturnedFromFun.leftHandSideNumber} {randomOperator} {numberReturnedFromFun.rightHandSideNumber} 
                </NumberText>
           </Operation>   
          <ChoiceButtonContainer>
              {shuffledRandomChoices.map((item, i) => {
    
               return  <ChoiceButton 
                onPress= { () =>  playerTwoOnPress(item, playerOneScore)}
                key={i}>
                           <NumberText>{item}</NumberText>
                    </ChoiceButton>
     
              })}
            </ChoiceButtonContainer>
  
            <ScoreCounter>
                <NumberText>{playerTwoScore}</NumberText> 

            </ScoreCounter>
    </PlayerTwoGrid>

    
          <PlayerOneGrid>
           <Operation>
                <NumberText>
                    {numberReturnedFromFun.leftHandSideNumber} {randomOperator} {numberReturnedFromFun.rightHandSideNumber} 
                </NumberText>
           </Operation>   
          <ChoiceButtonContainer>
              {shuffledRandomChoices.map((item, i) => {
    
               return  <ChoiceButton 
                onPress= { () => {
                  playerOneOnPress(item, playerOneCount)
                }
                   
                      }
                key={i}>
                           <NumberText>{item}</NumberText>
                    </ChoiceButton>  
              })}

            </ChoiceButtonContainer>
  
            <ScoreCounter>
                <NumberText>{playerOneScore}</NumberText> 

            </ScoreCounter>
          </PlayerOneGrid>
    </GridStyles>
    </View>   
  )
}

export default OneVsOneScreen