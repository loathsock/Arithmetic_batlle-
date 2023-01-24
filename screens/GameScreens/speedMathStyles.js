import styled from 'styled-components/native'

export const BlockStyles = styled.View`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 710px;
      justify-content: space-around;
      align-items: center; 
      background-color: #2a84f8; 
       
`  
export const TopGrid = styled.View`
   position: relative;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-around; 
    align-items: center; 
    background-color: #2a84f8;
       `
export const BottomGrid = styled.View` 
    display: flex;  
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 36%;
    background-color: #873d91;
    gap: 10px; 
    `
export const GridBlock = styled.TouchableOpacity`
    display: flex ;
    justify-content: center;
    align-items: center;
     width : 50% ;
     height: 100%;
    background-color: #ba59ce;
    border: .5px solid white;

`

export const Timer = styled.View`
      display: flex;
      justify-content: space-evenly;
      align-items : center;
      flex-direction: row;  
      position: absolute;  
      top: -3%;
      width: 130px;
      height: 50px;
      border-radius: 50px;
      border: 1px solid #0d3641;
      background-color: orange;                      
`

export const TimerIcon = styled.Image`
      width: 30px;
      height: 30px;
`

export const StartGameIcon = styled.Image`
        position: absolute;
        top: 35%;
        width: 130px;
        height: 130px;
`

export const TouchableGameIcon = styled.TouchableOpacity`
        position: absolute;
        top: 35%;
        width: 130px;
        height: 130px;          
`


export const NumberDisplay = styled.Text`
   color: white;
   font-size: 44px;
`

export const  TimerText = styled.Text`
    color: black;
    font-size: 25px;
`


export const ArithmeticOperation = styled.View`
     width: 80%;
     height: 15%;
     display: flex;
     justify-content: center;
     align-items: center;
`
export const OperationText = styled.Text`
      font-size: 60px;
      color: white;
`

export const CounterTxt = styled.Text`
      position: absolute;
      bottom: 38%;
      font-size: 60px;
      color: white;
`