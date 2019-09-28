import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import SectionHeaderContainer from './SectionHeaderContainer';
import SectionHeaderText from './SectionHeaderText';
import SectionContainer from './SectionContainer';
import TopPaddingWrapper from './TopPaddingWrapper';
import R from '../../styles/index';
import { moderateScale } from '../../styles/scale';
import Row from './Row';

const RenderBoolIcon = ({ n, text }) => (
  <Row>
    <Text style={[styles.defaultFontGray, styles.mb]}>{text}</Text>
    <Feather name={n === 1 ? 'check' : 'x'} style={styles.icon} color={n === 1 ? R.colors.selected : R.colors.error} />
  </Row>
);

export default RestaurantDetails = ({ cardData, extendedData, needsMargin }) => {
  const {
    name, cuisines, thumb, color, rating, priceRange,
  } = cardData;
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
    address,
  } = extendedData;

  const moreInfoArray = [
    {
      n: hasOnlineDelivery,
      text: 'Delivers Online?',
      id: '1',
    },
    {
      n: isDeliveringNow,
      text: 'Delivering Now?',
      id: '2',
    },
    {
      n: tableReservationSupported,
      text: 'Supports Reservations?',
      id: '3',
    },
    {
      n: hasTableBooking,
      text: 'Available Bookings?',
      id: '4',
    },
  ];

  return (
    <View style={needsMargin ? styles.mbContainer : {}}>
      <TopPaddingWrapper>
        <SectionContainer>
          <SectionHeaderContainer>
            <SectionHeaderText text="Details" />
          </SectionHeaderContainer>
          <View style={styles.container}>
            <View style={styles.split}>
              <View style={[styles.ratingContainer, { backgroundColor: color }]}>
                <Text style={styles.ratingText}>{rating}</Text>
                <Text style={styles.ratingTextGray}>/5</Text>
              </View>
              <Text style={[styles.defaultFontGray, styles.mb]}>
                {userRating.votes}
                {' '}
votes
              </Text>
              <Text style={styles.sectionFont}>Address</Text>
              <Text style={styles.defaultFont}>{address || 'No address found'}</Text>
              <Text style={styles.sectionFont}>Openings</Text>
              <Text style={styles.defaultFont}>{timings || 'No openings found'}</Text>
              <Text style={styles.sectionFont}>Phone Numbers</Text>
              <Text style={styles.defaultFont}>{phoneNumbers || 'No phone numbers found'}</Text>
              <Text style={styles.sectionFont}>Average Cost</Text>
              <Text style={styles.defaultFont}>{currency + averageCostForTwo || 'Average cost not found'}</Text>

            </View>
            <View style={[styles.split, styles.pl]}>
              <Text style={styles.sectionFont}>Cuisines</Text>
              <Text style={styles.defaultFont}>{cuisines || 'No cuisines found'}</Text>
              <Text style={styles.sectionFont}>Highlightz</Text>
              <Text style={styles.defaultFont}>{highlights.length >= 1 ? highlights : 'None'}</Text>
              <Text style={styles.sectionFont}>Offers</Text>
              <Text style={styles.defaultFont}>{offers.length >= 1 ? offers : 'None'}</Text>
              <Text style={styles.sectionFont}>More info</Text>
              {moreInfoArray.map((obj) => <RenderBoolIcon key={obj.id} n={obj.n} text={obj.text} />)}
            </View>
          </View>
        </SectionContainer>
      </TopPaddingWrapper>
    </View>
  );
};

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
    highlights: PropTypes.string.isRequired,
    timings: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    offers: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),

  needsMargin: PropTypes.bool.isRequired,
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
    aspectRatio: 3 / 2,
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
  },

  sectionFont: {
    fontSize: R.fontSizes.m,
    fontFamily: R.fonts.lightFont,
    marginBottom: R.paddings.s,
    fontWeight: '400',
  },

  defaultFont: {
    fontSize: R.fontSizes.ms,
    marginBottom: R.paddings.l,
    fontFamily: R.fonts.lightFont,
  },

  defaultFontGray: {
    fontSize: R.fontSizes.ms,
    color: R.colors.border,
    fontFamily: R.fonts.lightFont,
  },

  mb: {
    marginBottom: R.paddings.m,
  },

  pl: {
    paddingLeft: R.paddings.m,
  },

  icon: {
    fontSize: R.fontSizes.header,
  },

  mbContainer: {
    marginBottom: R.paddings.l,
  },

});
