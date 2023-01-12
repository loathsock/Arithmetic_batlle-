import { View, Text, Button } from 'react-native'
import { GridStyles, PlayerOneGrid, PlayerTwoGrid, Operation, ChoiceButtonContainer, ChoiceButton, ScoreCounter } from './gameScreenStyles'
import React from 'react'


const OneVsOneScreen = () => {
  return (
    <View>
    <GridStyles>

      <PlayerTwoGrid>
    </PlayerTwoGrid>
          <PlayerOneGrid>
           <Operation>
                
           </Operation>
           <ChoiceButtonContainer>
            <ChoiceButton />
            <ChoiceButton />
            <ChoiceButton />
            </ChoiceButtonContainer>
            <ScoreCounter/>
            
          </PlayerOneGrid>
    </GridStyles>
    </View>   
  )
}

export default OneVsOneScreen