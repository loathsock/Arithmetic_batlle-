import styled from 'styled-components/native'
import {Animated} from 'react-native'


 export const GameWrapper = styled.View`
      /* display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110%; 
      border: 3px;
      background-color: #9e64e0;  */
`

export const GridStyles = styled.View`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 710px;
      justify-content: space-around;
      align-items: center; 
      background-color: #00c7eb; 
       
`  
export const PlayerTwoGrid = styled(Animated.View)`
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    background-color: #00c7eb;
       `
export const PlayerOneGrid = styled(Animated.View)`
    position: relative;
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0dc8e9;
    `

 export const  Operation = styled(Animated.View)`
    display: flex;
    justify-content: center;
    align-items: center; 
    top: 25px;
    width: 300px;
    height: 74px;
    background-color: #201f19d8;
    border-radius: 10px;
    border-width: 2px;
    border-color: #cfba44;
    margin-bottom: 35px;
  
  `  
  
export const ChoiceButtonContainer = styled.View`
      width: 95%;
      height: 65px;
      justify-content: space-evenly;
      flex-direction: row;
`


export const ChoiceButton = styled.TouchableOpacity`
      display: flex;
      width: 80px;
      height: 60px;
      background-color: #ffff;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      background-color: #000;
` 

  export const ScoreCounter = styled(Animated.View)`
   display: flex;
    width: 80px;
    height: 60px; 
    background-color: #c888;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    `

export const NumberText = styled.Text`
     font-size: 30px;
     color: white;   
     `
  
  export const ViewExp = styled(Animated.View)`
          height: 80px;
          width: 80px;
          background-color: yellow; 
          `


export const MidScreen = styled.View`
         position: absolute;
         top: 48%;
         height: 24px;
         width: 100%;
         background-color: #e2cd54;
         z-index: 1;
        
`
    
export const PlayerWins = styled.View`
         display: flex;
         justify-content: flex-start;
         align-items: center;
         width: 100%;
         height: 100%;
         background-color: #2584f0;     
`
   
export const PlayerOneWins = styled.View`
           position: absolute;
           bottom: 70%;
           display: flex;
           justify-content: center;
           align-items: center;
           width: 50%;
           height: 30%;
           transform: rotate(180deg);

`

export const PlayerTwoWins = styled.View`
           position: absolute;
           bottom: 33%;
           display: flex;
           justify-content: center;
           align-items: center;
           width: 50%;
           height: 50%;


`
export const PlayerWinsText = styled.Text`
            color: #ffffff;
             font-size: 38px;
`
  
export const RestartButton = styled.TouchableOpacity`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 70%;
      width: 140px;
      height: 60px;
      border-radius: 10px;
      background-color: hsl(214, 82%, 22%);
      z-index: 1;
`

  
  /* transform: translateX(${
props => props.flip == true ? '50 px' : props.trans + '90 px' */
// });


// export const PlayersGameOverScreen = StyleSheet.create({
//   playerOneGameOverScreen: {
//     position: "absolute",
//     bottom: 0,
//     justify-content: center,
//     align-items: center,
//     height: "48%",
//     width: 100%,
//     background-color: "",
//     zIndex: -1,
//   },

//   playerTwoGameOverScreen: {
//     position: "absolute",
//     top: 0,
//     justify-content: center,
//     align-items: center,
//     height: "48%",
//     width: 100%,
//     background-color: "",
//     zIndex: -1,
//   },

//   midScreen: {
//     position: "relative",
//     background-color: "gray",
//     align-items: "center",
//     justify-content: "center",
//     width: 100%,
//     height: "4%",
//   },

//   restartButton: {
//     justify-content: "center",
//     align-items: "center",
//     height: 60,
//     width: "26%",
//     background-color: "orange",
//     color: "white",
//     border-radius: 12,
//     fontSize: 22,
//   },
// });