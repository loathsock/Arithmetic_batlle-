import styled from 'styled-components/native'

export const BlockStyles = styled.View`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 710px;
      justify-content: space-around;
      align-items: center; 
      background-color: #ed65ff; 
       
`  
export const TopGrid = styled.View`
   position: relative;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-around; 
    align-items: center; 
    background-color: #ed65ff;
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
    background-color: green;
    border: .5px solid white;

`

export const Timer = styled.View`
   display: flex;
   justify-content: space-evenly;
    align-items : center;
   flex-direction: row;  
   position: absolute;  
   top: 4%;
   width: 120px;
   height: 60px;
   border-radius: 90px;
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
   font-size: 50px;
`