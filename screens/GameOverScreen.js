import React from 'react';
import {View,Text,StyleSheet,Button,Image,Diamensions,ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props =>{
return(
<ScrollView>
<View style={styles.screen}>
    <Text>The Game is Over!</Text>
    <View style={styles.imageContainer}>
        <Image 
    source={require('../assets/fonts/Success.jpg')} 
    // source={{uri:'https://cdn4.vectorstock.com/i/1000x1000/74/43/background-with-zigzag-road-and-cartoon-cars-vector-2737443.jpg'}}
    // source={{uri:'https://c4.wallpaperflare.com/wallpaper/474/406/343/touge-hairpin-turns-light-trails-road-wallpaper-preview.jpg'}}
    style={styles.image}
    resizeMode="cover" />
    </View>
    <View  style={styles.resultContainer} >
    <Text style={styles.resultText} > Your phone needed {''}<Text style={styles.highlight}>{props.roundsNumber}</Text>rounds to guess 
    the number{''}<Text style={styles.highlight}>{props.userNumber}</Text>.</Text></View>

    {/* <Text>Number of rounds:{props.roundsNumber}</Text>
    <Text>Number was:{props.userNumber}</Text> */}
    <MainButton  onPress={props.onRestart}>
        NEW Game
    </MainButton>
</View>
</ScrollView>

);

};




 const styles =StyleSheet.create({
     screen:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         paddingVertical:10
     },

     imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30,
     },
    
     image:{
         width:'100%',
         height:'100%'
        },

        highlight:{
    color:Colors.primary
        },
        
        resultContainer:{
            marginHorizontal:30,
            marginVertical:15,
        },

        resultText:{
            textAlign:'center',
            fontSize:20
        }
 });
 export default GameOverScreen;