import { View,Text, StyleSheet, Alert, FlatList } from "react-native"
import { useState, useEffect} from "react";
import Title from"../components/ui/title"
import GameOverScreen from "./GameOverScreen";
import Card from '../components/ui/Card'

import NumberContainer from "../components/game/NUmberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import InstructionText from "@/components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons"
import GuessLogItem from "../components/game/GuessLogItem"
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  let minBoundry =1;
  let maxBoundry =100;

function GameScreen({userNumber,onGAmeOver}){
    const initialGuess= generateRandomBetween(1,100, userNumber )
    const[currentGuess, setCurrentGuess]= useState(initialGuess)
    const[guessRounds, setGuessRounds]= useState([initialGuess])
    useEffect(()=>{
      if(currentGuess ===userNumber){
        onGAmeOver(guessRounds.length)


      }
    },[currentGuess, userNumber, onGAmeOver])
    useEffect(()=>{
      minBoundry=1;
      maxBoundry =100;

    },[])
    function nextGuessHandler (direction){
      if((direction ==='lower' &&  currentGuess<userNumber) || 
      (direction ==='greater' && currentGuess> userNumber)){
        Alert.alert("Don't lie","You know that is wrong...",[{text: "Sorry", style:'cancel'}])
        return
      }
      if(direction ==='lower'){
        maxBoundry = currentGuess;
        
      }
      else {
        minBoundry=currentGuess+1;
        

      }
      const newRndNumber= generateRandomBetween(minBoundry, maxBoundry, currentGuess)
      setCurrentGuess(newRndNumber)
      setGuessRounds((prevGuessROunds)=> [newRndNumber,...prevGuessROunds])
    }
    const guessRoundsListLength = guessRounds.length;
    
    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
           <NumberContainer>{currentGuess}</NumberContainer>

        <Card><InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
       <View style={styles.buttonDirection}>
        <View style={styles.button}>
          <PrimaryButton 
          onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="remove-outline" size={20} color="black"/>
          </PrimaryButton>
          </View>
        <View style={styles.button}>     
            <PrimaryButton
             onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add-outline" size={20} color="black"/>
             </PrimaryButton></View>
       

       </View>
        </Card>
        <View style={styles.listContainer}>
          {/*{guessRounds.map((guessRound) =><Text key={guessRound}>{guessRound}</Text>)}
          */}
          <FlatList data={guessRounds}
           renderItem={(itemData)=> <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
           keyExtractor={(item)=> item} />

          </View>
        </View>
        
    )

}
export default GameScreen
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:30,
        alignItems:'center'
    },
    direction:{
      flexDirection:"row-reverse",
      textAlign:"center",
      justifyContent:"center",
      alignItems:"center"
    },
    buttonDirection: {
      flexDirection: 'row',
      marginTop: 20,
  },
  button: {
      flex: 1,
  },
  instructionText:{
    marginBottom:12,
  },
 
 listContainer:{
  flex:1,
  padding:20



  }
    
})