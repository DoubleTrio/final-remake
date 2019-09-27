import React from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from '../presentational/Card';

class CardFlatList extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        navigateToDetailsScreen: PropTypes.func.isRequired,
    }

    render() {
        const { data, navigateToDetailsScreen } = this.props;
        return (
          <FlatList 
            renderItem={({item, index}) => <Card isLast={index === data.length - 1 ? true : false} cardData={item.cardData} navigateToDetailsScreen={navigateToDetailsScreen} id={item.id}/>}
            data={data}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
          />
        );
    }
};

export default CardFlatList;