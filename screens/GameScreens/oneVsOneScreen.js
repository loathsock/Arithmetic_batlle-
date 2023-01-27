import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import {ViewExp, GridStyles, PlayerOneGrid, PlayerTwoGrid, Operation, ChoiceButtonContainer, ChoiceButton, ScoreCounter, NumberText, MidScreen, PlayerWins } from './gameScreenStyles'
import React, {useState, useEffect, useRef} from 'react'
import { randomizedOperationFuncs, randomizedOperationNumbers, operationEval, shuffleArray, getRandomArbitrary, getDifferentNumberValues } from './gameLogic';
import { useSelector, useDispatch, Provider } from 'react-redux';
import{incrementPlayerOne, decrementPlayerOne, decrementPlayerTwo, incrementPlayerTwo, setInitialStatePlayerOne, setInitialStatePlayerTwo } from './../../redux/counter'
import{ store } from './../../redux/store'






const OneVsOneScreen = () => {
  const [playerOneWins, setPlayerOneWins] = useState(false)
  const [playerTwoWins, setPlayerTwoWins] = useState(false)
  const [flip, setFlip] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const numberReturnedFromFun = randomizedOperationNumbers()
  const translation = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const {playerOneScore}  = useSelector((state) => state);
  const {playerTwoScore}  = useSelector((state) => state);
  const [playerOneCount, setPlayerOneCount] = useState(0) 
  const randomOperator = randomizedOperationFuncs() 
  const correctAnswer = operationEval(numberReturnedFromFun.leftHandSideNumber, randomOperator, numberReturnedFromFun.rightHandSideNumber)
  const numberValues = getDifferentNumberValues(correctAnswer)
  const arrayRandomChoices = [numberValues.n1, correctAnswer, numberValues.n2]
  const shuffledRandomChoices = shuffleArray(arrayRandomChoices) 


  useEffect(() => {
     // console.log('this is updating');
       if (playerOneScore < 0 || playerTwoScore < 0 ) {
        dispatch(setInitialStatePlayerOne())
        dispatch(setInitialStatePlayerTwo())
       }
     if(playerOneScore > 1) {
        setPlayerOneWins(true)
     }
     if(playerTwoScore > 1) {
      setPlayerTwoWins(true) 
   }
  }, [playerOneScore, playerOneScore])
  

  const nextQAnimation = () =>
    Animated.sequence([
      Animated.timing(translation, {
        toValue: 380,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(translation, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();

 
  const [correctOption, setCorrectOption] = useState()
   


  
    const playerOneOnPress = (n, prev) => {
     nextQAnimation()     

      if(n == correctAnswer) {
        dispatch(incrementPlayerOne())
      }
      if(n !== correctAnswer) {
        dispatch(decrementPlayerOne())
      }
  
  }
   
    
  const playerTwoOnPress = (n, counter) => {
    nextQAnimation()
    if(n == correctAnswer) {
      dispatch(incrementPlayerTwo())
    }
    if(n !== correctAnswer) {
      dispatch(decrementPlayerTwo())
    }
  }

   

  return (
    <Provider store={store}>

    <Animated.View>
      {!gameOver  ? <>
    <GridStyles>

      <PlayerTwoGrid
        style={{
          transform: [{rotate: '180deg'}, { translateX: translation}, ]
        }}
      >
      <Operation >
                <NumberText>
                    {numberReturnedFromFun.leftHandSideNumber} {randomOperator} {numberReturnedFromFun.rightHandSideNumber} 
                </NumberText>
           </Operation>   
          <ChoiceButtonContainer>
              {shuffledRandomChoices.map((item, i) => {
    
               return  <ChoiceButton 
                onPressIn= { () =>  playerTwoOnPress(item, playerOneScore)}
                key={i}>
                           <NumberText>{item}</NumberText>
                    </ChoiceButton>
     
              })}
            </ChoiceButtonContainer>
  
            <ScoreCounter>
                <NumberText>{playerTwoScore}</NumberText> 

            </ScoreCounter>
    </PlayerTwoGrid>

    <MidScreen>

    </MidScreen>
          <PlayerOneGrid style={{
         
         transform: [{ translateX: translation }],
        }}>
          <Operation >
                <NumberText>
                    {numberReturnedFromFun.leftHandSideNumber} {randomOperator} {numberReturnedFromFun.rightHandSideNumber} 
                </NumberText>
           </Operation>   
          <ChoiceButtonContainer>
              {shuffledRandomChoices.map((item, i) => {
    
               return  <ChoiceButton 
                onPressIn= { () => {
                  playerOneOnPress(item, playerOneCount)
                }}

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
      </>  : <PlayerWins>
                 
      </PlayerWins>
      }
  </Animated.View>   
</Provider>
  )
}




export default OneVsOneScreen

const styles = StyleSheet.create({
  
  wrapper: {
    display:"flex", 
    justifyContent: 'center',
   width: "20%",
   height: "20%",
   backgroundColor: 'blue',

  }
});
