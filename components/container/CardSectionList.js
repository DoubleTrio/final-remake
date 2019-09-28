import React from 'react';
import { SectionList, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import CardFlatList from './CardFlatList';
import R from '../../styles/index';
import Dash from '../presentational/Dash';

const _renderHeader = ({section}) => ( 
  <View style={styles.pv}>
    <Text style={styles.sectionTitleText}>{section.title}</Text>
    <Dash />
  </View>
)

const _keyExtractor = item => item.id

class CardSectionList extends React.Component {
    state = {
        onEndReachedCalledDuringMomentum: true 
    }
      
    static propTypes = {
        rawData: PropTypes.array.isRequired,
        navigateToDetailsScreen: PropTypes.func.isRequired,
    }

    _renderItem = ({ item }) => (
        <CardFlatList 
          data={item} 
          navigateToDetailsScreen={this.props.navigateToDetailsScreen}
        />
    )
    

    render() {
        const { rawData, navigateToDetailsScreen } = this.props;
        const categorizedData = rawData.reduce((obj, restaurant) => {
            const location = restaurant.locality
            return {
              ...obj, 
              [location]: [...(obj[location] || []), restaurant],
            }
        }, {});

        const sections = Object.keys(categorizedData)
        .map((restaurant, index) => ({
          data: [categorizedData[restaurant]], 
          title: restaurant,
          id: index,
        }));
        console.log('rendered')
        return (
            <SectionList 
                onEndReachedThreshold={0.01}
                renderSectionHeader={_renderHeader}
                renderItem={this._renderItem}
                sections={sections}
                extraData={this.state}
                keyExtractor={_keyExtractor}
                stickySectionHeadersEnabled={false}
                extraData={this.state.onEndReachedCalledDuringMomentum}
                showsVerticalScrollIndicator={false}
            />
        );
    }
}

export default CardSectionList;

const styles = StyleSheet.create({
    sectionTitleText: {
        fontSize: R.fontSizes.header,
        fontFamily: R.fonts.lightFont,
        marginBottom: R.paddings.xs,
    },

    pv: {
        marginHorizontal: R.paddings.m, 
        marginBottom: R.paddings.m,
    },
})