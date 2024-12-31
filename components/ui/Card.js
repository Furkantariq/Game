import {Text,View, StyleSheet} from "react-native"
import Colors from  "../../constants/Colors"
function Card({children}){
    return(
        <View style={styles.card}>
            {children}
            </View>
    )

}
export default Card
const styles =StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        padding: 30,
        backgroundColor: Colors.primary500,
        marginHorizontal: 20,
        borderRadius: 8,
        elevation: 6,
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
})