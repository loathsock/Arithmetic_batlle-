import { StatusBar } from 'expo-status-bar';
import React, {Fragment, useEffect, useState} from 'react';
import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native';
import { StyledText } from './screens/StyledText/styledText';
 // import { store } from './redux/store'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import TopBar from './screens/topBar/topBar';
import GameChoice from './screens/gameChoice/gameChoice.js';
import Footer from './screens/Footer/Footer.js';
import { useSelector, useDispatch } from 'react-redux';
 import{ increment, decrement, setInitialState } from './redux/counter'
 



const App = () => {
      const dispatch = useDispatch();
      const {playerOneScore}  = useSelector((state) => state);
      const {gameModeOptions}  = useSelector((state) => state);
      const {gameState}  = useSelector((state) => state);
      const [toggleGame, setToggleGame] = useState(false)
     

      // setTimeout(() => {
      //   dispatch(setInitialState())
        
      // }, 2000);   
      useEffect(() => {
        if(playerOneScore > 3) {
           setToggleGame(true)
        }
    

      }, [playerOneScore])
      
    const [toggle, setToggle] = useState(false)


  return (
      (
       
      <Provider store = {store}>
           <SafeAreaView style={styles.wrapper}>
           <TopBar />    
                    <GameChoice/>
                  <Footer />      
           </SafeAreaView>
          
    </Provider>
     )
  );
}

export default ReduxProvider = () => {
     return(
      <Provider store = {store}>
         <App/>
      </Provider>
     )
}


const styles = StyleSheet.create({
  
  wrapper: {
    width : "100%",
    height: "153%",
    backgroundColor: "#fff66",
  }, 
  btn: {
    position: 'absolute',
    top: "5%",
    right: "56%" ,
    width : "40%",
    height: "5%",
    backgroundColor: "#000",
  }, 
  btn2: {
    position: 'absolute',
    top: "5%",
    right: "5%" ,
    width : "40%",
    height: "5%",
    backgroundColor: "#000",
  }

});
