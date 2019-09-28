import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SectionHeaderContainer from './SectionHeaderContainer';
import SectionHeaderText from './SectionHeaderText';
import GalleryItem from './GalleryItem';
import SectionContainer from './SectionContainer';
import TopPaddingWrapper from './TopPaddingWrapper';

export default GalleryList = ({ photos }) => {
  const _renderItem = ({ item, index }) => (
    <GalleryItem
      isSingle={photos.length === 1}
      thumbUrl={item.thumbUrl}
      time={item.friendlyTime}
      isLast={photos.length - 1 === index}
    />
  );

  return (
    <TopPaddingWrapper>
      <SectionContainer>
        <SectionHeaderContainer>
          <SectionHeaderText text="Gallery" />
        </SectionHeaderContainer>
        <FlatList
          data={photos}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </SectionContainer>
    </TopPaddingWrapper>
  );
};

GalleryList.propTypes = {
  photos: PropTypes.array.isRequired,
};
