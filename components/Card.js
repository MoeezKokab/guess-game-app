import React from "react"
import { View ,StyleSheet} from 'react-native';
import Color from "../constant/Color";

const Card =props=>{
    return(
    <View style={{...styles.card,...props.style}}>{props.children}</View>)
}

const styles=StyleSheet.create({
    card:{ padding: 25,
        shadowColor:Color.accent,
        shadowOffset:{width:1,height:1},
        shadowRadius:50,
        shadowOpacity:2,
        backgroundColor:'white',
        borderRadius:90,},

})
export default Card;