import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../Utils/Colors';
import {
  B1,
  B2,
  B3,
  B4,
  B5,
  G12,
  G13,
  G18,
  R10,
  R11,
  R6,
  R7,
  R8,
  R9,
  TOP_VERTICAL,
  Y14,
  Y15,
  Y16,
  Y17,
  B14,
  G14,
  G17,
  G16,
  G15,
  G20,
  R12,
  R13,
  G6,
  G7,
  Y1,
  Y2,
  G8,
  G9,
  Y3,
  G10,
  Y4,
  G11,
  Y5,
  G1,
  Y18,
  B18,
  B15,
  B17,
  B16,
} from '../Utils/Constants';

export const VerticalCellContainer = ({position}) => {
  const column1 =
    position == TOP_VERTICAL
      ? [R11, R10, R9, R8, R7, R6]
      : [B5, B4, B3, B2, B1, G13];

  const column2 =
    position == TOP_VERTICAL
      ? [R12, Y14, Y15, Y16, Y17, Y18]
      : [B18, B17, B16, B15, B14, G12];

  const column3 =
    position == TOP_VERTICAL
      ? [R13, Y1, Y2, Y3, Y4, Y5]
      : [G6, G7, G8, G9, G10, G11];

  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        {column1.map(currentPosition => {
          return (
            <View style={styles.cellContainer} key={currentPosition}>
              <Text>{currentPosition}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {column2.map(currentPosition => {
          return (
            <View style={styles.cellContainer} key={currentPosition}>
              <Text>{currentPosition}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {column3.map(currentPosition => {
          return (
            <View style={styles.cellContainer} key={currentPosition}>
              <Text>{currentPosition}</Text>
            </View>
          );
        })}
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
