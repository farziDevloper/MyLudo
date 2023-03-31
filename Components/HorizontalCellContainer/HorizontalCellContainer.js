import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Dice} from '../Dice/Dice';
import {Colors} from '../Utils/Colors';
import {
  B10,
  B11,
  B12,
  B13,
  B6,
  B7,
  B8,
  B9,
  G1,
  G14,
  G15,
  G16,
  G17,
  G18,
  G2,
  G3,
  G4,
  G5,
  R1,
  R14,
  R15,
  R16,
  R17,
  R18,
  R2,
  R3,
  R4,
  R5,
  Y10,
  Y11,
  Y12,
  Y13,
  Y14,
  Y15,
  Y16,
  Y17,
  Y18,
  Y6,
  Y7,
  Y8,
  Y9,
} from '../Utils/Constants';

export const HorizontalCellContainer = () => {
  const RenderEMptySpace = () => {
    return <View style={{flex: 3}} />;
  };
  const RenderRow = positionOfCells => {
    return (
      <View style={{flex: 6, flexDirection: 'row'}} key={positionOfCells}>
        {positionOfCells.map(e => {
          return (
            <View style={styles.cellContainer}>
              <Text>{e}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  const renderRowContainer = (arr1, arr2) => {
    return (
      <View style={styles.rowsContainer}>
        {RenderRow(arr1)}
        {RenderEMptySpace()}
        {RenderRow(arr2)}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Dice />
      {renderRowContainer(
        [B13, R1, R2, R3, R4, R5],
        [Y6, Y7, Y8, Y9, Y10, Y11],
      )}
      {renderRowContainer(
        [B13, R1, R2, R3, R4, R5],
        [G18, G17, G16, G15, G14, Y12],
      )}
      {renderRowContainer(
        [B12, R14, R15, R16, R17, R18],
        [G5, G4, G3, G2, G1, Y13],
      )}
    </View>
  );
      }



const styles = StyleSheet.create({
  container: {
    flex: 2,

    backgroundColor: Colors.white,
  },
  rowsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cellContainer: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,

  },
})
;