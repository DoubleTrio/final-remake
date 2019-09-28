import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import SectionHeaderContainer from './SectionHeaderContainer';
import SectionHeaderText from './SectionHeaderText';
import SectionContainer from './SectionContainer';
import ReviewItem from './ReviewItem';
import TopPaddingWrapper from './TopPaddingWrapper';
import R from '../../styles/index';

const itemSeperator = () => (
  <View style={styles.itemSeperator} />
);

export default ReviewList = ({ reviews }) => {
  const renderItem = ({ item }) => (
    <ReviewItem {...item} />
  );

  return (
    <View style={styles.mb}>
      <TopPaddingWrapper>
        <SectionContainer>
          <SectionHeaderContainer>
            <SectionHeaderText text="Reviews" />
          </SectionHeaderContainer>
          <FlatList
            data={reviews}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={itemSeperator}
          />
        </SectionContainer>
      </TopPaddingWrapper>
    </View>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  itemSeperator: {
    backgroundColor: R.colors.bg,
    height: R.sBorder * 2,
    width: '100%',
  },

  mb: {
    marginBottom: R.paddings.l,
  },
});
