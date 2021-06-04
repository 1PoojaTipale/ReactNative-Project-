// import React, { useState } from 'expo-status-bar';
import React,  { useState }  from 'react';
import Header from './components/Header.js';
import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen.js';
import GameOverScreen from './screens/GameOverScreen.js';
import { StyleSheet, Text, View } from 'react-native';
// import* as Font from 'expo-font';
// import {AppLoading} from 'expo';

// const fetchFonts=()=>{
//   return Font.loadAsync({
//   'Lora-VariableFont_wght':require('./assets/Lora-VariableFont_wght.ttf'),
//   'Lora-Italic-VariableFont_wght':require('./assets/Lora-Italic-VariableFont_wght.ttf'),
// });
// };



export default function App() {

const[userNumber,setUserNumber]=useState();

const[guessRounds,setGuessRounds]=useState(0);
// const [dataLoaded,setDataLoaded]=useState(false)
// if (!dataLoaded)
// {
//   return(
//   <AppLoading 
//    startAsync={fetchFonts} 
//    onFinish={()=> setDataLoaded(true)} 
//    onError={(err)=> console.log(err)} 
//    />
//    );
// }

// fetchFonts();

const configureNewGameHandler =()=>{
setGuessRounds(0);
setUserNumber(null);
};

const startGameHandler=(selectedNumber)=>{
  setUserNumber(selectedNumber);
// setGuessRounds(0);
};

const gameOverHandler = numOfRounds => {
setGuessRounds(numOfRounds);
};


let content =<StartGameScreen onStartGame={startGameHandler} />;
// content=(
//   <GameOverScreen
//   roundsNumber={1}
//   userNumber={1}
//   onRestart={configureNewGameHandler}/>
// );
if(userNumber && guessRounds <= 0){
  content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
}
else if
(guessRounds > 0){
  content=<GameOverScreen  roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
}
  return (
    <View style={styles.screen} >
<Header title="Guess a Number"/>
{content}

    </View>
   
  );
}

const styles = StyleSheet.create({
  screen :{
flex:1,
// backgroundColor:'#fff',
// alignItems:'center',
// justifyContent:'center'
  }
});
