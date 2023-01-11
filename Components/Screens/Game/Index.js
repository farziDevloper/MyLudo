import React, { useState } from 'react'
import { Dimensions, Text, View, StyleSheet, Button, Alert } from 'react-native'
import PlayerBox from './PlayerBox'
import {Colors} from "../../Utils/Colors"
import { FOUR, ONE, RED, THREE, TWO } from '../../Utils/Constants'

const Game = () => {

  const { red, blue, yellow, green } = Colors;
  console.log(red, blue, green,yellow);

//  const laalRang = () => initializePlayer(RED, red)
// console.warn("laalRang",laalRang);

//   console.log("hello red state", redState);
 const initializePlayer = (playerType , Color) => {
    console.warn("initializePlayer",playerType,Color)
  return {
  pieces : initializePieces(playerType),
  Color:Color,
  player: playerType 
}
 }

 const initializePieces = (playerColor) => {
    console.warn("initializePieces", playerColor);
  return {
    one: {name: ONE, color: playerColor},
    two: { name:TWO , color: playerColor },
    three: {name: THREE, color: playerColor},
    four: {name: FOUR, color: playerColor}
  }
 }
// const setColors = () => {

//  setYellowState((prev ) => {createTwoButtonAlert(RED,prev)})
// }

// console.warn("yellow",yellowState);

//  const createTwoButtonAlert = (Player, Color) =>{
//   console.warn("function called", Player,Color)
//     initializePlayer(Player,Color)
//  }

 const showPlayerBox = (Color) => {
    return <PlayerBox  Color={Color} />
  }
useState(() => {
  // createTwoButtonAlert()

  initializePlayer(RED,red)
},[])
  
  return (
    <View style={styles.container}>
    <View style={styles.gameContainer}>
      <View style={styles.twoPlayerContainer}>
       {showPlayerBox(Colors.red)}
       {showPlayerBox(Colors.yellow)}
        </View>
        
      <View style={styles.horizontalCellContainer}></View>
      <View style={styles.twoPlayerContainer}>
      {showPlayerBox(Colors.green)}
       {showPlayerBox(Colors.blue)}
      </View>
    </View>
  

   
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'skyblue',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  gameContainer : {
    width : Dimensions.get("screen").width,
    height : Dimensions.get("screen").width,
    borderWidth: 2,
    elevation:5,
    borderRadius:10,
    backgroundColor:'#fff',
    // borderColor:'red',
    alignSelf: 'center',
  },
  twoPlayerContainer: {
    flex:3,
    backgroundColor:'#ddd',
    borderColor:'black',
    borderRadius:20,
    borderWidth:2,
    flexDirection: 'row',
  },
  horizontalCellContainer:{
    flex:2,
    backgroundColor:'#999',

  }

})


export default Game