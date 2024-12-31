import { View,Text, StyleSheet, Image } from "react-native"
import Title from'../components/ui/title'
import Colors from "@/constants/Colors"
import PrimaryButton from "@/components/ui/PrimaryButton"
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return(
   <View style={styles.rootcontainer}>
    
    <Title>GameOverScreen</Title>
    <View style={styles.imagecontainer}>
    <Image style={styles.image} source={require('../assets/images/success.png')}/>
    </View>
    <Text style={styles.summaryText} >
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> 

          <Text> rounds to guess the number</Text> <Text style={styles.highlight}>{userNumber}</Text>.</Text>
   
    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
   </View>
    )
    

}
export default GameOverScreen
const styles =StyleSheet.create({
    rootcontainer:{
        flex:1,
        padding:26,
        justifyContent:"center",
        alignItems:"center",
        margin:30,
    },

   
    imagecontainer:{
        alignItems:"center",
        justifyContent:"center",
        borderRadius:200,
        width:300,
        height:300,
        borderWidth:3,
        borderColor:Colors.accent500,
        overflow:'hidden',margin:40,
       
       
        


    },
    image:{
        
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontSize:20,
        textAlign:"center"

    },
    highlight:{
        fontWeight:"bold",
        color:Colors.primary500
    },


       
})