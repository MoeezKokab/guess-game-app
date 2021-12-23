import React from "react";
import {View,StyleSheet,Text, Button} from 'react-native';
import Card from "./Card";
import Color from "../constant/Color";

const StartButon = props =>{
return(
    
    <Card style={styles.card}>
        <Text style={{textAlign:"center",}}>The Selected Number is:</Text>
        <Card style={{padding:10,width:-50}}>
        <Text style={{textAlign:"center",}}>{props.num}</Text>
        </Card>
        <Button title="Start The Game" color={Color.primary} />
    </Card>
    
)
}
const styles=StyleSheet.create({
    card:{
        margin:40,
        
        
        //paddingTop:10
    }
})

export default StartButon