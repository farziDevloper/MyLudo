import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../Utils/Colors';

export const HorizontalCellContainer = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: Colors.black,
  },
});
