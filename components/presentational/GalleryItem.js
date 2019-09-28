import React from 'react';
import {
  View, StyleSheet, Image, Text, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const { width } = Dimensions.get('window');

export default GalleryItem = ({
  thumbUrl, isLast, time, isSingle,
}) => (
  <View style={[styles.border, isLast ? styles.noBorder : {}]}>
    <Image
      source={{ uri: thumbUrl }}
      style={isSingle ? styles.single : styles.image}
    />
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>{time}</Text>
    </View>
  </View>
);

GalleryItem.propTypes = {
  thumbUrl: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  isSingle: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1 / 1,
    width: R.cardWidth * 1.3,
  },

  single: {
    width: width - R.paddings.m * 2,
    height: R.cardWidth * 1.3,
  },

  border: {
    borderRightWidth: R.sBorder,
    borderTopWidth: R.sBorder,
  },

  noBorder: {
    borderRightWidth: 0,
  },

  dateContainer: {
    backgroundColor: R.colors.darkened,
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    paddingHorizontal: R.paddings.xs,
    top: 0,
    left: 0,
  },

  dateText: {
    color: R.colors.light,
    fontSize: R.fontSizes.m,
  },
});
