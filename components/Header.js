import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import Color from "../constant/Color";
import Card from "./Card";

const Header = props =>{
    return(
        
        <Card style={{...styles.headerView,...props.style}}>
            <Text style={styles.headerText}>
                {props.title}
            </Text>
        </Card>
    )
}

const styles =StyleSheet.create({
    headerView:{
        paddingTop:36,
        width:"100%",
        height:90,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Color.primary,
        borderBottomEndRadius:74,
        borderBottomLeftRadius:74
    },
    headerText:{
      fontSize:25
    }

})
export default Header