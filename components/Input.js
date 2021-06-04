

import React from 'react';
import {TextInput,StyleSheet} from 'react-native';
// import { isReturnStatement } from 'typescript';

const Input = props=>{
    return(
        <TextInput {...props} Style= {{...styles.input,...props.Style}}/>
    ); 
};

const styles = StyleSheet.create({
    input:
    {
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10
    }
});

export default Input;