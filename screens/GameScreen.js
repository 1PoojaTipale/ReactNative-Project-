import React,{useState,useRef,useEffect} from 'react';
import {View,StyleSheet,Text,Alert,ScrollView, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
// import BodyText from '../components/BodyText';

import Card from '../components/Card';

const generateRandomBetween =(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum =Math.floor (Math.random()*(max-min))+min;
if(rndNum === exclude)
{
    return generateRandomBetween(min,max,exclude);
}
else
{
    return rndNum;
}
}; 


const renderListItem = (listLength,itemData) =>
(<View style={styles.listItem}>
    <Text>#{listLength=itemData.index}</Text>
            <Text> {itemData.item}</Text>
        </View>);


const GameScreen =props=>
{
const initialGuess=generateRandomBetween(1,100,props.userChoice);
    // const[rounds,setRounds]=useState(0);
    const [currentGuess,setCurrentGuess]=useState(initialGuess);
    const [pastGuesses,setPastGuesses]=useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
 
    const{userChoice,onGameOver }=props;
    useEffect(()=>{
        if(currentGuess === userChoice)
        {
         onGameOver(pastGuesses.length);
        }

    },[currentGuess,userChoice,onGameOver]);

const nextGuessHandler=direction=>{
if((direction === 'lower'&& currentGuess<props.userChoice)||(direction==='greater'&& currentGuess>userChoice))
{
Alert.alert('Don\'t lie!','You Know That This Is Wrong...',
[{text:'Sorry!',style:'cancel'}]);  

return;
}
if
(direction === 'lower')
{
currentHigh.current =currentGuess;
}
else
{
    currentLow.current =currentGuess + 1;
}
 const nextNumber = generateRandomBetween
 (currentLow.current,
    currentHigh.current,
    currentGuess
    );
 setCurrentGuess(nextNumber);
//  setRounds(curRounds=>curRounds+1);
setPastGuesses(curPastGuesses=>[nextNumber.toString(),...curPastGuesses]);
};



return(

<View style={styles.screen}>

<Text> Opponent's Guess</Text>
<NumberContainer>{currentGuess}</NumberContainer>
<Card style={styles.buttonContainer}> 
   <MainButton  onPress= {nextGuessHandler.bind(this,'lower')}>
       <Ionicons name="md-remove" size={24} color="white"/>
 </MainButton>
   <MainButton onPress={nextGuessHandler.bind(this,'Greater') }>
   <Ionicons name="md-add" size={24} color="white"/>
     </MainButton>
    </Card>
    <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
        {pastGuesses.map((guess,index) => renderListItem(guess,pastGuesses.length- index )) }
    </ScrollView> */}
    <FlatList keyExtractor={(item)=>item}
     data={pastGuesses} 
     renderItem={renderListItem.bind( this,pastGuesses.length)}
     contentContainerStyle={styles.list}
     />
</View>
    

</View>

);



};




const styles =StyleSheet.create({

screen:{
    flex:1,
    padding:10,
    alignItems:'center',
},
buttonContainer:
{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    width:400,
    maxWidth:'90%'
},

listContainer:{
    flex:1,
    width:'60%'
},

list:
{
    flexGrow:1,
    // flex:1,
// alignItems:'center',
justifyContent:'flex-end'
},
listItem:
{
    borderColor:'#ccc',
    padding:15,
    marginVertical:10,
    backgroundColor:'white',
    borderWidth:1,
    flexDirection:'row',
 justifyContent:'space-between',
 width:'100%'
}

});




export default GameScreen;