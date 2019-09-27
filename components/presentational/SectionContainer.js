import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const SectionContainer = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

SectionContainer.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        backgroundColor: R.colors.light,
        borderWidth: R.sBorder,
    },
});

export default SectionContainer;