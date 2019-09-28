import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import R from '../../styles/index';

export default ErrorText = ({ text }) => (
  <View>
    <Text style={styles.errorFont}>{text}</Text>
    <MaterialIcons
      style={styles.errorFont}
      name="error"
    />
  </View>
);

ErrorText.propType = {
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  errorFont: {
    color: R.colors.error,
    fontSize: R.fontSizes.header,
    alignSelf: 'center',
    fontFamily: R.fonts.normalFont,
  },
});
