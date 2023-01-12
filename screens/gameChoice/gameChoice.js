import { View, Text, Image, StyleSheet } from 'react-native'
import {GameWrapper, GameModeText, ImageIconContainer, ImagePressAble, GameContainer} from './GameChoiceStyled'
import React, {useEffect, useRef, useState} from 'react'
import { StyledText } from '../StyledText/styledText'
import Svg, {Path}  from 'react-native-svg'
import OneVsOneScreen from '../GameScreens/oneVsOneScreen'
const versusPath = './../../assets/versus.png'
const speedPath = './../../assets/speedMath.png' 

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const GameChoice = (props) => {
  const [startDuelGame, setStartDuelGame] = useState(false)
  const [startBLitzMathGame, setStartBlitzMath] = useState(false)
  const [someIdValue, setSomeIdValue] = useState('')
  const duelMathRef = useRef()
  const speedMathRef = useRef()

  useEffect(() => {
    // 👇️ use a ref (best)
     speedMathRef.current.id = (1)
     duelMathRef.current.id = (0)

    // const el2 = ref.current.id;
    // console.log(duelMathRef.current.id);
  }, []);
  

// setTimeout(() => {
//   console.log(duelMathRef.current.id + ' time');
// }, 1000);

  
const checkGameState = (ref) => {
 
  if(ref.current.id === 1) {
    setStartDuelGame(true)
    console.log('start speed math');
  }
  // if(props.id === 2) {
  //   setStartBlitzMath(true)
  //   console.log('start 1v1');
  // }
}
   
  return (
   
<>

    {
      startDuelGame ? <OneVsOneScreen /> : 
      <GameContainer>

     <GameWrapper 
      ref={speedMathRef}
      >   
            <GameModeText>
          Speed Math 
            </GameModeText>     
            <ImagePressAble 
       onPress={() => checkGameState(speedMathRef)}
          >

             <ImageIconContainer style={styles.tinyLogo}
                source={require(
                  'path=./../../assets/versus.png'
                )
        }
             />         

            </ImagePressAble>
       </GameWrapper>

     <GameWrapper 
          ref={duelMathRef}    
     >   
            <GameModeText>
               1V1
            </GameModeText>     
    
            <ImagePressAble
             
              onPress={(e) => setSomeIdValue(e.target.id)}
          >

             <ImageIconContainer style={styles.tinyLogo}
                source={require(
                  './../../assets/speedMath.png'
                )
        }
             />         
  

            </ImagePressAble>
       </GameWrapper>
      </GameContainer>
      
    }

</>
)
}
  
  
  
export default GameChoice