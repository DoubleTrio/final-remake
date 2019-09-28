import React from 'react';
import {
  View, StyleSheet, Image, Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import R from '../../styles/index';
import Row from './Row';

const renderStars = (rating) => {
  const ceilRating = Math.ceil(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesome
        name="star"
        color={ceilRating - 1 < i ? R.colors.starGrey : R.colors.starBlue}
        style={styles.starIcon}
        key={i}
      />,
    );
  }
  return stars;
};
export default ReviewItem = ({
  id, like, rating, ratingColor, reviewTime, reviewText, user,
}) => {
  const {
    foodieColor, foodieLevel, name, profile,
  } = user;
  return (
    <View style={styles.container}>
      <Row>
        <Image
          source={{ uri: profile }}
          style={styles.profile}
        />
        <View style={styles.pl}>
          <Text style={styles.user}>{name}</Text>
          <Row>
            {renderStars(rating)}
          </Row>
          <View style={[styles.ratingContainer, { backgroundColor: ratingColor }]}>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
      </Row>
      <View style={styles.pt}>
        <Text style={[styles.defaultFont, styles.date]}>{reviewTime}</Text>
        <Text style={styles.defaultFont}>{reviewText}</Text>
      </View>
    </View>
  );
};

ReviewItem.propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  ratingColor: PropTypes.string.isRequired,
  reviewTime: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  user: PropTypes.exact({
    foodieColor: PropTypes.string.isRequired,
    foodieLevel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
  }),
};

const styles = StyleSheet.create({
  container: {
    marginVertical: R.paddings.m,
    paddingHorizontal: R.paddings.m,
  },

  profile: {
    aspectRatio: 1 / 1,
    width: R.iconContainerWidth / 1.1,
    borderRadius: R.roundBorderRadius,
    borderWidth: R.sBorder,
  },
  starIcon: {
    paddingRight: R.paddings.s / 2,
    paddingBottom: R.paddings.s,
    fontSize: R.fontSizes.s,
  },

  ratingContainer: {
    height: R.iconSize,
    aspectRatio: 4 / 3,
    borderRadius: R.sBorderRadius,
    alignContent: 'center',
    justifyContent: 'center',
  },

  ratingText: {
    alignSelf: 'center',
    color: R.colors.light,
    fontSize: R.fontSizes.s,
  },

  pl: {
    marginLeft: R.paddings.s,
  },

  pt: {
    paddingTop: R.paddings.m,
  },

  user: {
    fontSize: R.fontSizes.m,
    fontFamily: R.fonts.lightFont,
    paddingBottom: R.paddings.xs,
  },

  defaultFont: {
    fontSize: R.fontSizes.ms,
    fontFamily: R.fonts.lightFont,
  },

  date: {
    color: R.colors.border,
    paddingBottom: R.paddings.s,
  },
});
