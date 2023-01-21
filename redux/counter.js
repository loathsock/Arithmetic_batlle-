import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter', 
  initialState: {
      playerOneScore: 0, 
      playerTwoScore: 0,
      gameState: false, 
      gameModeOptions: 0
  },

  reducers: {
    incrementPlayerOne: (state) => {
      state.playerOneScore += 1
    },
    decrementPlayerOne: (state) => {
      state.playerOneScore -= 1
    },
    incrementPlayerTwo: (state) => {
      state.playerTwoScore += 1
    },
    decrementPlayerTwo: (state) => {
      state.playerTwoScore -= 1
    }, 
    setInitialState: (state) => {
      state.playerOneScore = 0 
    }, 
    toggleState: (state) => {
      state.gameState = true
     },
     setOneVersus: (state) => {
      state.gameModeOptions= 1
     }, 
     setSpeedMath: (state) => {
      state.gameModeOptions= 2
     }, 
     setToMainMenu: (state) => {
      state.gameModeOptions = 0
     }
  }
})


// export const toggleGameState = createSlice({
//   name: 'counter', 
//   initialState: {
//       gameState: false, 
    
//   },

//   reducers: {
//      toggleState: (state) => {
//       state.gameState = true
//      }
//   }
// })





export const {incrementPlayerOne, decrementPlayerOne, incrementPlayerTwo, decrementPlayerTwo, setInitialState, toggleState, setOneVersus, setSpeedMath, setToMainMenu} = counterSlice.actions  
 // export const {toggleState} = toggleGameState.actions   