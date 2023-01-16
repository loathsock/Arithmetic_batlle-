import styled from 'styled-components/native'

export const FooterContainer = styled.View`
 position: absolute;
 bottom: -600px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40%; 
  background-color: #e7d9f8;
`

export const LeaderShipBlock = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 70px; 
  background-color: ${props => props.color ?? 'blue'};
  
`
export const Icon = styled.Image`
      width: 40px;
      height: 40px; 
     //  background-color: ${props => props.color ?? 'blue'};
`
