import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from '../../styles/scale';
import R from '../../styles/index';

export default ConfirmButton = ({ isActive, onConfirm }) => (
  <TouchableOpacity
    disabled={!isActive}
    activeOpacity={0.5}
    style={[styles.container, isActive === true ? styles.activeColor : {}]}
    onPress={onConfirm}
  >
    <Text style={styles.btnText}>Confirm</Text>
  </TouchableOpacity>
);

ConfirmButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: R.sBorderRadius,
    paddingHorizontal: R.paddings.l,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '50%',
    bottom: moderateScale(50),
    height: moderateScale(40),
    backgroundColor: R.colors.border,
    zIndex: 3,
  },

  btnText: {
    alignSelf: 'center',
    color: R.colors.light,
    fontSize: R.fontSizes.m,
    fontWeight: 'bold',
  },

  activeColor: {
    backgroundColor: R.colors.confirm,
  },
});
