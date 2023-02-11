import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PlayerBox = Colors => {
  let color = Colors.Colors._j.Colors;
  console.warn('Player components', color);
  return (
    <View
      style={{
        backgroundColor: color,
        flex: 2,
      }}></View>
  );
};

export default PlayerBox;
