import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header"
import StartGame from './Screen/StartGame';
import GameScreen from './Screen/GameScreen';

export default function App() {
  const [isNumberSelect, setisNumberSelect] = useState()
  const NumHandler = num => {
    setisNumberSelect(num)
  }
  let scr = <StartGame onStart={NumHandler} />
  if (isNumberSelect) {
    scr = <GameScreen onStartbutton={isNumberSelect} onEixt={NumHandler} />
  }
  return (
    <View style={styles.container}>

      <Header title="Guess Game" style={{borderRadius:45}}/>
      {scr}
      <Header title="The Game" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:-5

  },
});
