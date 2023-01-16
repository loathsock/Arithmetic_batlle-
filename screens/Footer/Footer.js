import { View, Tex, Button } from 'react-native'
import {FooterContainer, LeaderShipBlock, Icon} from './footerStyles'
import React, {useState}from 'react'


const Footer = () => {
  const [toggleGameState, setToggleGameState] = useState(false)
  console.log(toggleGameState);
  return (
  
    <FooterContainer>
         <LeaderShipBlock onPress={() => setToggleGameState(!toggleGameState)} color='#63c970'          
         >
            <Icon   source={require(
                  'path=./../../assets/menu.png'
                )} />
              
          </LeaderShipBlock>
          <LeaderShipBlock color= '#3653bd'>
                 <Icon   source={require(
                  'path=./../../assets/leadership.png'
                )} />
                    
                 
        </LeaderShipBlock>
    </FooterContainer>
     
    
  )
}

export default Footer