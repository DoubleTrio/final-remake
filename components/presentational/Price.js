import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';
import R from '../../styles/index';

const renderPrice = (p) => {
  const dollars = [];
  for (let i = 0; i < 4; i++) {
    dollars.push(<Text key={i} style={[styles.fs, p - 1 < i ? styles.grey : {}]}>$</Text>);
  }
  return dollars;
};

const Price = ({ p }) => (
  <Row>
    <Text style={styles.fs}>
Cost:
      {renderPrice(p)}
    </Text>
  </Row>
);

Price.propTypes = {
  p: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  fs: {
    fontSize: R.fontSizes.ms,
    fontFamily: R.fonts.lightFont,
  },
  grey: {
    color: R.colors.border,
  },
});

export default Price;
