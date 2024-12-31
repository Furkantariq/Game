import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert,Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '@/constants/Colors';
import Title from "../components/ui/title"
import Card from "../components/ui/Card"
import InstructionText from '../components/ui/InstructionText'

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function handleNumberInput(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>

            <InstructionText >Enter a number</InstructionText>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={handleNumberInput}
            />
            <View style={styles.buttonDirection}>
                <View style={styles.button}>
                   
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
       </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:"center"

    },
    
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        marginVertical: 4,
        fontWeight: 'bold',
        color: Colors.accent500,
        width: 45,
        textAlign: 'center',
    },
    buttonDirection: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        flex: 1,
    },
    
});
