import React, {useState, useEffect}from 'react'
import { Text } from 'react-native'

import { BlockStyles, TopGrid, BottomGrid, GridBlock, Timer, TimerIcon, StartGameIcon, NumberDisplay, TouchableGameIcon
 } from './speedMathStyles'


const SpeedMath = () => {
    const [gameState, setGameState] = useState(false)
    const [count, setCount] = useState(0)
    let timeNow = new Date().getTime()
  console.log(gameState);
    const toggleState = () => {
      setGameState(!gameState)
    }

   //  console.log(timeNow.toString().slice(11));

   //  console.log(count);
   //  console.log();
   //  useEffect(() => {
   //      setInterval(() => {
   //       const t =  new Date().getTime() - timeNow
   //       setCount(t.toString().slice(0, 2))
   //         console.log(t.toString().slice(0, 2));
   //      }, 1000);
   //          // setCount((count) => count + 1 )
   //  }, [])



  return (
   gameState ? 
        <BlockStyles>
        <TopGrid>
             <Timer>
                    <TimerIcon
                        source={require(
                        'path=./../../assets/timer.png'
                        )
                }
                    />
             <Text>
                  {count}
    
             </Text>
             </Timer>
             {/* <TouchableGameIcon   onPress= {() => {
                  toggleState()
                }}>
             <StartGameIcon
                source={require('path=./../../assets/play.png')}
              
             />


             </TouchableGameIcon> */}
         </TopGrid>

          <BottomGrid>
                    <GridBlock>
                       <NumberDisplay>
                          5
                       </NumberDisplay>
                    </GridBlock>

            <GridBlock>
            <NumberDisplay>
                         9
                       </NumberDisplay>
             </GridBlock>

       </BottomGrid>
    </BlockStyles> : 

<BlockStyles>
<TopGrid>
     <Timer>
            <TimerIcon
                source={require(
                'path=./../../assets/timer.png'
                )
        }
            />
     <Text>
          {count}

     </Text>
     </Timer>
     <TouchableGameIcon   onPress= {() => {
          toggleState()
        }}>
     <StartGameIcon
        source={require('path=./../../assets/play.png')}
      
     />


     </TouchableGameIcon>
 </TopGrid>


</BlockStyles>


  )
}

export default SpeedMath