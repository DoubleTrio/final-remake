import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import R from '../../styles/index';

export default ThumbImage = ({ thumbUrl }) => (
  <Image
    style={styles.image}
    source={thumbUrl.length ? { uri: thumbUrl } : require('../../assets/defaultRestaurant.jpg')}
  />
);

ThumbImage.propTypes = {
  thumbUrl: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1 / 1,
    width: R.cardWidth,
    position: 'absolute',
  },
});
