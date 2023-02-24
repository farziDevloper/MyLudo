import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../Utils/Colors';

export const Dice = ({isRolling, turn, onDiceRoll, diceNumber}) => {
  const renderDiceSurface = diceNumber => {
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
      <View>
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
      </View>
    );
  };
  const renderSurfaceFive = () => {
    return (
      <View>
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
      </View>
    );
  };
  const renderSurfaceSix = () => {
    return (
      <View>
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
        <View style={styles.diceDot} />
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.textStyle}>Roll DIce</Text>
      <View style={styles.container}>{renderDiceSurface(2)}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#f00',
  },
  textStyle: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 5,
  },
  diceDot: {
    backgroundColor: Colors.white,
    width: 6,
    height: 6,
    alignSelf: 'center',
    borderWidth: 3,
    margin: 2,
    borderRadius: 3,
  },
});
