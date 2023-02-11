import React, {useState} from 'react';
import {Dimensions, Text, View, StyleSheet, Button, Alert} from 'react-native';
import PlayerBox from './PlayerBox';
import {Colors} from '../../Utils/Colors';
import {
  BLUE,
  FOUR,
  GREEN,
  ONE,
  RED,
  THREE,
  TWO,
  YELLOW,
} from '../../Utils/Constants';

const Game = () => {
  const {red, blue, yellow, green} = Colors;

  // //   console.log("hello red state", redState);
  const initializePlayer = async (playerType, Colors) => {
    return {
      pieces: initializePieces(playerType),
      Colors: Colors,
      player: playerType,
    };
  };

  const initializePieces = playerColor => {
    return {
      one: {name: ONE, color: playerColor},
      two: {name: TWO, color: playerColor},
      three: {name: THREE, color: playerColor},
      four: {name: FOUR, color: playerColor},
    };
  };

  const showPlayerBox = player => {
    console.warn('palyer Color is = > ', player._j.Colors);
    return <PlayerBox Colors={player} />;
  };
  useState(() => {
    // createTwoButtonAlert()
  }, []);
  const redPlayer = initializePlayer(RED, red);
  const yellowPlayer = initializePlayer(YELLOW, yellow);
  const bluePlayer = initializePlayer(BLUE, blue);
  const greenPlayer = initializePlayer(GREEN, green);

  console.warn('red player ', redPlayer);
  console.warn(yellowPlayer);

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <View style={styles.twoPlayerContainer}>
          {showPlayerBox(redPlayer)}
          {showPlayerBox(yellowPlayer)}
        </View>

        <View style={styles.horizontalCellContainer}></View>
        <View style={styles.twoPlayerContainer}>
          {showPlayerBox(bluePlayer)}
          {showPlayerBox(greenPlayer)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  gameContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
    borderWidth: 2,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    // borderColor:'red',
    alignSelf: 'center',
  },
  twoPlayerContainer: {
    flex: 3,
    backgroundColor: '#ddd',
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 2,
    flexDirection: 'row',
  },
  horizontalCellContainer: {
    flex: 2,
    backgroundColor: '#999',
  },
});

export default Game; //   const { red, blue, yellow, green } = Colors;
//   console.log(red, blue, green,yellow);

//  var laalRang =  initializePlayer(RED,red)
// console.warn("laalRang",laalRang);

// //   console.log("hello red state", redState);
//  const initializePlayer = async (playerType , Color) => {
//     console.warn("initializePlayer",playerType,Color)
//   return {
//   pieces : initializePieces(playerType),
//   Color:Color,
//   player: playerType
// }
//  }

//  const initializePieces = (playerColor) => {
//     console.warn("initializePieces", playerColor);
//   return {
//     one: {name: ONE, color: playerColor},
//     two: { name:TWO , color: playerColor },
//     three: {name: THREE, color: playerColor},
//     four: {name: FOUR, color: playerColor}
//   }
//  }
// // const setColors = () => {

//  setYellowState((prev ) => {createTwoButtonAlert(RED,prev)})
// }

// console.warn("yellow",yellowState);

//  const createTwoButtonAlert = (Player, Color) =>{
//   console.warn("function called", Player,Color)
//     initializePlayer(Player,Color)
//  }
