import React, { useState } from "react"
import { Button, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import StartButon from "../components/StartButton";
import Input from "../components/Input";
import Card from "../components/Card";
import Color from "../constant/Color";

const StartGame = props => {
    const [enterNumber, setenterNumber] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectNum, setSelecNum] = useState()
    const InputNumberhandler = inputText => {
        setenterNumber(inputText.replace(/[^0-9]/g, ""))
    }
    
    const resetHandler = () => {
        setenterNumber("")
        setConfirmed(false)
    }

    const startHandler = () => {
        const num = parseInt(enterNumber)
        if (isNaN(num)|| num < 1|| num > 98) {
            Alert.alert(
                "Invalid", "Number has to be a number between 1 and 99",
                [{
                    text: 'okay'
                    , style: 'destructive'
                    , onPress:resetHandler
                }]
            )
            return;
        }
        setConfirmed(true)
        setSelecNum(num)
        setenterNumber("")
        Keyboard.dismiss()

    }
    let confrmOtput
    if (confirmed) {
        confrmOtput =
    
        (   <Card style={{margin:40,}}>
        <Text style={{textAlign:"center",}}>The Selected Number is:</Text>
        <Card style={{padding:10,width:-50}}>
        <Text style={{textAlign:"center",}}>{selectNum}</Text>
        </Card>
        <Button title="Start The Game" color={Color.primary} onPress={()=> props.onStart( selectNum)} />
    </Card>);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.ScreenView}>
                <Text style={{ fontSize: 20, paddingVertical: 10 }}>Start a New game</Text>

                <Card style={styles.inputView}>
                    <Text>Select the number</Text>
                    <Input placeholder="" style={styles.input} keyboardType='number-pad'
                        maxLength={2}
                      
                        onChangeText={InputNumberhandler}  />
                    {/*<TextInput placeholder="Entered the Number" style={{ fontSize: 15 }} keyboardType='numeric' />*/}
                    <View style={styles.buttonView}>
                        <Button title="Reset" color={Color.accent} onPress={resetHandler} />


                        <Button title="Select" color={Color.primary} onPress={startHandler} />
                    </View>
                </Card>
                {confrmOtput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    ScreenView: {
        flex: 1,

        paddingTop: 15,
        padding: 10,
        alignItems: "center"
    },
    inputView: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",


    },
    buttonView: {

        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15,
        padding: 10,

    }, input: {
        fontSize: 10,
        width: 50,
        textAlign: 'center'
    }
})
export default StartGame
