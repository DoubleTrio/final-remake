import React from 'react';
import { SectionList, Text, ActivityIndicator, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import CardFlatList from './CardFlatList';

const findIndex = (current, max) => {
    if (max < 20) return 0
    const additionalIndex = current + 20
    const difference = max - additionalIndex
    return difference < 20 ? difference : 20
}

const _renderHeader = ({section}) => ( 
  <Text>{section.title}</Text>
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