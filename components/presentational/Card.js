import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from '../../styles/scale';
import R from '../../styles/index';
import Row from './Row';
import ThumbImage from './ThumbImage';
import Price from './Price';


const Card = ({ cardData, navigateToDetailsScreen, id }) => {
  const {
    city, color, cuisines, priceRange, rating, thumb, name,
  } = cardData;
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => navigateToDetailsScreen(name, id)}>
      <View style={styles.imageContainer}>
        <ThumbImage thumbUrl={thumb} />
        <View style={[styles.ratingContainer, { backgroundColor: color }]}>
          <Row>
            <Text style={styles.headerText}>{rating || 'NA'}</Text>
            <Ionicons
              name="md-star"
              style={styles.icon}
            />
          </Row>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>{name || 'NA'}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.smallFont}>{city}</Text>
        <Price p={priceRange} />
        <Text style={styles.smallFont}>{cuisines || 'No cuisines found'}</Text>
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  cardData: PropTypes.exact({
    city: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cuisines: PropTypes.string.isRequired,
    priceRange: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  navigateToDetailsScreen: PropTypes.func.isRequired,
  isLast: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: R.cardWidth,
    height: R.cardHeight,
    marginBottom: R.paddings.m,
    overflow: 'hidden',
    borderWidth: R.sBorder,
    borderRadius: R.sBorderRadius,
    borderColor: R.colors.border,
    elevation: 1,
    backgroundColor: R.colors.light,
  },

  smallFont: {
    fontSize: R.fontSizes.s,
    paddingVertical: R.paddings.xs,
  },
  
  imageContainer: {
    aspectRatio: 1 / 1,
    width: 'auto',
    flexDirection: 'row',
  },

  image: {
    aspectRatio: 1 / 1,
    width: R.cardWidth,
    position: 'absolute',
  },

  ratingContainer: {
    alignSelf: 'flex-start',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    alignContent: 'center',
    paddingHorizontal: R.paddings.xs,
  },

  headerText: {
    color: R.colors.light,
    fontSize: R.fontSizes.header,
  },

  icon: {
    paddingLeft: R.paddings.xs,
    alignSelf: 'center',
    color: R.colors.light,
    fontSize: R.iconSizeSmall,
  },

  titleContainer: {
    flex: 1,
    backgroundColor: R.colors.darkened,
    alignSelf: 'flex-end',
    paddingHorizontal: R.paddings.xs,
    position: 'absolute',
    width: '100%',
  },

  infoContainer: {
    paddingHorizontal: R.paddings.xs,
    borderTopColor: R.colors.border,
    borderTopWidth: R.sBorder,
  },
});

export default Card;
