import { Pressable, View , Text, StyleSheet  } from "react-native"
import Colors from "@/constants/Colors"
function PrimaryButton({children, onPress}){
    
    return (
    <View style={styles.buttonOuterContainer} >
     <Pressable style={({pressed})  =>pressed? 
     [styles.buttonInnercontainer, styles.pressed]:
      styles.buttonInnercontainer} 
     onPress={onPress} android_ripple={{color:Colors.primary600}}>
        <View >
        <Text style={styles.buttonText}> {children}</Text>
    </View>
    </Pressable>
    </View>
    )
}
export default PrimaryButton
const styles= StyleSheet.create({
     buttonOuterContainer:{ 
        borderRadius:28,
        margin:4,
        overflow:"hidden"

     },
    buttonInnercontainer:{
        backgroundColor:"white",
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        margin:4,

    },
    buttonText:{
        textAlign:"center"


    },
    pressed:{
        opacity:0.75,
    }
    

})