import { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import StartGameScreen from"../screens/StartGameScreen"
import {LinearGradient} from "expo-linear-gradient"
import GameScreen from '../screens/GameScreen'
import GameOverScreen from "../screens/GameOverScreen"

export default function index() {
  const [userNumber, setUserNumber ]=useState<number |null>(null)
  const [gameIsOver, setGAmeIsOver]= useState(true)
  const[guessRounds, setGuessRounds] = useState(0)
  function pickedNumberHandler(pickedNumber: number){
    setUserNumber(pickedNumber)
    setGAmeIsOver(false)

  }
  function gameOverHandler(numberofRounds: number){
    setGAmeIsOver(true)
    setGuessRounds(numberofRounds)

   }
   function startNewGameHandler(){
     setUserNumber(null)
     setGuessRounds(0)

   }  function renderScreen() {
    if(gameIsOver && userNumber){
      return (<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>)
     }
    if (userNumber) {
        return <GameScreen userNumber={userNumber} onGAmeOver={gameOverHandler}/>;
    }
    return <StartGameScreen onPickNumber={pickedNumberHandler} />;
}   
   
   


  
  return (
<SafeAreaView style={styles.rootscreen}>
<LinearGradient colors={["#4e0329","#ddb52f" ]}
    style={styles.rootscreen}>
      <ImageBackground 
      source={require("../assets/images/background (1).png")}
      resizeMode='cover'
      style ={styles.rootscreen}
      imageStyle={styles.image}>
        
      {renderScreen()}</ImageBackground>
    </LinearGradient>
</SafeAreaView>
  )
}
const styles=StyleSheet.create({
  rootscreen:{
    
    flex:1,

  },
  image:{
    opacity:0.15
  }
})


