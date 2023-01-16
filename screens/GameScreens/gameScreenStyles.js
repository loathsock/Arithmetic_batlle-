import styled from 'styled-components/native'

 export const GameWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110%; 
  border: 3px;
  background-color: #9e64e0;
`

export const GridStyles = styled.View`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 692px;
      justify-content: space-around;
      align-items: center; 
      background-color: #06ccc2; 
       
`  
export const PlayerTwoGrid = styled.View`
    width: 100%;
     height: 55%;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    background-color: #00c7eb;
    border: 3px;
    transform: rotate(180deg); 
       `
export const PlayerOneGrid = styled.View`
   position: relative;
   width: 100%;
   height: 55%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0dc8e9;
    border: 3px ;
    
    `

 export const  Operation = styled.View`
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
  
  // transform: { rotate: 180deg };
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





  export const ScoreCounter = styled.View`
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
//     transform: [{ rotate: 180deg }],
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