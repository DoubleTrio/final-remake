import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import SectionHeaderContainer from './SectionHeaderContainer';
import SectionHeaderText from './SectionHeaderText';
import SectionContainer from './SectionContainer';
import ReviewItem from './ReviewItem';
import TopPaddingWrapper from './TopPaddingWrapper';
import R from '../../styles/index';

const _itemSeperator = () => (
    <View style={styles.itemSeperator}></View>
)

export default ReviewList = ({ reviews }) => {

    const _renderItem = ({item}) => (
        <ReviewItem {...item}/>
    )

    return (
        <TopPaddingWrapper>
            <SectionContainer>
                <SectionHeaderContainer>
                    <SectionHeaderText text={'Reviews'}/>
                </SectionHeaderContainer>
                
                <FlatList 
                    data={reviews}
                    renderItem={_renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.pb}
                    ItemSeparatorComponent={_itemSeperator}
                />
            </SectionContainer>
        </TopPaddingWrapper>
    );
};

ReviewList.propTypes = {
    reviews: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    itemSeperator: {
        backgroundColor: R.colors.bg, 
        height: R.sBorder,
        width: '100%',
    },
    
    pb: {
        paddingBottom: 50,
        marginBottom: 200,
    },
});
