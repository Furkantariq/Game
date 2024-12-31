import { StyleSheet,Text } from "react-native"
import Colors from "@/constants/Colors"

function title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    )

}
export default title

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:"bold",
        borderWidth:2,
        borderColor:Colors.accent500,
        textAlign:"center",
        color:Colors.accent500,
        padding:10,
        maxWidth:'80%'
    }

})