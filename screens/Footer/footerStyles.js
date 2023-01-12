import styled from 'styled-components'

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
  width: 50%;
  height: 100%; 
  background-color: ${props => props.color ?? 'blue'};

`