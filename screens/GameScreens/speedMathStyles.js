import styled from 'styled-components/native'

export const BlockStyles = styled.View`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 720px;
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
    background-color: #800199;
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
   color: #f3ca5b;
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
      color: #f3ca5b;
`

export const CounterTxt = styled.Text`
      position: absolute;
      bottom: 38%;
      font-size: 60px;
      color: white;
`



export const FinishTimerDisplayWrapper = styled.View`
      width: 100%;
      height: 90%;
      background-color: #2a84f8;
      display: flex;
      justify-content: center;
      align-items: center;
`

export const TimerView = styled.View`
      display: flex;
      justify-content: space-evenly;
      align-items : center;
      position: absolute;
      top: 40%;
      flex-direction: row;  
      width: 130px;
      height: 50px;
      border-radius: 50px;
      border: 1px solid #0d3641;
      background-color: orange;        
`

export const Restart = styled.TouchableOpacity`
      background-color: #f88777;
      display: flex;
      justify-content: center;
      align-items : center;
      position: absolute;
       top: 2%;
      width: 130px;
      height: 50px;
      border-radius: 50px;
      border: 1px solid #0d3641;
      background-color: orange;        
`

export const RestartText = styled.Text`
      position: absolute;
      top: 10%;
     color: #ffffff ;
     font-size: 24px;
`

export const GameProgressBarWrapper = styled.View`
      position: absolute;
      bottom: 34%;
      width: 100%;
      height: 50px;
      background-color: hsl(214, 100%, 70%);
      z-index: 1;
`

export const GameProgressBar = styled.View`

      width: ${props => props.width ?? '0%'};
      height: 50px;
      background-color: #ffa194;
`
