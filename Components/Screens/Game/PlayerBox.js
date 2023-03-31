import React from 'react';

import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../Utils/Colors';
const PlayerBox = ({colors, customStyle, one, two, three, four}) => {
  let color = colors._j.Colors;

  const renderPieces = piece => {
    if (piece.position === 'HOME') {
      return (
        <TouchableOpacity style={{flex: 1}}>
          <View style={[style.pieceStyle, {backgroundColor: color}]} />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity style={{flex: 1}}>
        <View style={[style.pieceStyle, {backgroundColor: color}]} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        {
          backgroundColor: color,
          flex: 3,
          borderRadius: 2,
        },
        customStyle,
      ]}>
      <View style={style.innerContainer}>
        <View style={style.piecesContainer}>
          {renderPieces(one)}
          {renderPieces(two)}
        </View>
        <View style={style.piecesContainer}>
          {renderPieces(three)}
          {renderPieces(four)}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 20,
  },
  piecesContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  pieceStyle: {
    flex: 1,
    margin: 5,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
  },
});


export default PlayerBox;
