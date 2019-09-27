import React from 'react';
import { Image, StyleSheet } from 'react-native';
import R from '../../styles/index';
import PropTypes from 'prop-types';

export default ThumbImage = ({ thumbUrl }) => (
    <Image 
        style={styles.image}
        source={thumbUrl.length ? {uri: thumbUrl} : require('../../assets/defaultRestaurant.jpg')}
    />
)

ThumbImage.propTypes = {
    thumbUrl: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1/1,
        width: R.cardWidth,  
        position: 'absolute',
    },
})
