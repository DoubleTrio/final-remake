import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const SectionHeaderText = ({ text }) => (
  <Text style={styles.headerText}>{text}</Text>
);

SectionHeaderText.Proptypes = {
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  headerText: {
    color: R.colors.primary,
    fontSize: R.fontSizes.header,
    fontWeight: 'bold',
  },
});

export default SectionHeaderText;
