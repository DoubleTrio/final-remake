import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const CenterContainer = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

CenterContainer.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: '100%',
  },
});

export default CenterContainer;