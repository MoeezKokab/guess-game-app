import React from "react"
import { StyleSheet, TextInput} from 'react-native';

const Input = props=>{
    return(
        <TextInput  {...props} style={{...styles.input,...props.style}} blurOnSubmit   />
    )

}
const styles = StyleSheet.create({
    input:{
        //height:10,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:5,
    }

})

export default Input ;