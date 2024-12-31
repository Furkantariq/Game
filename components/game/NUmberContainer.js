import {StyleSheet, Text, View, Dimensions} from"react-native";
import Colors from"../../constants/Colors"
function NumberContainer({children}){
    return(
    <View style={styles.conatiner}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    )
}

export default NumberContainer
const deviceWidth = Dimensions.get('window').width;
const styles= StyleSheet.create({
    conatiner:{
        borderColor:Colors.accent500,
        borderWidth:4,
        padding:deviceWidth<390?12:24,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        fontWeight:"bold",
        margin:24,


    },
    numberText:{
        color: Colors.accent500,
        fontSize:36,
        fontWeight:"bold"
    },

})