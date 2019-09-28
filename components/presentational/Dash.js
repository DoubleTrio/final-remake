import React from 'react';
import { StyleSheet, View } from 'react-native';
import R from '../../styles/index';

export default Dash = () => (
  <View style={styles.dash} />
);

const styles = StyleSheet.create({
  dash: {
    borderTopWidth: R.sBorder,
    width: '100%',
    height: 0.1,
  },
});
