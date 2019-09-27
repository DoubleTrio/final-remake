import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

ScreenContainer.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: R.colors.bg,
  },
});

export default ScreenContainer;
