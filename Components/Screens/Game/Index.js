import React, {useState} from 'react';
import {Dimensions, Text, View, StyleSheet, Button, Alert} from 'react-native';
import PlayerBox from './PlayerBox';
import {Colors} from '../../Utils/Colors';
import {
  BLUE,
  BOTTOM_VERTICAL,
  FOUR,
  GREEN,
  HOME,
  ONE,
  RED,
  THREE,
  TOP_VERTICAL,
  TWO,
  YELLOW,
} from '../../Utils/Constants';
import {VerticalCellContainer} from '../../VerticalCellContainer/VerTicalCellContainer';
import {HorizontalCellContainer} from '../../HorizontalCellContainer/HorizontalCellContainer';

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
      one: {position: HOME, name: ONE, color: playerColor},
      two: {position: HOME, name: TWO, color: playerColor},
      three: {position: HOME, name: THREE, color: playerColor},
      four: {position: HOME, name: FOUR, color: playerColor},
    };
  };

  const showPlayerBox = (player, customStyle) => {
    const {one, two, three, four} = player._j.pieces;
    console.warn(one);
    return (
      <PlayerBox
        colors={player}
        one={one}
        two={two}
        three={three}
        four={four}
        customStyle={customStyle}
      />
    );
  };
  useState(() => {
    // createTwoButtonAlert()
  }, []);
  const redPlayer = initializePlayer(RED, red);
  const yellowPlayer = initializePlayer(YELLOW, yellow);
  const bluePlayer = initializePlayer(BLUE, blue);
  const greenPlayer = initializePlayer(GREEN, green);

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <View style={styles.twoPlayerContainer}>
          {showPlayerBox(redPlayer)}
          <VerticalCellContainer position={TOP_VERTICAL} />
          {showPlayerBox(yellowPlayer)}
        </View>

        {/* <View style={styles.horizontalCellContainer}></View> */}
        <HorizontalCellContainer />
        <View style={styles.twoPlayerContainer}>
          {showPlayerBox(bluePlayer)}
          <VerticalCellContainer position={BOTTOM_VERTICAL} />
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
    elevation: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  twoPlayerContainer: {
    flex: 3,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  horizontalCellContainer: {
    flex: 2,
    backgroundColor: '#fff',
  },
});

export default Game; //   const { red, blue, yellow, green } = Colors;
