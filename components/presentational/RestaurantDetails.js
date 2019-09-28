import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import SectionHeaderContainer from './SectionHeaderContainer';
import SectionHeaderText from './SectionHeaderText';
import SectionContainer from './SectionContainer';
import TopPaddingWrapper from './TopPaddingWrapper';
import R from '../../styles/index';
import { moderateScale } from '../../styles/scale';

export default RestaurantDetails = ({ cardData, extendedData }) => {
    const { name, cuisines, thumb, color, rating, priceRange } = cardData;
    const { 
        userRating, 
        phoneNumbers,
        averageCostForTwo, 
        hasOnlineDelivery, 
        isDeliveringNow, 
        hasTableBooking, 
        tableReservationSupported,
        highlights,
        timings, 
        currency,
        offers,
        address
    } = extendedData;
    return (
        <TopPaddingWrapper>
            <SectionContainer>
                <SectionHeaderContainer>
                    <SectionHeaderText text={'Details'}/>
                </SectionHeaderContainer>
                <View style={styles.container}>
                    <View style={styles.split}>
                        <Text>{timings}</Text>
                        <View style={[styles.ratingContainer, {backgroundColor: color}]}>
                            <Text style={styles.ratingText}>{rating}</Text>
                            <Text style={styles.ratingTextGray}>/5</Text>
                        </View>
                    </View>
                    <View style={styles.split}>
                        <Text>{timings}</Text>
                    </View>
                </View>
            </SectionContainer>
        </TopPaddingWrapper>
    )
}

RestaurantDetails.propTypes = {
    cardData: PropTypes.exact({
        name: PropTypes.string.isRequired,
        cuisines: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        priceRange: PropTypes.number.isRequired,
    }),

    extendedData: PropTypes.exact({
        userRating: PropTypes.object.isRequired,
        phoneNumbers: PropTypes.string.isRequired,
        averageCostForTwo: PropTypes.number.isRequired,
        hasOnlineDelivery: PropTypes.number.isRequired,
        hasTableBooking: PropTypes.number.isRequired,
        isDeliveringNow: PropTypes.number.isRequired,
        tableReservationSupported: PropTypes.number.isRequired,
        highlights: PropTypes.array.isRequired,
        timings: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        offers: PropTypes.array.isRequired,
        address: PropTypes.string.isRequired,
    }),
};

const styles = StyleSheet.create({
    container: {
        padding: R.paddings.m,
        flexDirection: 'row',
    },

    split: {
        flex: 1,
    },

    ratingContainer: {
        height: moderateScale(45),
        aspectRatio: 3/2,
        borderRadius: R.roundBorderRadius / 2,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    ratingText: {
        alignSelf: 'center', 
        color: R.colors.light,
        fontSize: R.fontSizes.rating,
        fontFamily: R.fonts.lightFont,
        fontWeight: '400',
    },

    ratingTextGray: {
        alignSelf: 'center', 
        color: R.colors.lightText,
        fontSize: R.fontSizes.header,
        paddingBottom: R.paddings.xs,
        paddingLeft: R.paddings.xs,
        fontFamily: R.fonts.lightFont,
        fontWeight: '400',
    }
});

