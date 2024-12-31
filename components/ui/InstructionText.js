import {Text, View, StyleSheet} from 'react-native'
import Colors from '@/constants/Colors'
function InstructionText({children, style}){
    return (
        <Text style={[styles.instructionSet, style]}>{children}</Text>
    )

}
export default InstructionText
const styles= StyleSheet.create({


    
    instructionSet:{
        color:Colors.accent500,
        fontSize:24,
        fontWeight:"bold",

        marginVertical:40,
    }

})