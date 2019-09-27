import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const PaddingWrapper = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

PaddingWrapper.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: R.paddings.m,
  },
});

export default PaddingWrapper;