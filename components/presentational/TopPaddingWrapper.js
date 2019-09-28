import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const TopPaddingWrapper = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

TopPaddingWrapper.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: R.paddings.l,
  },
});

export default TopPaddingWrapper;
