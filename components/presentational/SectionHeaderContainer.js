import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';
import { moderateScale } from '../../styles/scale';

const SectionHeaderContainer = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
);

SectionHeaderContainer.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.secondary,
    height: moderateScale(35),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default SectionHeaderContainer;