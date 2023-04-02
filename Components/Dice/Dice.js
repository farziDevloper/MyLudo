import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../Utils/Colors';
import {BLUE, GREEN, RED, YELLOW} from '../Utils/Constants';
let color;
export const Dice = ({isRolling, turn, onDiceRoll, diceNumber}) => {
  const {red, yellow, green, blue} = Colors;
   color =
    turn === RED
      ? red
      : turn === YELLOW
      ? yellow
      : turn === GREEN
      ? green
      : turn === BLUE
      ? blue
      : undefined;



      // console.warn(color , "color < =====");
  const renderDiceSurface = diceNumber => {
    console.warn("dice number === > ",diceNumber );
    switch (diceNumber) {
      case 1:
        return renderSurfaceOne();
      case 2:
        return renderSurfaceTwo();
      case 3:
        return renderSurfaceThree();
      case 4:
        return renderSurfaceFour();
      case 5:
        return renderSurfaceFive();
      case 6:
        return renderSurfaceSix();
    }
  };

  const renderSurfaceOne = () => {
    return <View style={styles.diceDot} />;
  };
  const renderSurfaceTwo = () => {
    return (
      <View>
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
      </View>
    );
  };
  const renderSurfaceThree = () => {
    return (
      <View>
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
      </View>
    );
  };
  const renderSurfaceFour = () => {
    return (
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {renderSurfaceTwo()}
        {renderSurfaceTwo()}
      </View>
    );
  };
  const renderSurfaceFive = () => {
    return (
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {renderSurfaceTwo()}
        {renderSurfaceOne()}
        {renderSurfaceTwo()}
      </View>
    );
  };
  const renderSurfaceSix = () => {
    return (
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {renderSurfaceThree()}
        {renderSurfaceThree()}
      </View>
    );
  };

  return (
    <View>
      {/* <Text style={styles.textStyle}>Roll DIce</Text> */}
      <TouchableOpacity
        style={[styles.container, {backgroundColor: color}]}
        onPress={onDiceRoll}>
        {renderDiceSurface(6)}
      </TouchableOpacity>
      {isRolling && (
        <View style={styles.isRolling}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 5,
  },
  diceDot: {
    backgroundColor:Colors.black ,
    alignSelf: 'center',
    width: 11,
    height: 11,
    padding: 5,
    margin: 5,
    marginBottom: 6,
    marginRight: 6,
    borderRadius: 3,
  },
  container: {
    position: 'absolute',
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#f00',
  },
});
