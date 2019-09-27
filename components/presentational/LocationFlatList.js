import React from 'react';
import { FlatList, Text, View, StyleSheet, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import LocationItem from './LocationItem';
import R from '../../styles/index';

const _itemSeperator = () => (
    <View style={styles.itemSeperator}></View>
)

const dismissKeyboard = () => {
    Keyboard.dismiss()
}

const LocationFlatList = ({locations, handleLocationSelection, currentSelection}) => {
    return (
        <FlatList 
            data={locations}
            renderItem={({item}) => <LocationItem handleLocationSelection={handleLocationSelection} isSelected={currentSelection === item.id} location={item}/>}
            keyExtractor={item => item.id + ''}
            ItemSeparatorComponent={_itemSeperator}
            onMomentumScrollBegin={dismissKeyboard}
            contentContainerStyle={styles.pb}
            showsVerticalScrollIndicator={false}
            extraData={currentSelection}
        />
    )
};

LocationFlatList.propTypes = {
    locations: PropTypes.array.isRequired,
    handleLocationSelection: PropTypes.func.isRequired,
    currentSelection: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    itemSeperator: {
        backgroundColor: R.colors.bg, 
        height: R.sBorder,
        width: '100%',
    },

    pb: {
        paddingBottom: R.paddings.xxl,
    }
})
export default LocationFlatList;
