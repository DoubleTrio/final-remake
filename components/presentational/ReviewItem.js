import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';
import R from '../../styles/index';

export default ReviewItem = ({ id, like, rating, ratingColor, reviewTime, reviewText, user}) => {
    const { foodieColor, foodieLevel, name, profile } = user;
    return (
        <View style={styles.container}>
        <Row>
            <Image 
                source={{uri: profile}}
                style={styles.profile}
            />
            <Text>{name}</Text>
        </Row>
        <Text>{reviewText}</Text>
        </View>
    )
}

ReviewItem.propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    ratingColor: PropTypes.string.isRequired,
    reviewTime: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    user: PropTypes.exact({
        foodieColor: PropTypes.string.isRequired,
        foodieLevel: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired
    }),
}

const styles = StyleSheet.create({
    container: {
        marginVertical: R.paddings.l,
        paddingHorizontal: R.paddings.m,
    },
    
    profile: {
    aspectRatio: 1 / 1,
    width: R.iconContainerWidth / 1.5,
    borderRadius: R.roundBorderRadius,
    borderWidth: R.sBorder,
    },
})