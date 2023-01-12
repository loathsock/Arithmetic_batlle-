import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { StyledText } from './screens/StyledText/styledText';
import {Versus}   from './assets/images.js'; 



import TopBar from './screens/topBar/topBar';
import GameChoice from './screens/gameChoice/gameChoice.js';
import Footer from './screens/Footer/Footer.js';



export default function App() {
 const [gameState, setGameState] = useState(false)
 const [gameStates, setGameStates] = useState({
     speedMath: false,
     oneVersusOne: false, 
 })

 function changeState() {
    setGameStates() 
 }
  console.log();

  
  return (
    <SafeAreaView>
       
         <View style= {styles.wrapper}>
           <TopBar/> 
           <GameChoice/>
          
        
        <Footer/> 
    </View>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  wrapper: {
    width : "100%",
    height: "60%",
    backgroundColor: "#fff66"
  }

 
});
