import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import Card from "../components/Card";
import Color from "../constant/Color";


const GameScreen = props => {
    const [confirmed, setConfirmed] = useState(true)

    let viewScreen

    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min)

        max = Math.floor(max)

        const rndNum = Math.floor(Math.random() * (-min + max) + min)
        if (rndNum === exclude) {
            console.log("yes if")
            setConfirmed(false)
            Alert.alert(
                "Finally", "Machine guess your number",
                [{
                    text: 'okay'
                    , style: 'destructive'
                    
                }]
            )

            return generateRandomBetween(min, max, exclude)

        }
        else {
            return rndNum;
        }


    }

    const [current, setCurrent] = useState(generateRandomBetween(1, 100, props.isNumberSelect))

    const less = () => {

        console.log(current < props.isNumberSelect)
        setCurrent(generateRandomBetween(1, 100, props.onStartbutton))
        console.log(parseInt(current) > parseInt(props.isNumberSelect))



    }

    if (confirmed) {
        viewScreen = (<View>
            <View style={{ marginTop: 25 }}>
                <Card>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>
                        Machine Guess : {current}
                    </Text >
                    <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
                       My selected : {props.onStartbutton}</Text>
                </Card>
            </View>
            <View style={styles.buttonView}>
                <Button title="Next Guess " onPress={less} color={Color.primary} />
                <Button title="Next Guess " onPress={less} color={Color.primary} />
            </View>
            <Card>
                <Button title='Exit' onPress={() => props.onEixt()} color={Color.primary} />
            </Card>
        </View>)
    }
    else {
        viewScreen = (
            <View style={styles.EndView}>
                <Card >

                    <Button title='Start new Game' onPress={() => props.onEixt()} color={Color.primary} />


                </Card>
            </View>)


    }



    return (
        <View style={{flex:1}}>
            {viewScreen}
        </View>)

}

const styles = StyleSheet.create({
    buttonView: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 30
    },
    EndView: {
        padding: 20,
        marginTop: 80
    }
})


export default GameScreen