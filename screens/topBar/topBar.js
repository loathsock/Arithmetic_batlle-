import { View, Text } from 'react-native'
import React from 'react'
import  {NavWrapper}  from './TopBarStyles'
import { StyledText } from '../StyledText/styledText'

const TopBar = () => { 
  return (
    <NavWrapper>
       <StyledText>
           Hello World
       </StyledText>
    </NavWrapper>
  )
}

export default TopBar