import { View, Text, Image, StyleSheet } from 'react-native'
import {GameWrapper, GameModeText, ImageIconContainer, ImagePressAble, GameContainer} from './GameChoiceStyled'
import React, {useEffect, useRef, useState} from 'react'
import OneVsOneScreen from '../GameScreens/oneVsOneScreen'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux';
import { toggleState, setOneVersus, setToMainMenu, setSpeedMath  } from '../../redux/counter'
import { SafeAreaView } from 'react-native-safe-area-context'
import SpeedMath from '../GameScreens/speedMath'




const GameChoice = (props) => {
  const duelMathRef = useRef()
  const speedMathRef = useRef()
  const dispatch = useDispatch()
  const [startDuelGame, setStartDuelGame] = useState(false)
  const [startBLitzMathGame, setStartBlitzMath] = useState(false)
  const [someIdValue, setSomeIdValue] = useState('')
  const gameModeOptions  = useSelector((state) => state.gameModeOptions);

     
 console.log(gameModeOptions + 'gamemode');

// useEffect(() => {
//     // 👇️ use a ref (best)
//     speedMathRef.current.id = (1)
//     duelMathRef.current.id = (0)
//     // useDispatch(dispatch(setOneVersus()))
    
   
//   }, []);
  
    
    
    const setToOneVersusOne = (ref) => {
    dispatch(setOneVersus())
      
  // if(ref.current.id === 1) {
  //   setStartDuelGame(true)
  // }
  // if(props.id === 2) {
    //   setStartBlitzMath(true)
    //   console.log('start 1v1');
    // }
  }
   
  return (
    
    
<SafeAreaView>
   <Provider store={store}>

    {
      gameModeOptions == 1 ? (<OneVsOneScreen /> ): 

      gameModeOptions == 2 ? ( <SpeedMath /> ) :
   (   <GameContainer>

     <GameWrapper 
      ref={speedMathRef}
      >   
            <GameModeText>
          Speed Math 
            </GameModeText>     
            <ImagePressAble 
       onPress={() => {
        dispatch(setSpeedMath())
       }
       
        }
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
             
              onPress={(e) => {
                setToOneVersusOne()
               
                
              }}
          >

             <ImageIconContainer style={styles.tinyLogo}
                source={require(
                  './../../assets/speedMath.png'
                )
        }
             />         
  

            </ImagePressAble>
       </GameWrapper>
      </GameContainer> ) 
      
    }
   </Provider>
</SafeAreaView>



)

}
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

export default GameChoice