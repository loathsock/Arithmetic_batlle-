import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native'
import {ViewExp, GridStyles, PlayerOneGrid, PlayerTwoGrid, Operation, ChoiceButtonContainer, ChoiceButton, ScoreCounter, NumberText, MidScreen, PlayerWins, PlayerOneWins, PlayerWinsText, RestartButton, PlayerTwoWins  } from './gameScreenStyles'
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
  const translation = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const {playerOneScore}  = useSelector((state) => state);
  const {playerTwoScore}  = useSelector((state) => state);
  const [playerOneCount, setPlayerOneCount] = useState(0) 
  const randomOperator = randomizedOperationFuncs() 
  const numberReturnedFromFun = randomizedOperationNumbers(randomOperator)
  const [isCounterUpdatingIncorrect, setIsCounterUpdatingIncorrect] = useState(false)
  const [isCounterUpdatingCorrect, setIsCounterUpdatingCorrect] = useState(false)


  
  // let ranOperator = randomOperator === '*' ? ranOperator = "***" : ranOperator = randomOperator

  // console.log(ranOperator);
  
  const correctAnswer = operationEval(numberReturnedFromFun.leftHandSideNumber, randomOperator, numberReturnedFromFun.rightHandSideNumber)
  const numberValues = getDifferentNumberValues(correctAnswer)
  const arrayRandomChoices = [numberValues.n1, correctAnswer, numberValues.n2]
  const shuffledRandomChoices = shuffleArray(arrayRandomChoices) 
  
  
  
  const COLOR_CORRECT = animatedValue.interpolate({
     inputRange: [0, 0.2, 0.8, 1],
     outputRange: isCounterUpdatingCorrect ? ["#c888", "red", "red", "#c888"]  : ["#c888", "green", "green", "#c888"]
  });  
  
  
  const changeBackgroundOnIncorrect = () => {
     setIsCounterUpdatingIncorrect(!isCounterUpdatingIncorrect)
    Animated.timing(animatedValue, {
      toValue: isCounterUpdatingIncorrect? 0 : 1,
      duration: 700, 
      useNativeDriver: false
    }).start();
    //  setIsCounterUpdatingIncorrect(false)
  };  
  
  const changeBackgroundOnCorrect = () => {
    setIsCounterUpdatingIncorrect(!isCounterUpdatingCorrect)
   Animated.timing(animatedValue, {
     toValue: isCounterUpdatingCorrect? 0 : 1,
     duration: 700, 
     useNativeDriver: false
   }).start();
    // setIsCounterUpdatingCorrect(false)
 };  
  
  const COLOR_INCORRECT = animatedValue.interpolate({
    inputRange: [0, 0.2, 0.8, 1],
    outputRange: ["#c888", "red", "red", "#c888"],
  }); 




  

  useEffect(() => {
     
     // console.log('this is updating');
       if (playerOneScore < 0 || playerTwoScore < 0 ) {
        dispatch(setInitialStatePlayerOne())
        dispatch(setInitialStatePlayerTwo())
       }
     if(playerOneScore >= 5) {
        setGameOver(true)
        setPlayerOneWins(true)
     }
     if(playerTwoScore >= 5) {
      setGameOver(true)
      setPlayerTwoWins(true) 
   }
  }, [playerOneScore, playerTwoScore])
  

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

    const updateScoreAnimation = () => {    
      Animated.timing(updateScoreCount, {
        toValue: 380,
        duration: 50,
        useNativeDriver: true,
      }).start();
  }
    
 
  const [correctOption, setCorrectOption] = useState()
   


  
    const playerOneOnPress = (n, prev) => {
     nextQAnimation()     

      if(n == correctAnswer) {
        dispatch(incrementPlayerOne())
        changeBackgroundOnCorrect()
      }
      if(n !== correctAnswer) {
       changeBackgroundOnIncorrect()
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


  const restartGame = () => {  
    setGameOver(false)
    setPlayerOneWins(false)
    setPlayerTwoWins(false)
    dispatch(setInitialStatePlayerOne())
    dispatch(setInitialStatePlayerTwo())
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
  
              <ScoreCounter 
              style={{   
                  backgroundColor: COLOR_CORRECT,            
              }}
              
              >  
                    <NumberText>{playerOneScore}</NumberText> 
              </ScoreCounter>       
          </PlayerOneGrid>
     
          
    </GridStyles>
      </>  : <>
        {playerTwoWins ?  <PlayerWins>
        <PlayerOneWins>
          
                         <PlayerWinsText>
                           You Win
                         </PlayerWinsText>
                         <RestartButton onPressIn={restartGame}>
                         <Text style={{fontSize: 20, color: "white"}}>
                             Restart
                         </Text>
                             
                         </RestartButton>
        </PlayerOneWins>
                 </PlayerWins>
                 : <>
                  {playerOneWins && <PlayerWins>

                    <PlayerTwoWins>
                       <PlayerWinsText>
                           You Win 
                       </PlayerWinsText>

                         <RestartButton onPress={restartGame}>
                         <Text style={{fontSize: 28, color: "white"}}>
                             Restart
                         </Text>
                             
                         </RestartButton>
                    </PlayerTwoWins>
                 </PlayerWins>
                 } 
                 </>}
      </>
        
      
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
  }, 
  counter: {
    width: 150,
    height: 50
  }
});
