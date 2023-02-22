import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../Utils/Colors';
import {G13, R6, TOP_VERTICAL} from '../Utils/Constants';

export const VerticalCellContainer = ({position}) => {
  console.warn(position);

  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}>
          <Text>{position == TOP_VERTICAL ? R6 : G13}</Text>
        </View>
      </View>
      <View style={styles.columnContainer}>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
      </View>
      <View style={styles.columnContainer}>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
        <View style={styles.cellContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  columnContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // borderWidth: 1,
  },
  cellContainer: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
  },
});
