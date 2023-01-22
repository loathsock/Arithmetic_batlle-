import { View, Tex, Button } from 'react-native'
import {FooterContainer, LeaderShipBlock, Icon} from './footerStyles'
import React, {useState}from 'react'
import { Provider } from 'react-redux'
import { store } from './../../redux/store'
// import { Provider } from 'react-redux'
// import { store } from '../../redux/store'
 import { useSelector, useDispatch } from 'react-redux';
import { setToMainMenu, toggleState, setInitialStatePlayerOne, setInitialStatePlayerTwo } from '../../redux/counter'
 

const Footer = () => {
  const dispatch = useDispatch() 
  const gameState  = useSelector((state) => state.gameState);
  const [toggleGameState, setToggleGameState] = useState(false)
  return (
    <FooterContainer>
         <LeaderShipBlock onPress={() => {
         //  setToggleGameState(!toggleGameState)
          dispatch(setToMainMenu())
          dispatch(setInitialStatePlayerOne())
          dispatch(setInitialStatePlayerTwo())
          }
          } color='#63c970'          
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