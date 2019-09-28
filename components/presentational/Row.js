
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Row = ({ children }) => (
  <View style={styles.r}>
    {children}
  </View>
);

Row.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  r: {
    flexDirection: 'row',
  },
});

export default Row;
